
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { NavigationMenuDemo } from "@/components/nav-bar";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Analytics } from "@vercel/analytics/react"

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
        <link rel="icon" href="/favicon.png"/>
      </head>
      <body className={inter.className}>
        <div className="flex justify-around items-center">
        <Image 
            src={'/Danley.png'}
            alt={'logo'}
            width={100}
            height={100}
            quality={100}
           
          />
          <NavigationMenuDemo />
          <div className="hidden md:block">
            <MagnifyingGlassIcon />
          </div>
        </div>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
