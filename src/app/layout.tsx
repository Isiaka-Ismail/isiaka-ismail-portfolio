import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isiaka Ismail | DevOps & Cloud Engineer",
  description:
    "Portfolio of Isiaka Ismail, a DevOps and Cloud Engineer focused on cloud infrastructure, automation, and reliable deployment workflows.",
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