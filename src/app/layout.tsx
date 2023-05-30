import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notion Starter Template",
  description: "A starter template for Notion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen w-screen items-center justify-center bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
