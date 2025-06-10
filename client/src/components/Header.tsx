import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-brand-orange rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">IS</span>
              </div>
              <span className="text-xl font-bold text-dark-gray">INSTA-SHED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/">
              <span className="text-brand-orange font-medium hover:hover:text-brand-orange-hover transition-colors duration-200 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                About us
              </span>
            </Link>
            <div className="relative group">
              <Link href="/services">
                <span className="text-gray-700 hover:text-brand-orange transition-colors duration-200 flex items-center cursor-pointer">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
            <Link href="/gallery">
              <span className="text-gray-700 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                Gallery
              </span>
            </Link>
            <Link href="/quote">
              <span className="text-gray-700 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                Request a Quote
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-700 hover:text-brand-orange transition-colors duration-200 cursor-pointer">
                Blog & Resources
              </span>
            </Link>
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-brand-orange text-white px-6 py-2 rounded-lg font-medium hover:bg-brand-orange-hover transition-colors duration-200">
                Contact Us
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-brand-orange"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t">
            <Link href="/">
              <span className="block px-3 py-2 text-brand-orange font-medium cursor-pointer">Home</span>
            </Link>
            <Link href="/about">
              <span className="block px-3 py-2 text-gray-700 hover:text-brand-orange cursor-pointer">About us</span>
            </Link>
            <Link href="/services">
              <span className="block px-3 py-2 text-gray-700 hover:text-brand-orange cursor-pointer">Services</span>
            </Link>
            <Link href="/gallery">
              <span className="block px-3 py-2 text-gray-700 hover:text-brand-orange cursor-pointer">Gallery</span>
            </Link>
            <Link href="/quote">
              <span className="block px-3 py-2 text-gray-700 hover:text-brand-orange cursor-pointer">Request a Quote</span>
            </Link>
            <Link href="/blog">
              <span className="block px-3 py-2 text-gray-700 hover:text-brand-orange cursor-pointer">Blog & Resources</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
