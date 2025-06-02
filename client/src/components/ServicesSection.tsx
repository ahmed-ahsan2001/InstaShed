import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      title: "Metal Sheds",
      description: "Durable and weather-resistant storage solutions for all your outdoor needs.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='120' width='200' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='100,120 200,80 300,120' fill='%238A8A8A'/%3E%3Crect x='150' y='160' width='40' height='60' fill='%23FF6B35'/%3E%3Crect x='210' y='160' width='40' height='60' fill='%23666'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Steel Garages", 
      description: "Spacious and secure garages built to protect your vehicles and equipment.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='50' y='100' width='300' height='140' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,100 200,50 350,100' fill='%238A8A8A'/%3E%3Crect x='120' y='150' width='80' height='80' fill='%23333'/%3E%3Crect x='200' y='150' width='80' height='80' fill='%23333'/%3E%3Cline x1='160' y1='150' x2='160' y2='230' stroke='%23666' stroke-width='2'/%3E%3Cline x1='240' y1='150' x2='240' y2='230' stroke='%23666' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Outdoor Storage",
      description: "Custom outdoor storage buildings designed for your specific requirements.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='110' width='120' height='100' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='220' y='130' width='100' height='80' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='80,110 140,80 200,110' fill='%238A8A8A'/%3E%3Cpolygon points='220,130 270,110 320,130' fill='%237A7A7A'/%3E%3Crect x='120' y='150' width='25' height='50' fill='%23FF6B35'/%3E%3Crect x='250' y='160' width='20' height='40' fill='%23666'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Workshop Buildings",
      description: "Professional workshop spaces with optimal lighting and ventilation systems.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='70' y='90' width='260' height='150' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='70,90 200,40 330,90' fill='%238A8A8A'/%3E%3Crect x='140' y='130' width='50' height='80' fill='%23333'/%3E%3Crect x='210' y='130' width='50' height='80' fill='%23333'/%3E%3Crect x='280' y='140' width='30' height='60' fill='%23FF6B35'/%3E%3Cline x1='100' y1='110' x2='300' y2='110' stroke='%23666' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple storage solutions to complex industrial buildings, we have the expertise to deliver exactly what you need.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-hover transition-colors duration-200">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}