import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ValoriaSMP Store",
  description:
    "Official ValoriaSMP Store • Purchase Premium Ranks with Secure Payments.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ValoriaSMP Store",
    description:
      "Purchase Premium ValoriaSMP Ranks with Instant Delivery.",
    siteName: "ValoriaSMP Store",
    type: "website",
  },
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
