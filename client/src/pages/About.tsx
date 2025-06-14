import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HomePageFAQ from "@/components/HomePageFAQ";
import heroImage3 from "../../../AboutUs/aboutusimage1.png";
import heroImage4 from "../../../AboutUs/aboutusimage2.png";
import aboutIcon1 from "../../../AboutUs/aboutusicon1.svg";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 55, 58, 1) 0%, rgba(0, 55, 58, 0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <img
                src={heroImage3}
                alt="InstaShed Building"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative inline-block">
                      Our
                    </span>

                    <span className="ml-2 text-gray-900">Story</span>
                  </h2>
                  <div className="absolute left-3 top-12 w-0.5 h-32 bg-brand-orange"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 ml-8">
                InstaShed was founded in 2003 to help customers replace costly,
                unreliable and rotting wood sheds with premium metal buildings.
                Since our establishment, thousands have discovered what makes
                metal buildings from InstaShed so special.
              </p>
              <p className="text-gray-600 leading-relaxed ml-8">
                Our mission is to develop what matters most from Owner of
                Technology to New Product Development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative">Our</span>
                    <span className="ml-2 text-gray-900">Values</span>
                  </h2>
                  <div className="absolute left-3 top-12 w-0.5 h-48 bg-brand-orange"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 ml-8">
                We start just build business by understanding lasting value and
                reliable people where its our work can thrive.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 ml-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">
                    20+
                  </div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">
                    5K+
                  </div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Column - SVG Icon */}
            {/* Right Column - SVG with orange rectangle */}
            {/* Right Column - SVG with orange rectangle */}
            {/* Right Column - SVG with orange rectangle */}
            <div className="relative flex flex-col items-center justify-center">
              {/* SVG (used to define height reference) */}
              <img
                src={aboutIcon1}
                alt="Values Icon"
                style={{
                  width: "212.6px",
                  height: "122px",
                  zIndex: 1,
                  position: "relative",
                }}
              />

              {/* Orange rectangle (centered vertically behind the SVG) */}
              <div
                style={{
                  width: "401px",
                  height: "89px",
                  backgroundColor: "#F97316", // Orange
                  borderRadius: "8px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)", // Vertical centering
                  zIndex: 0,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <img
                src={heroImage4}
                alt="Founder"
                className="w-full h-100 object-cover rounded-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative">Our</span>
                    <span className="ml-2 text-gray-900">Founder</span>
                  </h2>
                  <div className="absolute left-3 top-12 w-0.5 h-32 bg-brand-orange"></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 ml-8">
                With <span className="text-orange-500">20+</span> years of
                construction experience, Jeremy started InstaShed to deliver
                affordable metal buildings nationwide. His commitment to
                quality, customer service and building lasting relationships and
                honest service.
              </p>

              <div
                className="bg-brand-orange text-white px-6 py-4 rounded-lg inline-block"
                style={{
                  width: "502px",
                  marginLeft: "-80px", // Adjust this value as needed
                }}
              >
                <div className="font-semibold text-center">
                  Jeremy Zimmerman - Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <HomePageFAQ />

      {/* Business Hours Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3 mb-8">
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

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">InstaShed HQ</h3>
                <div className="space-y-2 text-gray-300">
                  <div>📍 InstaShed.com</div>
                  <div>📍 123 Steel Way Suite 100, TX 78750, USA</div>
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
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fill out the form and we'll call you back.
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
                  placeholder="Tell us about your project"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                ></textarea>
                <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200 py-3">
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
