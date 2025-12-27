"use client";

import "@/styles/globals.css";
import "@/styles/globals.scss";

import { inter } from "@/styles/fonts";
import Providers from "./providers/Providers";
import AppBar from "@/components/AppBar/AppBar";

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // next-themes adds className and style attributes
  // to the <html> tag after the client mounts
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          <AppBar />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
