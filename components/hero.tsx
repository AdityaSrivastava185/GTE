"use client"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between pt-20 pb-8 md:pt-24 md:pb-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/heroImage.webp")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex-1 flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-24">
        <p className="text-white/90 text-base sm:text-lg md:text-xl font-light mb-4 max-w-md leading-relaxed">
          Manufacturing high-quality
          <br />
          industrial components
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Globe Tech
          <br />
          Exports
        </h1>
      </div>

      <div className="relative z-10 text-white/90 text-sm sm:text-base md:text-lg font-light tracking-wide">
        charanjit@gtexports.com
      </div>
    </section>
  )
}
