import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage5 from "../../../contactimage1.png";
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
                Let's <span className="text-orange-500">Talk</span> About
                <br />
                Your Next
                <br />
                Metal Building
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Looking to build a shed, garage, or barn? Submit your info and
                our team will give you a call to discuss your project — no
                pressure, just expert advice.
              </p>
            </div>

            {/* Right Column - Customer Service Image */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-2xl p-8 max-w-md">
                <img
                  src={heroImage5}
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
                    <span>
                      107 West Main Street #681 Torre Hill, PA 17581 USA
                    </span>
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
                      <option value="" className="text-gray-900">
                        Type of Service You're Interested In
                      </option>
                      <option value="residential" className="text-gray-900">
                        Residential Metal Shed
                      </option>
                      <option value="commercial" className="text-gray-900">
                        Commercial Building
                      </option>
                      <option value="agricultural" className="text-gray-900">
                        Agricultural Barn
                      </option>
                      <option value="garage" className="text-gray-900">
                        Steel Garage
                      </option>
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
