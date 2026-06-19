import type { PropsWithChildren } from "react";
import { boldify, linkify, imageify } from "../../lib/richTextUtils";


export function RichText({ children }: PropsWithChildren<object>) {
  const renderRich = (text: React.ReactNode): React.ReactNode => {
    if (text === null || text === undefined) return null;
    const str = String(text);
    return imageify(str).flatMap((part) => {
      if (typeof part === "string") {
        return linkify(part).flatMap((subPart) => {
          if (typeof subPart === "string") {
            return boldify(subPart);
          }
          return subPart;
        });
      }
      return part;
    });
  };

  return <>{renderRich(children)}</>;
}
