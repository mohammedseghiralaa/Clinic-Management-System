import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import ClientProvider from "@/app/ClientProvider";
export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
