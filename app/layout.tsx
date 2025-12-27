"use client";

import "@/styles/globals.css";
import "@/styles/globals.scss";

import { usePathname, useRouter } from "next/navigation";
import { inter } from "@/styles/fonts";
import Providers from "./providers/Providers";
import { useEffect } from "react";
import AppBar from "@/components/AppBar/AppBar";

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username && pathname !== "/signup") {
      router.push("/signup");
    }
  }, [pathname, router]);

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
