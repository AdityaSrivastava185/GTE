"use client"

import { useState } from "react"

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
          We export to the USA, UK, Australia and Europe
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto text-center">
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">GlobeTech Exports</h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
              186A, Arjun Nagar, Safdarjung Enclave, New Delhi, Delhi, India
            </p>
            <p className="text-gray-600 mb-3 text-sm sm:text-base">+91-9810005024</p>
            <a
              href="mailto:charanjit@gtexports.com"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              charanjit@gtexports.com
            </a>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Hours</h4>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <span>Today</span>
              <span className="text-gray-500">Closed</span>
              <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
