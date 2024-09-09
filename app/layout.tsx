import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import "./globals.css";
import { esES } from "@clerk/localizations";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Healthy",
  description: "data health for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="en">
        <body className={noto.className}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  );
}
