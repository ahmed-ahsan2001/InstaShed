import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";

export default function Services() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const services = [
    {
      title: "Residential Metal Sheds",
      content: {
        description: "Premium metal sheds ideal for homeowners. High-quality steel construction with customizable features for your backyard storage needs.",
        perfectFor: [
          "Backyard storage",
          "Garden tool storage",
          "Seasonal equipment",
          "Hobby workspace"
        ],
        exampleUse: [
          "Store lawn equipment",
          "Workshop for projects",
          "Seasonal decoration storage",
          "Bicycle and sports gear"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='150' y='120' width='300' height='100' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='150,120 300,80 450,120' fill='%238A8A8A'/%3E%3Crect x='200' y='150' width='40' height='60' fill='%23333'/%3E%3Crect x='260' y='150' width='40' height='60' fill='%23333'/%3E%3Crect x='320' y='150' width='40' height='60' fill='%23333'/%3E%3Cpath d='M0 250 Q300 200 600 250 L600 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
      }
    },
    {
      title: "Agricultural Pole Barns",
      content: {
        description: "Premium metal structures ideal for equipment and livestock. All models include multiple access options, durable metal structure, interior shelving, security and ATV, and air-vent for weather resistance.",
        perfectFor: [
          "Equipment storage",
          "Livestock shelter",
          "Farm operations",
          "Large machinery storage"
        ],
        exampleUse: [
          "Store farming equipment",
          "Protect livestock from weather",
          "Workshop space for repairs",
          "Hay and feed storage"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='100' width='440' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M80 100 Q300 60 520 100' fill='%23888' stroke='%23464646' stroke-width='2'/%3E%3Crect x='140' y='140' width='60' height='70' fill='%23333'/%3E%3Crect x='220' y='140' width='60' height='70' fill='%23333'/%3E%3Crect x='320' y='140' width='60' height='70' fill='%23333'/%3E%3Crect x='400' y='140' width='60' height='70' fill='%23333'/%3E%3Cpath d='M0 250 Q300 200 600 250 L600 300 L0 300 Z' fill='%2398B8A3'/%3E%3Cellipse cx='150' cy='280' rx='40' ry='15' fill='%23567A5C'/%3E%3Cellipse cx='300' cy='285' rx='50' ry='12' fill='%23567A5C'/%3E%3Cellipse cx='450' cy='280' rx='45' ry='18' fill='%23567A5C'/%3E%3C/g%3E%3C/svg%3E"
      }
    },
    {
      title: "Prefab Steel Garages",
      content: {
        description: "Premium prefab garages designed for superior security and commercial applications. High quality steel construction, enhanced security features, professional grade hardware, and commercial grade finishes.",
        perfectFor: [
          "Vehicle protection",
          "Workshop space",
          "Commercial storage",
          "Equipment protection"
        ],
        exampleUse: [
          "Protect vehicles from weather",
          "Create professional workshop",
          "Secure tool storage",
          "Commercial vehicle storage"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='80' width='400' height='160' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='100,80 300,30 500,80' fill='%238A8A8A'/%3E%3Crect x='150' y='120' width='100' height='100' fill='%23333'/%3E%3Crect x='260' y='120' width='100' height='100' fill='%23333'/%3E%3Crect x='370' y='120' width='100' height='100' fill='%23333'/%3E%3Cline x1='200' y1='120' x2='200' y2='220' stroke='%23666' stroke-width='2'/%3E%3Cline x1='310' y1='120' x2='310' y2='220' stroke='%23666' stroke-width='2'/%3E%3Cline x1='420' y1='120' x2='420' y2='220' stroke='%23666' stroke-width='2'/%3E%3Cpath d='M0 250 Q300 200 600 250 L600 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
      }
    },
    {
      title: "Commercial Steel Buildings",
      content: {
        description: "Designed for growing businesses. Commercial steel buildings that are ideal for warehouses, workshops, and commercial storage. Wide open design, multiple bay configurations, office space integration, and loading dock compatibility.",
        perfectFor: [
          "Warehouse operations",
          "Manufacturing facilities",
          "Commercial workshops",
          "Distribution centers"
        ],
        exampleUse: [
          "Store inventory and supplies",
          "Manufacturing operations",
          "Vehicle service centers",
          "Distribution and logistics"
        ],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='50' y='70' width='500' height='170' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,70 300,20 550,70' fill='%238A8A8A'/%3E%3Crect x='100' y='110' width='80' height='110' fill='%23333'/%3E%3Crect x='190' y='110' width='80' height='110' fill='%23333'/%3E%3Crect x='280' y='110' width='80' height='110' fill='%23333'/%3E%3Crect x='370' y='110' width='80' height='110' fill='%23333'/%3E%3Crect x='460' y='110' width='80' height='110' fill='%23333'/%3E%3Cpath d='M0 250 Q300 200 600 250 L600 300 L0 300 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-center mb-8"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 55, 58, 1) 0%, rgba(0, 55, 58, 0.4) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            SERVICES
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Service Header */}
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {expandedSections.includes(index) ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedSections.includes(index) && service.content && (
                  <div className="px-6 pb-8 border-t border-gray-100">
                    <div className="pt-6">
                      {/* Featured Image */}
                      <div className="mb-8">
                        <img 
                          src={service.content.image} 
                          alt={service.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-4">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.content.description}
                          </p>
                          
                          <div className="mb-6">
                            <h5 className="font-semibold text-gray-900 mb-3">Perfect For:</h5>
                            <ul className="space-y-2">
                              {service.content.perfectFor.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div>
                          <div className="mb-6">
                            <h5 className="font-semibold text-gray-900 mb-3">Example Use:</h5>
                            <ul className="space-y-2">
                              {service.content.exampleUse.map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200">
                              Get Quote
                            </Button>
                            <Button variant="outline" className="w-full text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-200">
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Service 1 - Residential Metal Sheds */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">01</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Metal Sheds</h3>
                  <p className="text-gray-600 mb-6">
                    Our <span className="text-brand-orange">metal sheds for backyard storage</span> are built to protect your tools, supplies, and hobbies. Custom design options include windows, double doors, shelving, and lofts — all made from weather-resistant steel.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Backyard tool shed, garden shed, DIY workshop</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Example use:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>A family in <span className="text-brand-orange">Dedham MA</span> built a custom shed for woodworking with double doors and a windowed loft.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='80' width='240' height='120' fill='%23E0E0E0' stroke='%23666' stroke-width='2'/%3E%3Cpolygon points='80,80 200,40 320,80' fill='%23B0B0B0'/%3E%3Crect x='130' y='120' width='40' height='70' fill='%23FF6B35'/%3E%3Crect x='230' y='120' width='40' height='70' fill='%23444'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E" 
                    alt="Residential Metal Shed" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Service 2 - Agricultural Pole Barns */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">02</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='50' y='60' width='300' height='140' fill='%23D8BCC8' stroke='%23666' stroke-width='2'/%3E%3Cpolygon points='50,60 200,20 350,60' fill='%23A8A8A8'/%3E%3Crect x='100' y='100' width='50' height='90' fill='%23654321'/%3E%3Crect x='150' y='100' width='50' height='90' fill='%23654321'/%3E%3Crect x='200' y='100' width='50' height='90' fill='%23654321'/%3E%3Crect x='250' y='100' width='50' height='90' fill='%23654321'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E" 
                    alt="Agricultural Pole Barn" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Agricultural Pole Barns</h3>
                  <p className="text-gray-600 mb-6">
                    Protect your vehicles and equipment with a custom-built <span className="text-brand-orange">prefab steel garage</span>. Available in single, double, or triple-car formats, our garages feature reinforced walls, high-load roof panels, and optional ventilation or insulation.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Car garage, ATV/motorcycle storage, hobby garage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Example use:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>In Great Barrington, MA, a two-car prefab garage now houses vintage motorcycles and gear.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - Prefab Steel Garages */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">03</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefab Steel Garages</h3>
                  <p className="text-gray-600 mb-6">
                    Premium prefab garages designed for superior security and commercial applications. High quality steel construction, enhanced security features, professional grade hardware, and commercial grade finishes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Vehicle protection, workshop space</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Example use:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Professional workshop for automotive repairs and secure tool storage.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='60' y='70' width='280' height='110' fill='%23C8C8C8' stroke='%23666' stroke-width='2'/%3E%3Cpolygon points='60,70 200,30 340,70' fill='%23A0A0A0'/%3E%3Crect x='110' y='110' width='60' height='60' fill='%23444'/%3E%3Crect x='170' y='110' width='60' height='60' fill='%23444'/%3E%3Crect x='230' y='110' width='60' height='60' fill='%23444'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E" 
                    alt="Prefab Steel Garage" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Service 4 - Commercial Steel Buildings */}
            <div className="flex items-start space-x-8">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">04</span>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='40' y='50' width='320' height='130' fill='%23B8BCC8' stroke='%23666' stroke-width='2'/%3E%3Cpolygon points='40,50 200,10 360,50' fill='%23888888'/%3E%3Crect x='80' y='90' width='50' height='80' fill='%23333'/%3E%3Crect x='140' y='90' width='50' height='80' fill='%23333'/%3E%3Crect x='200' y='90' width='50' height='80' fill='%23333'/%3E%3Crect x='260' y='90' width='50' height='80' fill='%23333'/%3E%3Crect x='320' y='90' width='30' height='80' fill='%23FF6B35'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E" 
                    alt="Commercial Steel Building" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Steel Buildings</h3>
                  <p className="text-gray-600 mb-6">
                    Designed for growing businesses. Commercial steel buildings that are ideal for warehouses, workshops, and commercial storage. Wide open design, multiple bay configurations, office space integration, and loading dock compatibility.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Perfect for:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Warehouse operations, manufacturing facilities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Example use:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Large-scale commercial storage and distribution operations.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">InstaShed.org</h3>
                <p className="text-gray-300">
                  Get expert advice and quality metal buildings delivered on time, every time.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fill out the form and we'll get you back.
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                ></textarea>
                <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200 py-3">
                  Submit Form
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}