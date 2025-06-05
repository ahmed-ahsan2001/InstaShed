import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much does a custom metal shed or garage cost?",
      answer: "The cost varies based on size, features, and customization options. We provide detailed quotes after understanding your specific needs and requirements."
    },
    {
      question: "What areas does InstaShed serve?",
      answer: "We serve customers across Texas and surrounding states. Contact us to confirm service availability in your area."
    },
    {
      question: "How long does it take to build and install a metal building?",
      answer: "Most residential projects take 1-3 days to complete, while larger commercial buildings may take 1-2 weeks depending on complexity."
    },
    {
      question: "Do I need a permit for my shed or garage?",
      answer: "Permit requirements vary by location and building size. We handle all necessary permits and inspections as part of our service."
    },
    {
      question: "What kind of foundations do you install on?",
      answer: "We work with various foundation types including concrete slabs, gravel pads, and level ground preparations depending on your needs."
    },
    {
      question: "Can I customize the size and features of my shed or garage?",
      answer: "Absolutely! We specialize in custom solutions and can modify size, features, colors, and accessories to meet your specific requirements."
    },
    {
      question: "What is the lifespan of an InstaShed metal building?",
      answer: "Our metal buildings are designed to last decades with proper maintenance. We offer comprehensive warranties on materials and workmanship."
    },
    {
      question: "Do you offer financing options for new buildings?",
      answer: "Yes, we partner with financing companies to offer competitive rates and flexible payment plans for qualified customers."
    },
    {
      question: "How does delivery work and installation work?",
      answer: "We handle all aspects of delivery and installation. Our team coordinates scheduling and ensures professional setup at your location."
    },
    {
      question: "What if I need support after installation?",
      answer: "We provide ongoing support and maintenance services. Our team is available to help with any questions or service needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-left mb-12">
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
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Crect width='500' height='350' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='150' width='300' height='140' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='100,150 250,100 400,150' fill='%238A8A8A'/%3E%3Crect x='180' y='190' width='50' height='80' fill='%23FF6B35'/%3E%3Crect x='270' y='190' width='50' height='80' fill='%23666'/%3E%3Cpath d='M50 300 Q250 250 450 300 L450 350 L50 350 Z' fill='%2398B8A3'/%3E%3Crect x='20' y='50' width='460' height='80' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='100' cy='90' rx='30' ry='15' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='250' cy='70' rx='40' ry='20' fill='%23ffffff' opacity='0.6'/%3E%3Cellipse cx='400' cy='85' rx='35' ry='18' fill='%23ffffff' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E" 
                alt="InstaShed Building"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-brand-orange">Our</span> Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                InstaShed was founded in 2003 to help customers replace costly, 
                unreliable and rotting wood sheds with premium metal buildings. Since our establishment, 
                thousands have discovered what makes metal 
                buildings from InstaShed so special.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to develop what matters most 
                from Owner of Technology to New 
                Product Development.
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
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-brand-orange">Our</span> Values
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We start just build business by understanding 
                lasting value and reliable people where its 
                our work can thrive.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">20+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-orange mb-2">5K+</div>
                  <div className="text-gray-600 text-sm">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image placeholder */}
            <div className="bg-brand-orange rounded-lg h-64 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" fill="none"/>
                  <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f0f4f7'/%3E%3Cg%3E%3Ccircle cx='200' cy='180' r='60' fill='%23D4AF9A'/%3E%3Cpath d='M160 220 Q200 250 240 220 L240 350 Q200 370 160 350 Z' fill='%233B82F6'/%3E%3Cpath d='M180 160 Q200 140 220 160 L220 180 Q200 200 180 180 Z' fill='%238B4513'/%3E%3Cpath d='M170 170 Q200 150 230 170 L230 180 Q200 160 170 180 Z' fill='%23654321'/%3E%3Cpath d='M140 240 Q200 260 260 240 L260 280 Q200 300 140 280 Z' fill='%232563EB'/%3E%3Cpath d='M180 280 L220 280 L210 320 L190 320 Z' fill='%231E40AF'/%3E%3C/g%3E%3C/svg%3E" 
                alt="Founder"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-brand-orange">Our</span> Founder
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With 20+ years of construction experience, Jeremy 
                started InstaShed to deliver affordable metal 
                buildings nationwide. His commitment to quality, 
                customer service and building lasting relationships 
                and honest service.
              </p>
              
              <div className="bg-brand-orange text-white px-6 py-4 rounded-lg inline-block">
                <div className="font-semibold">Jeremy Smith</div>
                <div className="text-sm opacity-90">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-brand-orange">Frequently</span><br />
            Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  {expandedFAQs.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQs.includes(index) && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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