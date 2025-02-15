import type { Metadata } from "next";
import "./globals.css";
import {Archivo} from "next/font/google"

const archivo =Archivo({
  variable: "--font-Archivo",
  display: "swap",
  weight:"variable",
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Single Page Portfolio",
  description: "Created with Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>{children}</body>
    </html>
  );
}
