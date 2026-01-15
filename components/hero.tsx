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

      {/* View Products button - centered */}
      <div className="relative z-10 flex justify-center pb-12">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 border border-white/40 text-white/90 px-5 py-2.5 text-sm hover:bg-white/10 transition-colors"
        >
          View Products
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
