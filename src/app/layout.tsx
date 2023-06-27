import "./styles/globals.css";
import { Inter } from "next/font/google";
import Toaster from "./components/BaseToast";
import Header from "./components/Header";
import { Metadata } from "next";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Starter Template",
  description: "A starter template for Notion",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <Toaster />
        <Header />
        <main className="h-screen w-screen grow p-3 text-white md:mx-auto md:h-full md:max-w-5xl">
          {children}
        </main>
      </body>
    </html>
  );
}
