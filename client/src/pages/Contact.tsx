import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage5 from "../../../ServicesPagesingle2/service2image2.png";
export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Let's <span className="text-brand-orange">Talk</span> About<br />
                Your Next<br />
                Metal Building
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Looking to build a shed, garage, or barn? Submit your info 
                and our team will give you a call to discuss your project — 
                no pressure, just expert advice.
              </p>
            </div>

            {/* Right Column - Customer Service Image */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-8 max-w-md">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f8fafc'/%3E%3Cg%3E%3Ccircle cx='200' cy='150' r='60' fill='%23D4AF9A'/%3E%3Cpath d='M160 190 Q200 220 240 190 L240 320 Q200 340 160 320 Z' fill='%232563EB'/%3E%3Cpath d='M180 130 Q200 110 220 130 L220 150 Q200 170 180 150 Z' fill='%238B4513'/%3E%3Cpath d='M170 140 Q200 120 230 140 L230 150 Q200 130 170 150 Z' fill='%23654321'/%3E%3Cpath d='M140 210 Q200 230 260 210 L260 250 Q200 270 140 250 Z' fill='%231E40AF'/%3E%3Cpath d='M180 250 L220 250 L210 290 L190 290 Z' fill='%231E3A8A'/%3E%3Crect x='50' y='50' width='300' height='200' fill='%23e5e7eb' opacity='0.3' rx='10'/%3E%3Crect x='80' y='80' width='240' height='140' fill='%23ffffff' opacity='0.8' rx='8'/%3E%3Ccircle cx='350' cy='100' r='20' fill='%23FF6B35'/%3E%3Cpath d='M340 110 Q350 120 360 110 L365 130 Q350 140 335 130 Z' fill='%23333'/%3E%3C/g%3E%3C/svg%3E" 
                  alt="Customer Service Representative"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Business Info */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-brand-orange">Business Hours</span>
              </h2>
              <div className="space-y-3 mb-12">
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
                <h3 className="text-xl font-semibold mb-6">
                  <span className="text-brand-orange">InstaShed HQ</span>
                </h3>
                <div className="space-y-3 text-gray-300">
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
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm text-white">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm text-white">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm text-white">in</span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Fill out the form and we'll call you back
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name (Required)"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email (Required)"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Zip Code / Area (Required)"
                      className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                      <option value="" className="text-gray-900">Type of Service You're Interested In</option>
                      <option value="residential" className="text-gray-900">Residential Metal Shed</option>
                      <option value="commercial" className="text-gray-900">Commercial Building</option>
                      <option value="agricultural" className="text-gray-900">Agricultural Barn</option>
                      <option value="garage" className="text-gray-900">Steel Garage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                  />
                  <div className="text-right mt-2">
                    <span className="text-sm text-gray-400">0/500</span>
                  </div>
                </div>

                <Button className="w-full bg-transparent border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-200 py-4 text-lg font-semibold">
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