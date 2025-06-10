import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-teal-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and CTA */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              How<br />
              It Works ?
            </h2>
            
            <Link href="/quote">
              <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Right side - Overlapping image cards */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Card 1 - Free Consultation (Top Right) */}
            <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden z-30">
              <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-200 rounded w-20"></div>
                  <div className="mt-2 h-2 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-brand-orange">Free</span> Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  We help you plan the right metal storage shed, garage, or pole barn based on your space and needs.
                </p>
              </div>
            </div>

            {/* Card 2 - Custom Build (Middle Left) */}
            <div className="absolute top-16 left-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden z-20">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="relative">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="w-12 h-8 bg-yellow-400 rounded"></div>
                    <div className="w-12 h-8 bg-red-400 rounded"></div>
                    <div className="w-12 h-8 bg-green-400 rounded"></div>
                    <div className="w-12 h-8 bg-blue-400 rounded"></div>
                    <div className="w-12 h-8 bg-purple-400 rounded"></div>
                    <div className="w-12 h-8 bg-pink-400 rounded"></div>
                  </div>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Build</h3>
                <p className="text-sm text-gray-600">
                  We help you plan the right metal storage shed, garage, or pole barn based on your space and needs.
                </p>
              </div>
            </div>

            {/* Card 3 - Delivery & Installation (Bottom Right) */}
            <div className="absolute bottom-0 right-8 w-72 bg-white rounded-2xl shadow-lg overflow-hidden z-10">
              <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-12 bg-gray-600 rounded-lg"></div>
                  <div className="absolute top-2 left-2 w-16 h-3 bg-orange-500 rounded"></div>
                  <div className="absolute top-6 left-2 w-16 h-3 bg-yellow-400 rounded"></div>
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-orange-500 rounded-full"></div>
                  <div className="absolute -top-3 right-6 w-5 h-5 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-2 left-8 w-4 h-8 bg-blue-400 rounded"></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery & Installation</h3>
                <p className="text-sm text-gray-600">
                  Our team handles delivery and professional steel building installation with precise leveling and anchoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}