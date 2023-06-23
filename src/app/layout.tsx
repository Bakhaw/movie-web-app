"use client";

import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import BottomNavigation from "@/components/BottomNavigation";
import Sidebar from "@/components/Sidebar";

import { ScrollArea } from "@/components/ui/scroll-area";

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
            <Sidebar />
          </div>

          <ScrollArea className="h-screen w-full">{children}</ScrollArea>

          <div className="md:hidden">
            <BottomNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
