import type { Metadata } from "next";
import { poppins, rufina, roboto } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivo Fashion",
  description: "Discover and Find Your Own Fashion!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${rufina.variable} ${roboto.variable}`}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
