import Link from "next/link";
import { FadeContainer, FadeDiv, FadeSpan } from "./Fade";
import { RiArrowRightUpLine } from "@remixicon/react";

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <FadeDiv className="mx-auto">
          <a
            aria-label="Latest update news"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full"
          >
            <div className="group inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 dark:bg-white  px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 ring-1 shadow-lg shadow-red-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-red-400 dark:hover:bg-red-400 focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50  dark:bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                News
              </span>
              <span className="group flex items-center gap-1 truncate">
                <span className="w-full truncate group-hover:text-white">
                  We are applying to Gitcoin Grants 23
                </span>

                <RiArrowRightUpLine className="group-hover:text-white size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Surface</FadeSpan> <FadeSpan>Alpha</FadeSpan>
          <br />
          <FadeSpan>for</FadeSpan> <FadeSpan>Attestations</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 dark:text-gray-300 sm:mt-8 sm:text-xl">
          <FadeSpan>Empowering attestation developers and</FadeSpan>{" "}
          <FadeSpan>data analysts with tools</FadeSpan>{" "}
          <FadeSpan>and onchain insights to maximize opportunities.</FadeSpan>
        </p>
        <FadeDiv>
          <Link
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-red-700 bg-linear-to-b from-red-400 to-red-500 px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
            href="/reports"
          >
            Unleash Now
          </Link>
        </FadeDiv>
      </FadeContainer>
    </section>
  );
}
