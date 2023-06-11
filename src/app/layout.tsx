import "./globals.css";

import NavigationBar from "@/components/NavigationBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <NavigationBar />
        <div className="min-h-screen w-full bg-purple">{children}</div>
      </body>
    </html>
  );
}
