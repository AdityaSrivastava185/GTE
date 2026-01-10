export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16 leading-tight">
          About GlobeTech Exports: Innovating Manufacturing
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
          <div className="flex justify-center">
            <img
              src="/ourMission.webp"
              alt="Industrial brake component"
              className="rounded-lg object-cover w-full max-w-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At GlobeTech Exports, our mission is to deliver high-quality manufacturing solutions that meet the
              evolving needs of our clients. We are committed to innovation, efficiency, and sustainability in every
              project we undertake.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our History</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Globe Tech Exports began its operations in 1995 as the Buying Agents for a large US based trading
                company buying castings and forgings from China and India.
              </p>
              <p>
                Globe Tech Exports successfully arranged and managed export of between US $ 3 to 5 Million every year
                till 2001.
              </p>
              <p>
                Globe Tech Exports in the meantime became part of a group of five companies with manufacturing
                facilities in various fields like:
              </p>
              <ul className="list-disc list-inside space-y-2 text-left">
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
              className="rounded-lg object-cover w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
