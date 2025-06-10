import { Button } from "@/components/ui/button";
import servicesImage1 from "../../../ServicesPageAll/servicesimage1.png";
import servicesImage2 from "../../../ServicesPageAll/servicesimage2.png";
import servicesImage3 from "../../../ServicesPageAll/servicesimage3.png";
import servicesImage4 from "../../../ServicesPageAll/servicesimage4.png";
export default function ServicesSection() {
  const services = [
    {
      title: "Metal Sheds",
      description: "Durable and weather-resistant storage solutions for all your outdoor needs.",
      image: servicesImage1
    },
    {
      title: "Steel Garages", 
      description: "Spacious and secure garages built to protect your vehicles and equipment.",
      image: servicesImage2
    },
    {
      title: "Outdoor Storage",
      description: "Custom outdoor storage buildings designed for your specific requirements.",
      image: servicesImage3
    },
    {
      title: "Workshop Buildings",
      description: "Professional workshop spaces with optimal lighting and ventilation systems.",
      image: servicesImage4
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