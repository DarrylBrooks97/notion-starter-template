import { Inter } from "next/font/google";
import "./styles/globals.css";
import BaseToast from "./components/BaseToast";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notion Starter Template",
  description: "A starter template for Notion",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <BaseToast />
        <main className="h-screen w-screen p-3 text-white md:mx-auto md:h-[95%] md:w-screen md:max-w-5xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
