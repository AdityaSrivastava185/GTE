"use client"

import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "Clients", href: "#clients", active: false },
  { name: "Products", href: "/products", active: false },
  { name: "About", href: "#about", active: false },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm md:text-base text-white/90 hover:text-white transition-colors ${
                link.active ? "border-b-2 border-white pb-1" : ""
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
