import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});
const lufgaBold = localfont({
  variable: "--font-lufga-bold",
  src: "../fonts/LufgaBold.woff",
});
const lufgaRegular = localfont({
  variable: "--font-lufga",
  src: "../fonts/LufgaRegular.woff",
});

export const metadata: Metadata = {
  title: "Iconic Minds",
  description: "Iconic Minds - Viver com Entusiasmo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lufgaBold.variable} ${lufgaRegular.variable} ${workSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
