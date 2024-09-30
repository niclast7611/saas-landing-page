import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xora | Saas Landing Page",
  description: "Saas Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
