export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-10">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm sm:text-base">
            Copyright © {new Date().getFullYear()} GlobeTech Exports - All Rights Reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Manufacturing high-quality industrial components since 1995
          </p>
        </div>
      </div>
    </footer>
  )
}