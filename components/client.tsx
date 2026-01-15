const clients = [
  { name: "Cascade Corporation", location: "USA" },
  { name: "Speedway Corporation", location: "USA" },
  { name: "Dana Corporation", location: "UK and Europe" },
  { name: "PSS Ltd", location: "UK" },
  { name: "Martin Rea Corporation", location: "UK and Netherlands" },
  { name: "Unipart Eberspacher Exhaust Systems Ltd", location: "UK" },
  { name: "Jim Lawrence Traditional Ironwork", location: "UK" },
  { name: "Teleflex Morse Ltd", location: "UK" },
]

export default function Clients() {
  return (
    <section id="clients" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          Client List
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Customers</h3>
            <p className="text-gray-500 text-sm">Our customers in the past and present include</p>
          </div>

          <div className="border-t border-gray-200">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex justify-between items-center py-3 border-b border-gray-200"
              >
                <span className="text-sm md:text-base text-gray-900">{client.name}</span>
                <span className="text-sm text-gray-500">{client.location}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
