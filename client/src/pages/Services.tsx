import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
// Down arrow (collapsed)
// Up arrow (expanded)
import heroImage from "../../../ServicesPageAll/servicesimage3.png";
import icon6 from "../../../servicesallicon1.svg";
import icon7 from "../../../servicesallicon2.svg";
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
        image: heroImage2,
      },
    },
    {
      title: "Agricultural Pole Barns",
      content: {
        image: heroImage1,
      },
    },
    {
      title: "Prefab Steel Garages",
      content: {
        image: heroImage,
      },
    },
    {
      title: "Commercial Steel Buildings",
      content: {
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
                    <h3
                      className={`text-lg ${
                        expandedSections.includes(index)
                          ? "text-orange-500 font-normal"
                          : "text-gray-900 font-semibold"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img
                      src={expandedSections.includes(index) ? icon7 : icon6}
                      alt={
                        expandedSections.includes(index) ? "Collapse" : "Expand"
                      }
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
                          <h4 className="text-xl font-bold text-gray-900 mb-4"></h4>
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
                    <span className="text-orange-500">
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
                          <span className="text-orange-500">Hillsdale MA</span>{" "}
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
                    Our{" "}
                    <span className="text-orange-500">steel pole barns</span>{" "}
                    are engineered for rugged farm life. Built using
                    rust-resistant galvanized panels, they protect tractors,
                    hay, feed, and livestock year-round with wide, open
                    interiors and minimal maintenance.
                  </p>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Perfect for:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          Equipment storage, livestock shelter, farm operations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Example use:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>
                          A farm in Texas uses our pole barn to store hay, 
                          protect livestock, and house farming equipment.
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
                    Protect your vehicles and equipment with a custom-built{" "}
                    <span className="text-orange-500">prefab steel garage</span>
                    . Available in single, double, or triple-car formats, our
                    garages feature reinforced walls, high-load roof panels, and
                    optional ventilation or insulation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Perfect for:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>Vehicle protection, workshop space, commercial storage</li>
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
                    Designed for growth, our{" "}
                    <span className="text-orange-500">
                      Commercial steel buildings
                    </span>
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
                          In <span className="text-orange-500">New York</span>,
                          a contractor expanded their operation with a 30x60
                          prefab steel building for equipment and load.
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

      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
