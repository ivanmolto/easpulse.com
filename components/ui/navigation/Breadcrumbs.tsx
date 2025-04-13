"use client";

import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);
  const currentPage = segments[0];
  let nav = "";
  if (currentPage === "passport") {
    nav = "Human Passport";
  } else if (currentPage === "gitcoin") {
    nav = "Gitcoin";
  } else if (currentPage === "ethereum") {
    nav = "Ethereum";
  } else if (currentPage === "coinbase") {
    nav = "Coinbase Verifications";
  } else if (currentPage === "optimism") {
    nav = "Optimism";
  } else if (currentPage === "collective") {
    nav = "The Optimism Collective";
  } else if (currentPage === "arbitrum") {
    nav = "Arbitrum One";
  } else if (currentPage === "nova") {
    nav = "Arbitrum Nova";
  } else if (currentPage === "base") {
    nav = "Base";
  } else if (currentPage === "celo") {
    nav = "Celo";
  } else if (currentPage === "linea") {
    nav = "Linea";
  } else if (currentPage === "scroll") {
    nav = "Scroll";
  } else if (currentPage === "zksync") {
    nav = "zkSync Era";
  } else if (currentPage === "polygon") {
    nav = "Polygon";
  } else if (currentPage === "clique") {
    nav = "Clique";
  } else if (currentPage === "fest") {
    nav = "Attest Fest";
  } else if (currentPage === "bountycaster") {
    nav = "Bountycaster";
  } else if (currentPage === "coordinape") {
    nav = "Coordinape";
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="ml-2">
        <ol role="list" className="flex items-center space-x-3 text-sm">
          <li className="flex">
            <Link
              href="/passport/overview"
              className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-300"
            >
              Home
            </Link>
          </li>
          <ChevronRight
            className="size-4 shrink-0 text-gray-600 dark:text-gray-400"
            aria-hidden="true"
          />
          <li className="flex">
            <div className="flex items-center">
              <Link
                href={pathname}
                // aria-current={page.current ? 'page' : undefined}
                className="text-gray-900 dark:text-gray-50"
              >
                {nav}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
