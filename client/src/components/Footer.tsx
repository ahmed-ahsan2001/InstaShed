import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-orange rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">IS</span>
              </div>
              <span className="text-xl font-bold">INSTA-SHED</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premier metal sheds, steel garages, and outdoor storage buildings engineered for durability and designed for your needs.
            </p>
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/quote">
                  <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Get Quote</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Metal Sheds</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Steel Garages</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Workshop Buildings</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Agricultural Storage</span>
              </li>
              <li>
                <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Custom Buildings</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>123 Industrial Blvd</div>
                  <div>Austin, TX 78701</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-400">(512) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="text-gray-400">info@instashed.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-brand-orange mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 INSTA-SHED. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Privacy Policy</span>
              <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Terms of Service</span>
              <span className="text-gray-400 hover:text-brand-orange transition-colors duration-200 cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}