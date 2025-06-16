import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HomePageFAQ from "@/components/HomePageFAQ";
import ContactFormSection from "@/components/ContactFormSection";
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
            <div>
              <img
                src={heroImage3}
                alt="InstaShed Building"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative inline-block">
                      Our
                    </span>
                    <span className="ml-2 text-gray-900">Story</span>
                  </h2>
                  <div
                    className="absolute left-3 top-12 w-[3px] h-[160px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #F97316, transparent)",
                    }}
                  ></div>
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
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative">Our</span>
                    <span className="ml-2 text-gray-900">Values</span>
                  </h2>
                  <div
                    className="absolute left-3 top-12 w-[3px] h-[200px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #F97316, transparent)",
                    }}
                  ></div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 ml-8">
                We start just build business by understanding lasting value and
                reliable people where its our work can thrive.
              </p>

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

            {/* Orange background with icon */}
            <div className="relative flex flex-col items-center justify-center">
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
              <div
                style={{
                  width: "401px",
                  height: "89px",
                  backgroundColor: "#F97316",
                  borderRadius: "8px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
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
            <div>
              <img
                src={heroImage4}
                alt="Founder"
                className="w-full h-100 object-cover rounded-lg"
              />
            </div>
            <div className="relative">
              <div className="flex items-start">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <span className="text-orange-500 relative">Our</span>
                    <span className="ml-2 text-gray-900">Founder</span>
                  </h2>
                  <div
                    className="absolute left-3 top-12 w-[3px] h-[160px]"
                    style={{
                      background:
                        "linear-gradient(to bottom, #F97316, transparent)",
                    }}
                  ></div>
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
                  marginLeft: "-80px",
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

      <HomePageFAQ />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
