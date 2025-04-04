import Navbar from "@/app/components/navbar";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="size-full flex">
      <Suspense>
        <Navbar />
      </Suspense>
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <p className="text-xl">Хянах самбар</p>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
