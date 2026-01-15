export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-28">
          <div className="flex justify-center">
            <img
              src="/ourMission.webp"
              alt="Industrial brake component"
              className="w-full max-w-md object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              At GlobeTech Exports, our mission is to deliver high-quality manufacturing solutions that meet the
              evolving needs of our clients. We are committed to innovation, efficiency, and sustainability in every
              project we undertake.
            </p>
          </div>
        </div>

        {/* Our History Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our History</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Founded in 1995 as Buying agents for a US based trading firm, Globe Tech Exports soon branched into
                3-5million in annual cast ings and forgings exports through 2001.
              </p>
              <p>
                Globe Tech Exports in the meantime became part of a group of five companies with manufacturing
                facilities in various fields like:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Pressings and small assemblies</li>
                <li>Forgings and machined parts</li>
                <li>Builders' hardware</li>
                <li>Investment castings</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/ourHistory.webp"
              alt="Welding manufacturing process"
              className="w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
