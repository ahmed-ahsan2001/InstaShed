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
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 mb-4">
          {/* Left - Large Weather Resistant Feature Box (spans 2 columns) */}
          <div className="lg:col-span-2 bg-white p-8 border border-gray-200">
            <div className="mb-6">
              <img
                src={logoSvg}
                alt="Weather Resistant Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Weather Resistant<br />Strength
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Right - Why Choose InstaShed Heading (spans 4 columns) */}
          <div className="lg:col-span-4 flex items-center justify-end">
            <div className="text-right relative">
              {/* Top-left bracket */}
              <div className="absolute -top-2 -left-4 w-4 h-4 border-t-2 border-l-2 border-brand-orange" />
              
              {/* Bottom-right bracket */}
              <div className="absolute -bottom-2 -right-4 w-4 h-4 border-b-2 border-r-2 border-brand-orange" />
              
              <h2 className="text-2xl lg:text-3xl font-normal text-gray-700 mb-2">
                Why Choose ?
              </h2>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
                InstaShed
                <span className="text-brand-orange">.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Section - 4 Equal Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Fast, Professional Setup */}
          <div className="bg-white p-6 border border-gray-200">
            <div className="mb-4">
              <img
                src={icon2}
                alt="Fast Setup Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast, Professional<br />Setup
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Fully Customizable */}
          <div className="bg-white p-6 border border-gray-200">
            <div className="mb-4">
              <img
                src={icon3}
                alt="Customizable Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fully<br />Customizable
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* More Value Than Wood */}
          <div className="bg-white p-6 border border-gray-200">
            <div className="mb-4">
              <img
                src={icon4}
                alt="Value Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                More Value Than<br />Wood
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our galvanized steel sheds and garages stand strong in snow,
                rain, wind, and sun.
              </p>
            </div>
          </div>

          {/* Local & Trusted by Thousands */}
          <div className="bg-white p-6 border border-gray-200">
            <div className="mb-4">
              <img
                src={icon5}
                alt="Trusted Icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Local & Trusted by<br />Thousands
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
