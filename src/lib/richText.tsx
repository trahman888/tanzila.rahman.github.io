// Tiny inline-link renderer for content stored in data files.
//
// Supported syntax in any data-file string:
//   "I worked with [Leonid Sigal](https://www.cs.ubc.ca/~lsigal/) at UBC."
//
// Internal links (starting with "/" or "#") render as same-tab anchors.
// External links (http/https/mailto/tel) open in a new tab.
//
// Usage:
//   import { RichText } from "../lib/richText";
//   <p><RichText>{profile.about[0]}</RichText></p>

import React from "react";
import type { PropsWithChildren } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const BOLD_RE = /\*(.*?)\*/g;

const LINK_CLASS =
  "text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors";

function isExternal(url: string) {
  return (
    /^https?:\/\//i.test(url) ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  );
}

function boldify(text: string) {
  const parts = [];
  let lastIndex = 0;
  let key = 0;
  let match;
  while ((match = BOLD_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label] = match;
    parts.push(
      <strong key={`bld-${key++}`} className="font-bold">
        {label}
      </strong>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function linkify(text: string) {
  const parts = [];
  let lastIndex = 0;
  let key = 0;
  let match;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, url] = match;
    const external = isExternal(url);
    parts.push(
      <a
        key={`lnk-${key++}`}
        href={url}
        className={LINK_CLASS}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {label}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function renderRich(text: React.ReactNode) {
  if (text === null || text === undefined) return null;
  const str = String(text);
  return linkify(str).flatMap((part) => {
    if (typeof part === "string") {
      return boldify(part);
    }
    return part;
  });
}

export function RichText({ children }: PropsWithChildren<{}>) {
  return <>{renderRich(children)}</>;
}

export function makeBoldText(str: string) {
  return `*${str}*`;
}

export function makeLinkText(label: string, url: string) {
  return `[${label}](${url})`;
}

export function clearTextLinks(str: string) {
  // Remove any existing markdown links to avoid conflicts with our own linkification.
  return str.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
}

export function clearTextBold(str: string) {
  // Remove existing * for bold to avoid conflicts with hero name formatting.
  return str.replace(/\*(.*?)\*/g, "$1");
}

export function clearRich(str: string) {
  return clearTextLinks(clearTextBold(str));
}
