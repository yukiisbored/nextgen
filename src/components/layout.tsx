import * as React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="p-4 mt-5 mx-auto max-w-5xl">{children}</main>;
}
