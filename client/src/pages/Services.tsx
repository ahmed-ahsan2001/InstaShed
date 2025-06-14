import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import icon7 from "../../../Icon 6.svg"; // Down arrow (collapsed)
import icon6 from "../../../reqicon2.svg"; // Up arrow (expanded)
import heroImage from "../../../ServicesPageAll/servicesimage3.png";
import servicesicon from "../../../servicesallicon1.svg";
import servicesicon1 from "../../../servicesallicon2.svg";
import heroImage1 from "../../../ServicesPageAll/servicesimage2.png";
import heroImage2 from "../../../ServicesPageAll/servicesimage1.png";
import heroImage3 from "../../../ServicesPageAll/servicesimage4.png";
export default function Services() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const services = [
    {
      title: "Residential Metal Sheds",
      content: {
        description:
          "Premium metal sheds ideal for homeowners. High-quality steel construction with customizable features for your backyard storage needs.",
        perfectFor: [
          "Backyard storage",
          "Garden tool storage",
          "Seasonal equipment",
          "Hobby workspace",
        ],
        exampleUse: [
          "Store lawn equipment",
          "Workshop for projects",
          "Seasonal decoration storage",
          "Bicycle and sports gear",
        ],
        image: heroImage2,
      },
    },
    {
      title: "Agricultural Pole Barns",
      content: {
        description:
          "Premium metal structures ideal for equipment and livestock. All models include multiple access options, durable metal structure, interior shelving, security and ATV, and air-vent for weather resistance.",
        perfectFor: [
          "Equipment storage",
          "Livestock shelter",
          "Farm operations",
          "Large machinery storage",
        ],
        exampleUse: [
          "Store farming equipment",
          "Protect livestock from weather",
          "Workshop space for repairs",
          "Hay and feed storage",
        ],
        image: heroImage1,
      },
    },
    {
      title: "Prefab Steel Garages",
      content: {
        description:
          "Premium prefab garages designed for superior security and commercial applications. High quality steel construction, enhanced security features, professional grade hardware, and commercial grade finishes.",
        perfectFor: [
          "Vehicle protection",
          "Workshop space",
          "Commercial storage",
          "Equipment protection",
        ],
        exampleUse: [
          "Protect vehicles from weather",
          "Create professional workshop",
          "Secure tool storage",
          "Commercial vehicle storage",
        ],
        image: heroImage,
      },
    },
    {
      title: "Commercial Steel Buildings",
      content: {
        description:
          "Designed for growing businesses. Commercial steel buildings that are ideal for warehouses, workshops, and commercial storage. Wide open design, multiple bay configurations, office space integration, and loading dock compatibility.",
        perfectFor: [
          "Warehouse operations",
          "Manufacturing facilities",
          "Commercial workshops",
          "Distribution centers",
        ],
        exampleUse: [
          "Store inventory and supplies",
          "Manufacturing operations",
          "Vehicle service centers",
          "Distribution and logistics",
        ],
        image: heroImage3,
      },
    },
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
              background:
                "linear-gradient(90deg, rgba(0, 55, 58, 1) 0%, rgba(0, 55, 58, 0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
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
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
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
                    <img
                      src={expandedSections.includes(index) ? icon7 : icon6}
                      alt={expandedSections.includes(index) ? "Collapse" : "Expand"}
                      className="w-5 h-5 flex-shrink-0"
                    />
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
                        </div>

                        {/* Right Column */}
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Residential Metal Sheds
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our{" "}
                    <span className="text-brand-orange">
                      metal sheds for backyard storage
                    </span>{" "}
                    are built to protect your tools, supplies, and hobbies.
                    Custom design options include windows, double doors,
                    shelving, and lofts — all made from weather-resistant steel.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Perfect for:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Backyard tool shed, garden shed, DIY workshop</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Example use:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          A family in{" "}
                          <span className="text-brand-orange">Dedham MA</span>{" "}
                          built a custom shed for woodworking with double doors
                          and a windowed loft.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={heroImage2}
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
                    src={heroImage1}
                    alt="Agricultural Pole Barn"
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Agricultural Pole Barns
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Protect your vehicles and equipment with a custom-built{" "}
                    <span className="text-brand-orange">
                      prefab steel garage
                    </span>
                    . Available in single, double, or triple-car formats, our
                    garages feature reinforced walls, high-load roof panels, and
                    optional ventilation or insulation.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Perfect for:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          Car garage, ATV/motorcycle storage, hobby garage
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Example use:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          In Great Barrington, MA, a two-car prefab garage now
                          houses vintage motorcycles and gear.
                        </li>
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Prefab Steel Garages
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Premium prefab garages designed for superior security and
                    commercial applications. High quality steel construction,
                    enhanced security features, professional grade hardware, and
                    commercial grade finishes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Perfect for:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Vehicle protection, workshop space</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Example use:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          Professional workshop for automotive repairs and
                          secure tool storage.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={heroImage}
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
                    src={heroImage3}
                    alt="Commercial Steel Building"
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Commercial Steel Buildings
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Designed for growing businesses. Commercial steel buildings
                    that are ideal for warehouses, workshops, and commercial
                    storage. Wide open design, multiple bay configurations,
                    office space integration, and loading dock compatibility.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Perfect for:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Warehouse operations, manufacturing facilities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Example use:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          Large-scale commercial storage and distribution
                          operations.
                        </li>
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
                  Get expert advice and quality metal buildings delivered on
                  time, every time.
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
