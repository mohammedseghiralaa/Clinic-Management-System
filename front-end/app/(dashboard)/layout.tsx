import type { Metadata } from "next";
import "../globals.css";
import Navigation from "../_components/SideBarNavigation";

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
