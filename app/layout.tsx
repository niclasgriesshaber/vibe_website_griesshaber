import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niclas Griesshaber",
  description: "I am a researcher in Economic History and Machine Learning.",
  icons: {
    icon: [
      {
        url: '/favicon.png?v=3.0',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon.ico?v=3.0',
        sizes: '16x16',
        type: 'image/x-icon'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
