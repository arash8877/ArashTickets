import type { ReactNode } from "react";
import ReactQueryProvider from "../provider";

export default function TicketsLayout({ children }: { children: ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
