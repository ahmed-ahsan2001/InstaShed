import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
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
              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight">
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
              <img
                src={heroImage5}
                alt="Customer Service Representative"
                className="w-80 h-96 object-cover rounded-lg"
              />
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
