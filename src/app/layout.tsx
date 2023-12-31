import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angels Burger",
  description: "Angels Burger Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
  <body className={inter.className}	>
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  </body>
</html>
  );
}