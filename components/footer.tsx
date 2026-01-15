export default function Footer() {
  return (
    <footer className="bg-[#1a1f36] text-white py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs sm:text-sm text-white/60">
            Copyright © {new Date().getFullYear()} GlobeTech Exports - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}