import { Shield, Zap, Settings, Home, Users } from "lucide-react";
import logoSvg from "../../../icon1.svg";
import icon2 from "../../../icon2.svg";
import icon3 from "../../../icon3.svg";
import icon4 from "../../../icon4.svg";
import icon5 from "../../../icon5.svg";

export default function FeaturesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Weather Resistant Feature Box */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-6">
              <img
                src={logoSvg}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Weather Resistant Strength
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Right - Why Choose InstaShed Heading */}
          <div className="flex flex-col justify-center">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-gray-600">Why Choose ?</span>
                <br />
                <span className="text-gray-900">InstaShed</span>
              </h2>

              {/* Orange Arrows */}
              <div className="absolute -right-4 top-4 flex flex-col space-y-2">
                <div className="w-8 h-0.5 bg-brand-orange transform rotate-45 origin-left"></div>
                <div className="w-8 h-0.5 bg-brand-orange transform -rotate-45 origin-left"></div>
              </div>
              <div className="absolute -right-4 bottom-4 flex flex-col space-y-2">
                <div className="w-8 h-0.5 bg-brand-orange transform rotate-45 origin-left"></div>
                <div className="w-8 h-0.5 bg-brand-orange transform -rotate-45 origin-left"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - 4 Equal Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fast, Professional Setup */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-4">
              <img
                src={icon2}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast, Professional Setup
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Fully Customizable */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-4">
              <img
                src={icon3}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fully Customizable
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* More Value Than Wood */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-4">
              <img
                src={icon4}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                More Value Than Wood
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Local & Trusted by Thousands */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="mb-4">
              <img
                src={icon5}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Local & Trusted by Thousands
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
