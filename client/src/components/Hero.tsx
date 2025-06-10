import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%23E8F4F8"/><stop offset="100%" style="stop-color:%23B8D4DA"/></linearGradient></defs><rect width="1200" height="800" fill="url(%23sky)"/><g><rect x="0" y="600" width="1200" height="200" fill="%2398B8A3"/><ellipse cx="100" cy="580" rx="60" ry="80" fill="%23567A5C"/><ellipse cx="300" cy="590" rx="80" ry="70" fill="%23567A5C"/><ellipse cx="500" cy="585" rx="70" ry="75" fill="%23567A5C"/><ellipse cx="700" cy="590" rx="90" ry="80" fill="%23567A5C"/><ellipse cx="900" cy="580" rx="75" ry="85" fill="%23567A5C"/><ellipse cx="1100" cy="585" rx="65" ry="70" fill="%23567A5C"/></g><g><rect x="400" y="300" width="400" height="200" fill="%23B8BCC8" stroke="%23464646" stroke-width="2"/><rect x="410" y="310" width="380" height="180" fill="%23E0E0E0"/><rect x="470" y="320" width="80" height="160" fill="%23FF6B35" stroke="%23464646" stroke-width="2"/><rect x="650" y="320" width="80" height="160" fill="%23464646"/><polygon points="380,300 600,200 820,300" fill="%238A8A8A" stroke="%23464646" stroke-width="2"/><rect x="580" y="240" width="40" height="40" fill="%23464646"/></g></svg>')`
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sheds Built To Last.<br />
              <span className="text-white">Designed For You.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Premium Metal Sheds, Prefab Steel Garages, And Outdoor Storage Buildings Engineered For Long-Term Durability, Functionality, And Peace Of Mind.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange-hover transform hover:scale-105 transition-all duration-200 shadow-lg h-auto">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="bg-gray-800 bg-opacity-80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-100 transition-all duration-200 border border-gray-600 h-auto"
                >
                  Explore Structures
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <div className="w-2 h-2 bg-brand-orange rounded-full" />
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full" />
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full" />
      </div>
    </section>
  );
}
