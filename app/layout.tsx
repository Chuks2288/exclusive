import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provder";
import { siteConfig } from "@/config";

import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import QueryProvider from "@/providers/query-provider";

import { Provider } from "react-redux";
import { store } from "@/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <QueryProvider>
            <Provider store={store}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <Toaster />
                <ModalProvider />
                {children}
              </ThemeProvider>
            </Provider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
