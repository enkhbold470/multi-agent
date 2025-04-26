import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rest&Vest | AI-Powered Startup Matching for Investors",
  description:
    "Find your perfect startup investment match with our AI-powered platform that connects investors with startups based on customized criteria.",
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
