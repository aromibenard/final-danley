
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { NavigationMenuDemo } from "@/components/nav-bar";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "D Waste",
  description: "Waste Collection and Recycling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* head content here */}
      </head>
      <body className={inter.className}>
        <div className="flex justify-around items-center">
          <Image 
            src={'/logo.png'}
            alt={'logo'}
            width={80}
            height={80}
          />
          <NavigationMenuDemo />
          <div className="">
            <MagnifyingGlassIcon />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
