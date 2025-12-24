import "@/styles/globals.css";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { inter } from "@/styles/fonts";

// If loading a variable font, you don't need to specify the font weight

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // next-themes adds className and style attributes
  // to the <html> tag after the client mounts
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  );
}
