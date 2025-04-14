import { Button } from "@/components/Button";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { siteConfig } from "./siteConfig";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link
        href={siteConfig.baseLinks.all.overview}
        aria-label="Go to All chains page"
      >
        <div>
          <Logo
            className="-ml-3 size-12 text-red-500 dark:text-red-500"
            aria-hidden="true"
          />
        </div>
      </Link>
      <div className="mt-6 flex flex-col">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
          eas pulse
        </h1>
      </div>
      <p
        className="mt-6 text-4xl font-semibold text-red-600 sm:text-5xl dark:text-red-500"
        aria-hidden="true"
      >
        404
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-50">
        Page not found
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Sorry, we could not find the page you are looking for.
      </p>
      <Button
        asChild
        className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-red-700 bg-linear-to-b from-red-400 to-red-500 px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
      >
        <Link href={siteConfig.baseLinks.all.overview}>
          Go to All chains page
        </Link>
      </Button>
    </div>
  );
}
