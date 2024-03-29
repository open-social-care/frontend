import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Care",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
