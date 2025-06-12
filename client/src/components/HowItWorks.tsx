import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/Image 2.png";
import heroImage1 from "@assets/Image 3.png";
import heroImage2 from "@assets/Image 4.png";

export default function HowItWorks() {
  return (
    <section className="bg-teal-800 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Title, Image, Button */}
        <div className="flex flex-col space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-white text-5xl font-bold leading-tight mb-6">
              How
              <br />
              It Works ?
            </h2>
          </div>

          {/* Left Image Card */}
          <div className="w-96 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-52">
              <img
                src={heroImage1}
                alt="Custom Build"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Custom Build
              </h3>
              <p className="text-base text-gray-600">
                We help you plan the right metal storage shed, garage, or pole
                barn based on your space and needs.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <Link href="/quote">
              <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-base rounded-md font-semibold">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side - Two Cards */}
        <div className="flex flex-col space-y-10 items-end">
          {/* Top Right Card */}
          <div className="w-96 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-52">
              <img
                src={heroImage}
                alt="Free Consultation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <span className="text-brand-orange">Free</span> Consultation
              </h3>
              <p className="text-base text-gray-600">
                We help you plan the right metal storage shed, garage, or pole
                barn based on your space and needs.
              </p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="w-96 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-52">
              <img
                src={heroImage2}
                alt="Delivery & Installation"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Delivery & Installation
              </h3>
              <p className="text-base text-gray-600">
                Our team handles delivery and professional steel building
                installation with precise leveling and anchoring.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
