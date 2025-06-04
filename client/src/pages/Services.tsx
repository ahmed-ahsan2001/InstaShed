import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Metal Storage Sheds",
      description: "Durable and weather-resistant storage solutions perfect for residential and light commercial use.",
      features: [
        "Galvanized steel construction",
        "Weather-resistant coating",
        "Various sizes available",
        "Customizable door options",
        "Foundation preparation included",
        "10-year structural warranty"
      ],
      sizes: "8x10 to 20x30 feet",
      price: "Starting at $2,499",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='120' width='200' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='100,120 200,80 300,120' fill='%238A8A8A'/%3E%3Crect x='180' y='160' width='40' height='60' fill='%23FF6B35'/%3E%3Cpath d='M50 250 Q200 200 350 250 L350 300 L50 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Steel Garages",
      description: "Spacious and secure garages designed to protect your vehicles and valuable equipment from the elements.",
      features: [
        "Heavy-duty steel frame",
        "Insulation options available",
        "Overhead door systems",
        "Electrical preparation",
        "Concrete floor finishing",
        "15-year frame warranty"
      ],
      sizes: "12x20 to 30x50 feet",
      price: "Starting at $8,999",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='50' y='100' width='300' height='140' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,100 200,50 350,100' fill='%238A8A8A'/%3E%3Crect x='120' y='150' width='80' height='80' fill='%23333'/%3E%3Crect x='200' y='150' width='80' height='80' fill='%23333'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Workshop Buildings",
      description: "Professional workshop spaces with optimal lighting, ventilation, and electrical systems for serious craftsmen.",
      features: [
        "Clear-span design",
        "LED lighting packages",
        "Ventilation systems",
        "220V electrical setup",
        "Workbench installation",
        "20-year roof warranty"
      ],
      sizes: "16x24 to 40x60 feet",
      price: "Starting at $12,999",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='70' y='90' width='260' height='150' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='70,90 200,40 330,90' fill='%238A8A8A'/%3E%3Crect x='140' y='130' width='50' height='80' fill='%23333'/%3E%3Crect x='210' y='130' width='50' height='80' fill='%23333'/%3E%3Crect x='280' y='140' width='30' height='60' fill='%23FF6B35'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Agricultural Buildings",
      description: "Large-scale storage solutions designed for farming operations, equipment storage, and livestock protection.",
      features: [
        "High clearance design",
        "Large door openings",
        "Corrosion-resistant materials",
        "Ventilation options",
        "Equipment-friendly flooring",
        "25-year material warranty"
      ],
      sizes: "30x40 to 80x120 feet",
      price: "Starting at $18,999",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='100' width='240' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M80 100 Q200 60 320 100' fill='%23888' stroke='%23464646' stroke-width='2'/%3E%3Crect x='140' y='140' width='40' height='70' fill='%23333'/%3E%3Crect x='220' y='140' width='40' height='70' fill='%23333'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Commercial Buildings",
      description: "Custom commercial structures for businesses requiring reliable, cost-effective building solutions.",
      features: [
        "Engineered to code",
        "Multiple bay configurations",
        "Office space integration",
        "Loading dock compatibility",
        "Fire-rated options",
        "30-year structural warranty"
      ],
      sizes: "40x60 to 100x200 feet",
      price: "Starting at $35,999",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='40' y='80' width='320' height='160' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='40,80 200,30 360,80' fill='%238A8A8A'/%3E%3Crect x='100' y='120' width='60' height='100' fill='%23333'/%3E%3Crect x='170' y='120' width='60' height='100' fill='%23333'/%3E%3Crect x='240' y='120' width='60' height='100' fill='%23333'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Custom Solutions",
      description: "Fully customized metal buildings designed to meet your unique specifications and requirements.",
      features: [
        "Architectural design services",
        "Engineering calculations",
        "Custom color options",
        "Specialized door systems",
        "Climate control options",
        "Comprehensive warranty"
      ],
      sizes: "Custom dimensions",
      price: "Quote based on specifications",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='60' y='120' width='120' height='100' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='220' y='100' width='120' height='120' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='60,120 120,80 180,120' fill='%238A8A8A'/%3E%3Cpolygon points='220,100 280,60 340,100' fill='%237A7A7A'/%3E%3Crect x='110' y='160' width='25' height='50' fill='%23FF6B35'/%3E%3Crect x='270' y='140' width='25' height='70' fill='%23666'/%3E%3Cpath d='M0 250 Q200 200 400 250 L400 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    }
  ];

  const additionalServices = [
    "Site preparation and foundation work",
    "Permit acquisition and processing",
    "Electrical installation and wiring",
    "Insulation and climate control",
    "Custom door and window installation",
    "Concrete flooring and finishing",
    "Maintenance and repair services",
    "Financing options available"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From residential storage sheds to large commercial facilities, we provide comprehensive metal building solutions tailored to your specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Features Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-brand-orange mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Size Range:</h4>
                        <p className="text-gray-600">{service.sizes}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Price:</h4>
                        <p className="text-brand-orange font-semibold text-lg">{service.price}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-200">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support throughout your project, from initial planning to final completion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Contact us today for a free consultation and detailed quote for your metal building project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-orange hover:bg-gray-100 font-semibold px-8 py-3">
              Get Free Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-orange font-semibold px-8 py-3">
              Call (512) 555-0123
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}