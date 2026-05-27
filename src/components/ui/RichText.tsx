import type { PropsWithChildren } from "react";
import { boldify, linkify } from "../../lib/richTextUtils";


export function RichText({ children }: PropsWithChildren<object>) {
  const renderRich = (text: React.ReactNode): React.ReactNode => {
    if (text === null || text === undefined) return null;
    const str = String(text);
    return linkify(str).flatMap((part) => {
      if (typeof part === "string") {
        return boldify(part);
      }
      return part;
    });
  }
  return <>{renderRich(children)}</>;
}
