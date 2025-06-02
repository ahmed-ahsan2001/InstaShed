export default function GallerySection() {
  const galleryItems = [
    {
      title: "Residential Storage Shed",
      category: "Residential",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='120' width='200' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='100,120 200,80 300,120' fill='%238A8A8A'/%3E%3Crect x='180' y='160' width='40' height='60' fill='%23FF6B35'/%3E%3Cpath d='M50 250 Q200 200 350 250 L350 300 L50 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Commercial Garage",
      category: "Commercial", 
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='50' y='100' width='300' height='140' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,100 200,50 350,100' fill='%238A8A8A'/%3E%3Crect x='120' y='150' width='80' height='80' fill='%23333'/%3E%3Crect x='200' y='150' width='80' height='80' fill='%23333'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Workshop Building",
      category: "Industrial",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='70' y='90' width='260' height='150' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='70,90 200,40 330,90' fill='%238A8A8A'/%3E%3Crect x='140' y='130' width='50' height='80' fill='%23333'/%3E%3Crect x='210' y='130' width='50' height='80' fill='%23333'/%3E%3Crect x='280' y='140' width='30' height='60' fill='%23FF6B35'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Storage Complex",
      category: "Commercial",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='110' width='80' height='80' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='170' y='110' width='80' height='80' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Crect x='260' y='110' width='80' height='80' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='80,110 120,90 160,110' fill='%238A8A8A'/%3E%3Cpolygon points='170,110 210,90 250,110' fill='%237A7A7A'/%3E%3Cpolygon points='260,110 300,90 340,110' fill='%238A8A8A'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Custom Steel Building",
      category: "Custom",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='60' y='120' width='120' height='100' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='220' y='100' width='120' height='120' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='60,120 120,80 180,120' fill='%238A8A8A'/%3E%3Cpolygon points='220,100 280,60 340,100' fill='%237A7A7A'/%3E%3Crect x='110' y='160' width='25' height='50' fill='%23FF6B35'/%3E%3Crect x='270' y='140' width='25' height='70' fill='%23666'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Agricultural Storage",
      category: "Agricultural",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='100' width='240' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M80 100 Q200 60 320 100' fill='%23888' stroke='%23464646' stroke-width='2'/%3E%3Crect x='140' y='140' width='40' height='70' fill='%23333'/%3E%3Crect x='220' y='140' width='40' height='70' fill='%23333'/%3E%3Crect x='290' y='150' width='20' height='50' fill='%23FF6B35'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing the quality and variety of our metal building solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-brand-orange font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}