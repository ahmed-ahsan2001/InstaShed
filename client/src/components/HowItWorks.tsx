import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "../../../Image 2.png";
import heroImage1 from "../../../Image 3.png";
import heroImage2 from "../../../Image 4.png";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-teal-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Title and CTA */}
          <div className="text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              How
              <br />
              It Works ?
            </h2>
            <Link href="/quote">
              <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200">
                Get Free Consultation
              </Button>
            </Link>
          </div>

          {/* Right side - Image Cards */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Card 1 - Free Consultation */}
            <div className="absolute top-0 right-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden z-30">
              <div className="h-40 flex items-center justify-center">
                <img
                  src={heroImage}
                  alt="Free Consultation"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-brand-orange">Free</span> Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  We help you plan the right metal storage shed, garage, or pole
                  barn based on your space and needs.
                </p>
              </div>
            </div>

            {/* Card 2 - Custom Build */}
            <div className="absolute top-16 left-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden z-20">
              <div className="h-40 flex items-center justify-center">
                <img
                  src={heroImage1}
                  alt="Custom Build"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Custom Build
                </h3>
                <p className="text-sm text-gray-600">
                  We help you plan the right metal storage shed, garage, or pole
                  barn based on your space and needs.
                </p>
              </div>
            </div>

            {/* Card 3 - Delivery & Installation */}
            <div className="absolute bottom-0 right-8 w-72 bg-white rounded-2xl shadow-lg overflow-hidden z-10">
              <div className="h-40 flex items-center justify-center">
                <img
                  src={heroImage2}
                  alt="Delivery & Installation"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Delivery & Installation
                </h3>
                <p className="text-sm text-gray-600">
                  Our team handles delivery and professional steel building
                  installation with precise leveling and anchoring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
