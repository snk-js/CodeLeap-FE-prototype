"use client";

import "@/styles/globals.css";
import "@/styles/globals.scss";

import { usePathname, useRouter } from "next/navigation";
import { inter } from "@/styles/fonts";
import Providers from "./providers/Providers";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitcher";
import { useEffect } from "react";

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
          <div className="w-full flex justify-center items-center h-[3rem] fixed z-51">
            <ThemeSwitch />
          </div>
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
