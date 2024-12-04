"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { usePathname } from 'next/navigation';
import Loader from "../components/loader";
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const showSidebar = pathname !== '/';

  useEffect(() => {
    const handleComplete = () => setLoading(false);
    if (document.readyState === 'complete') {
      handleComplete();
    } else {
      window.addEventListener('load', handleComplete);
      return () => window.removeEventListener('load', handleComplete);
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {showSidebar ? <Sidebar>{children}</Sidebar> : children}
            <NextTopLoader/>
          </>
        )}
      </body>
    </html>
  );
}
