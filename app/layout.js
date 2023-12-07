import "./globals.css";
import { Inter } from "next/font/google";

import clsx from "clsx";

import { ThemeProvider } from "@/src/theme/ThemeProvider";
import { Header } from "@/src/feature/layout/Header";
import { Footer } from "@/src/feature/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs Boilerplate",
  description: "A boilerplate for a next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "bg-background h-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="flex-1 m-auto py-5 w-full">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
