import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const typeWriter = localFont({
  src: "./fonts/typeWriter.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paperclip",
  description: "Draw your own assets, get art supplies!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.jpg" />
      <body className={`${typeWriter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
