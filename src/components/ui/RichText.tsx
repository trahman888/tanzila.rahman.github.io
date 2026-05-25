import type { PropsWithChildren } from "react";
import { renderRich } from "../../lib/richTextUtils";

export function RichText({ children }: PropsWithChildren<object>) {
  return <>{renderRich(children)}</>;
}
