"use client";
import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation";
import { ScrollMetricsCards } from "@/components/ui/scroll/ScrollMetricsCards";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { siteConfig } from "../../siteConfig";

const navigation = [
  { name: "Overview", href: siteConfig.baseLinks.scroll.overview },
  { name: "Trends", href: siteConfig.baseLinks.scroll.trends },
];
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      <div className="bg-white dark:bg-gray-925">
        <div className="p-4 sm:p-2">
          <ScrollMetricsCards />
        </div>
        <TabNavigation className="mt-6 gap-x-4 px-4 sm:px-6">
          {navigation.map((item) => (
            <TabNavigationLink
              key={item.name}
              asChild
              active={pathname === item.href}
            >
              <Link href={item.href}>{item.name}</Link>
            </TabNavigationLink>
          ))}
        </TabNavigation>
        <>{children}</>
      </div>
    </>
  );
}
