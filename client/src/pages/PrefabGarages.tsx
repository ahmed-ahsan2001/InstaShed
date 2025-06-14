import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage4 from "../../../Servicespagesingle3/service3image1.png";
import heroImage5 from "../../../Servicespagesingle3/service3image2.png";
export default function PrefabGarages() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Prefab Steel Garages
          </h1>
        </div>
      </section>

      {/* Hero Video Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-12">
            <img
              src={heroImage4}
              alt="Prefab Steel Garage"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all duration-200">
                <Play className="w-8 h-8 text-gray-800 ml-1" />
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-16">
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto text-center">
              Protect your vehicles and equipment with a custom-built{" "}
              <span className="text-orange-500 font-medium">
                prefab steel garage
              </span>
              . Available in single, double, or triple-car formats, our
              garages feature reinforced walls, high-load roof panels, and
              optional ventilation or insulation.
            </p>
          </div>

          {/* Image Section */}
          <div className="mb-16">
            <img
              src={heroImage5}
              alt="Steel Garage Storage"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>

          {/* Perfect For and Example Use Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Perfect For:
              </h3>
              <p className="text-gray-600">
                Vehicle protection, workshop space, commercial storage
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Example use:
              </h3>
              <p className="text-gray-600">
                In Great Barrington, MA, a two-car prefab garage now houses
                vintage motorcycles and gear.
              </p>
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
