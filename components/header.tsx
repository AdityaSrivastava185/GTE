"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Clients", href: "#clients", active: false },
  { name: "Products", href: "/products", active: false },
  { name: "About", href: "#about", active: false },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm md:text-base transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-gray-900"
                  : "text-white/90 hover:text-white"
              } ${
                link.active
                  ? scrolled
                    ? "border-b-2 border-gray-900 pb-1"
                    : "border-b-2 border-white pb-1"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
