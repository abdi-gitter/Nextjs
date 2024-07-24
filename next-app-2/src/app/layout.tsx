import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChidrenProp } from "@/lib/types";
import Navbar from "@/components/Layout/Navbar/Navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import Footer from "@/components/Layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"Clarusway | Home",
    template:"Clarusway | %s"
  },
  description: "Learn and share knowleage about web development",
};

export default function RootLayout({children}: ChidrenProp) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "flex flex-col h-full w-full")}>
        <ThemeProvider  attribute="class">
        <Navbar/>
        <main className="flex-1 container m-auto px-2">{children}</main>
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
