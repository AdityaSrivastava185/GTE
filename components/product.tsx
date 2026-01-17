"use client"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"
import React from "react"

const products = [
  { src: "/product01.webp", alt: "Product 1" },
  { src: "/product02.webp", alt: "Product 2" },
  { src: "/product03.webp", alt: "Product 3" },
  { src: "/product04.webp", alt: "Product 4" },
  { src: "/product05.webp", alt: "Product 5" },
]

export default function Products() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 md:mb-16 leading-tight max-w-3xl mx-auto">
          A Look at our Product Line: Castings, Forgings, Sheet Metal, Fabrications, Builders Hardware and more
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-md">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {products.map((product, index) => (
                  <CarouselItem key={index}>
                    <div className="border border-gray-200 bg-white p-2">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.src}
                          alt={product.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
            <div className="flex items-center justify-center gap-2 py-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index + 1 === current ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-gray-900 text-white font-medium px-8 py-3.5 text-sm md:text-base rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
