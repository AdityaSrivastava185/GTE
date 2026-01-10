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
    <section id="clients" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16">
          Client List
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Customers</h3>
            <p className="text-gray-600">Our customers in the past and present include</p>
          </div>

          <div className="space-y-0">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-200 gap-1 sm:gap-4"
              >
                <h4 className="text-base sm:text-lg font-medium text-gray-900">{client.name}</h4>
                <p className="text-sm sm:text-base text-gray-500">{client.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
