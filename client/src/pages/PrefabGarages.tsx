import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='200' width='600' height='180' fill='%23464646' stroke='%23333' stroke-width='3'/%3E%3Cpolygon points='100,200 400,150 700,200' fill='%23333'/%3E%3Crect x='200' y='250' width='80' height='100' fill='%23333'/%3E%3Crect x='300' y='250' width='80' height='100' fill='%23333'/%3E%3Crect x='420' y='250' width='80' height='100' fill='%23333'/%3E%3Crect x='520' y='250' width='80' height='100' fill='%23333'/%3E%3Cline x1='240' y1='250' x2='240' y2='350' stroke='%23666' stroke-width='2'/%3E%3Cline x1='340' y1='250' x2='340' y2='350' stroke='%23666' stroke-width='2'/%3E%3Cline x1='460' y1='250' x2='460' y2='350' stroke='%23666' stroke-width='2'/%3E%3Cline x1='560' y1='250' x2='560' y2='350' stroke='%23666' stroke-width='2'/%3E%3Cpath d='M50 380 Q400 350 750 380 L750 450 L50 450 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q400 30 800 50 L800 150 Q400 120 0 150 Z' fill='%23567A5C'/%3E%3Cellipse cx='200' cy='100' rx='60' ry='30' fill='%2398B8A3'/%3E%3Cellipse cx='600' cy='85' rx='80' ry='35' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
              alt="Prefab Steel Garage"
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
                Our <span className="text-brand-orange font-medium">steel pole barns</span> are engineered for rugged farm life. Built using rust-resistant galvanized panels, they protect tractors, hay, feed, and livestock year-round with wide, open interiors and minimal maintenance.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Perfect For:</h3>
                  <p className="text-gray-600">
                    Equipment shed, crop storage, livestock barn
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Example use:</h3>
                  <p className="text-gray-600">
                    A pole barn in Canton CT now serves as a machinery shed and hay storage facility.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div>
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Crect width='500' height='350' fill='%23E8F5E8'/%3E%3Cg%3E%3Crect x='50' y='120' width='400' height='160' fill='%23C8E6C9' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M50 120 Q250 80 450 120' fill='%23A5D6A7'/%3E%3Crect x='80' y='150' width='60' height='110' fill='%23C8E6C9'/%3E%3Crect x='150' y='150' width='60' height='110' fill='%23C8E6C9'/%3E%3Crect x='220' y='150' width='60' height='110' fill='%23C8E6C9'/%3E%3Crect x='290' y='150' width='60' height='110' fill='%23C8E6C9'/%3E%3Crect x='360' y='150' width='60' height='110' fill='%23C8E6C9'/%3E%3Cpath d='M0 290 Q250 270 500 290 L500 350 L0 350 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 30 Q250 10 500 30 L500 80 Q250 60 0 80 Z' fill='%23FFE082' opacity='0.7'/%3E%3Cellipse cx='150' cy='55' rx='40' ry='20' fill='%23FFF59D'/%3E%3Cellipse cx='350' cy='50' rx='50' ry='25' fill='%23FFF59D'/%3E%3C/g%3E%3C/svg%3E"
                alt="Steel Garage Storage"
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
                    <span>107 West Main Street #681 Torre Hill, PA 17581 USA</span>
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
                    <option value="" className="text-gray-900">Type of Service You're Interested In</option>
                    <option value="garage" className="text-gray-900">Prefab Steel Garage</option>
                    <option value="residential" className="text-gray-900">Residential Metal Shed</option>
                    <option value="agricultural" className="text-gray-900">Agricultural Barn</option>
                    <option value="commercial" className="text-gray-900">Commercial Building</option>
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