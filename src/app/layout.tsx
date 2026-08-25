import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "A Birthday Surprise", description: "A surprise made with love" };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
