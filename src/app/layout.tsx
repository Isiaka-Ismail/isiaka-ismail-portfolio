import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isiaka Ismail | DevOps & Cloud Engineer",
  description:
  "Isiaka Ismail is a DevOps and Cloud Engineer focused on AWS, Terraform, Kubernetes, CI/CD, automation, and reliable cloud infrastructure.",
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