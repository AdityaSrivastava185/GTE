import Link from "next/link"

const products = [
  {
    category: "RAILCAR PRODUCTS",
    name: "Front Lungs",
    image: "/front-lungs.png",
  },
  {
    category: "RAILCAR PRODUCTS",
    name: "Handholds",
    image: "/handholds.png",
  },
  {
    category: "FABRICATED RAILCAR PARTS",
    name: "FABRICATED RAILCAR PARTS",
    image: "/fabricate-railcar.png",
  },
  {
    category: "FABRICATED RAILCAR PARTS",
    name: "FABRICATED RAILCAR PARTS",
    image: "/fabricated-railcar-part-05.png",
  },
  {
    category: "FABRICATED RAILCAR PARTS",
    name: "FABRICATED RAILCAR PARTS",
    image: "/fabricated-railcar-parts.png",
  },
  {
    category: "FABRICATED RAILCAR PARTS",
    name: "FABRICATED RAILCAR PARTS",
    image: "/fabricated-railcar-part-04.png",
  },
  {
    category: "FABRICATED RAILCAR PARTS",
    name: "FABRICATED RAILCAR PARTS",
    image: "/fabricated-railcar-part-02.png",
  },
  {
    category: "FABRICATED TRAILER PARTS",
    name: "FABRICATED TRAILER PARTS",
    image: "/fabricated-trailer-parts.png",
  },
  {
    category: "FORGED TRAILER PARTS",
    name: "FORGED TRAILER PARTS",
    image: "/forged-trailer-parts.png",
  },
  {
    category: "FORGED TRAILER PARTS",
    name: "FORGED TRAILER PARTS",
    image: "/forged-trailer-part.png",
  },
  {
    category: "PROPELLER SHAFT COMPONENTS",
    name: "PROPELLER SHAFT COMPONENTS",
    image: "/propeller-shaft-components.png",
  },
  {
    category: "UNIVERSAL JOINT CROSS",
    name: "UNIVERSAL JOINT CROSS",
    image: "/universal-joint-cross.png",
  },
  {
    category: "STEERING SUSPENSION COMPONENTS",
    name: "STEERING SUSPENSION COMPONENT",
    image: "/steering-suspension-components.png",
  },
  {
    category: "STEERING KNUCKLES & LIFT ARMS",
    name: "STEERING KNUCKLES & LIFT ARMS",
    image: "/steering-knuckles-liftarms.png",
  },
  {
    category: "TRACK CONTROL ARMS",
    name: "TRACK CONTROL ARMS",
    image: "/track-control-arms.png",
  },
  {
    category: "WATER PUMP",
    name: "WATER PUMP",
    image: "/water-pump.png",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
            ← Back
          </Link>
          <span className="text-sm text-gray-500">1/1</span>
        </div>
      </header>

      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Our Products
          <span className="inline-block w-16 h-0.5 bg-gray-900 ml-4 align-middle"></span>
        </h1>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              {/* Single Image */}
              <div className="bg-gray-100 aspect-square mb-3 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category */}
              <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">
                {product.category}
              </p>

              {/* Product Name */}
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 leading-tight">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-500">
            Copyright © {new Date().getFullYear()} GlobeTech Exports - All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
