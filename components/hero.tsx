"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/heroImage.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main content - left aligned */}
      <div className="text-center relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 pt-20">
        <p className="text-white/80 text-sm sm:text-base md:text-lg font-light mb-4 tracking-wide">
          Manufacturing high-quality
          <br />
          industrial components
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight uppercase">
          GLOBE TECH
          <br />
          EXPORTS
        </h1>
      </div>

      {/* View Products button and Email - centered */}
      <div className="relative z-10 flex flex-col items-center gap-6 pb-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-3 bg-white text-gray-900 font-medium px-8 py-3.5 text-sm md:text-base rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
        >
          View Products
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
        <a
          href="mailto:charanjit@gtexports.com"
          className="text-white/80 text-sm md:text-base hover:text-white transition-colors underline underline-offset-4"
        >
          charanjit@gtexports.com
        </a>
      </div>
    </section>
  )
}
