import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage4 from "../../../Servicespagesingle4/service4image1.png";

export default function CommercialBuildings() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Commercial Steel Buildings
          </h1>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <img
              src={heroImage4}
              alt="Commercial Steel Building"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-200">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Designed for growth, our{" "}
                <span className="text-brand-orange font-medium">
                  commercial steel buildings
                </span>{" "}
                are ideal for workshops, warehouses, and contractor depots. With
                custom dimensions, wide bay doors, and expansion options, your
                structure scales with your business.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Perfect For:
                  </h3>
                  <p className="text-gray-600">
                    Small warehouse, shop space, business storage
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Example use:
                  </h3>
                  <p className="text-gray-600">
                    In Loveland, a contractor expanded their operation with a
                    30x60 prefab steel building for equipment and load.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img
                src={heroImage4}
                alt="Commercial Building Interior"
                className="w-full h-80 object-cover rounded-lg"
              />
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
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-brand-orange">Business Hours</span>
              </h2>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9 AM - 6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9 AM - 12 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  <span className="text-brand-orange">InstaShed HQ</span>
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center">
                      <span className="text-xs text-white">@</span>
                    </div>
                    <span>info@instashed.us</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center mt-1">
                      <span className="text-xs text-white">📍</span>
                    </div>
                    <span>
                      107 West Main Street #681 Torre Hill, PA 17581 USA
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Fill out the form and we'll call you back
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name (Required)"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Email (Required)"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Zip Code / Area (Required)"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                    <option value="" className="text-gray-900">
                      Type of Service You're Interested In
                    </option>
                    <option value="commercial" className="text-gray-900">
                      Commercial Steel Building
                    </option>
                    <option value="residential" className="text-gray-900">
                      Residential Metal Shed
                    </option>
                    <option value="agricultural" className="text-gray-900">
                      Agricultural Barn
                    </option>
                    <option value="garage" className="text-gray-900">
                      Steel Garage
                    </option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                />
                <div className="text-right">
                  <span className="text-sm text-gray-400">0/500</span>
                </div>
                <Button className="w-full bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-200 py-3">
                  Schedule My Call
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
