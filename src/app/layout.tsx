"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";

import BottomNavigation from "@/components/BottomNavigation";
import Sidebar from "@/components/Sidebar";

import { ScrollArea } from "@/components/ui/scroll-area";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="hidden md:flex">
              <Sidebar />
            </div>

            <ScrollArea className="h-screen w-full">{children}</ScrollArea>

            <div className="md:hidden">
              <BottomNavigation />
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
