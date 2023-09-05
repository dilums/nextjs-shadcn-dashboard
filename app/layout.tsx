import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/layout/ThemeProvider";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Shacdn",
  description: "Basic dashboard with Next.js and Shacdn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="grow pt-16">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
