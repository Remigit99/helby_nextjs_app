import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helby Inc",
  description: "This is a amazing site ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
