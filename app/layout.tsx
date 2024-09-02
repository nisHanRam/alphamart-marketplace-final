import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/Navigation";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlphaMart",
  description: "Shop Smart, Build Fast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} p bg-canvas text-blue-50`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
