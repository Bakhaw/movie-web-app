"use client";

import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import BottomNavigation from "@/components/BottomNavigation";
import LeftNavigation from "@/components/LeftNavigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="hidden md:flex">
            <LeftNavigation />
          </div>

          <div className="min-h-screen w-full pb-[64px] md:pb-0 bg-purple">
            {children}
          </div>

          <div className="md:hidden">
            <BottomNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
