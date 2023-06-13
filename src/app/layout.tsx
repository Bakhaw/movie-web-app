import BottomNavigation from "@/components/BottomNavigation";
import LeftNavigation from "@/components/LeftNavigation";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <div className="hidden md:flex">
          <LeftNavigation />
        </div>

        <div className="min-h-screen w-full pb-[64px] md:pb-0 bg-purple">
          {children}
        </div>

        <div className="md:hidden">
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
