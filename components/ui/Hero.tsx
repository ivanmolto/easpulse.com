import Link from "next/link";
import { FadeContainer, FadeDiv, FadeSpan } from "./Fade";

export function Hero() {
  return (
    <section aria-label="hero">
      <FadeContainer className="relative flex flex-col items-center justify-center">
        <h1 className="mt-8 text-center text-5xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-8xl sm:leading-[5.5rem]">
          <FadeSpan>Surface</FadeSpan> <FadeSpan>Alpha</FadeSpan>
          <br />
          <FadeSpan>for</FadeSpan> <FadeSpan>Attestations</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 dark:text-gray-300 sm:mt-8 sm:text-xl">
          <FadeSpan>Empowering attestation developers and</FadeSpan>{" "}
          <FadeSpan>data analysts with tools</FadeSpan>{" "}
          <FadeSpan>and on-chain insights to maximize opportunities.</FadeSpan>
        </p>
        <FadeDiv>
          <Link
            className="mt-6 inline-flex cursor-pointer flex-row items-center justify-center gap-1 rounded-md border-b-[1.5px] border-red-700 bg-linear-to-b from-red-400 to-red-500 px-5 py-3 leading-4 font-medium tracking-wide whitespace-nowrap text-white shadow-[0_0_0_2px_rgba(0,0,0,0.04),0_0_14px_0_rgba(255,255,255,0.19)] transition-all duration-200 ease-in-out hover:shadow-red-300"
            href="/all/overview"
          >
            Unleash Now
          </Link>
        </FadeDiv>
      </FadeContainer>
    </section>
  );
}
