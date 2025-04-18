import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { GeistSans } from "geist/font/sans";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Providers from "./providers";
import "./globals.css";
import { siteConfig } from "./siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.easpulse.com"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "EAS",
    "Attestations",
    "Arbitrum One",
    "Base",
    "Celo",
    "Ethereum",
    "Linea",
    "Arbitrum Nova",
    "Optimism",
    "Polygon",
    "Scroll",
    "zkSync",
  ],
  authors: [
    {
      name: "Ivan Molto",
      url: "https://www.ivanmolto.com",
    },
  ],
  creator: "Ivan Molto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    /* images: [
       {
         url: siteConfig.ogImage,
       },
     ], */
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@ivanmolto",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden overflow-y-scroll scroll-auto bg-gray-50 dark:bg-gray-950 antialiased selection:bg-orange-100 selection:text-amber-600`}
      >
        <ThemeProvider defaultTheme="system" attribute="class">
          <NuqsAdapter>
            <Providers>{children}</Providers>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
