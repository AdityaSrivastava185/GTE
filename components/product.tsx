"use client"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import React from "react"

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
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16 leading-tight max-w-4xl mx-auto">
          A Look at our Product Line: Castings, Forgings, Sheet Metal, Fabrications, Builders Hardware and more
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl sm:text-4xl font-semibold text-gray-800">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-gray-500 py-4 text-center text-sm">
              Slide {current} of {count}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
