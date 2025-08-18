import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclid = localFont({
  src: [
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-light-italic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-medium-italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-semibold-italic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/euclid-circular-b/euclid-circular-b-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-euclid",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myxellia Figma",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${euclid.variable} antialiased`}>{children}</body>
    </html>
  );
}
