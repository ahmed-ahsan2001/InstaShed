import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1240 818'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23B8D4DA'/%3E%3Cstop offset='100%25' style='stop-color:%23E8F4F8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1240' height='818' fill='url(%23sky)'/%3E%3Cg%3E%3Crect x='0' y='600' width='1240' height='218' fill='%2398B8A3'/%3E%3Cellipse cx='100' cy='580' rx='60' ry='80' fill='%23567A5C'/%3E%3Cellipse cx='300' cy='590' rx='80' ry='70' fill='%23567A5C'/%3E%3Cellipse cx='500' cy='585' rx='70' ry='75' fill='%23567A5C'/%3E%3Cellipse cx='700' cy='590' rx='90' ry='80' fill='%23567A5C'/%3E%3Cellipse cx='900' cy='580' rx='75' ry='85' fill='%23567A5C'/%3E%3Cellipse cx='1100' cy='585' rx='65' ry='70' fill='%23567A5C'/%3E%3C/g%3E%3Cg%3E%3Crect x='650' y='350' width='400' height='200' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='660' y='360' width='380' height='180' fill='%23E0E0E0'/%3E%3Crect x='720' y='370' width='80' height='160' fill='%23FF6B35' stroke='%23464646' stroke-width='2'/%3E%3Crect x='900' y='370' width='80' height='160' fill='%23464646'/%3E%3Cpolygon points='630,350 850,250 1070,350' fill='%238A8A8A' stroke='%23464646' stroke-width='2'/%3E%3Crect x='830' y='290' width='40' height='40' fill='%23464646'/%3E%3C/g%3E%3C/svg%3E",
      title: "Sheds Built To Last.",
      subtitle: "Designed For You.",
      description: "Premium Metal Sheds, Prefab Steel Garages, And Outdoor Storage Buildings Engineered For Long-Term Durability, Functionality, And Peace Of Mind."
    },
    {
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1240 818'%3E%3Cdefs%3E%3ClinearGradient id='sky2' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23F0F8FF'/%3E%3Cstop offset='100%25' style='stop-color:%23E6F3FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1240' height='818' fill='url(%23sky2)'/%3E%3Cg%3E%3Crect x='0' y='600' width='1240' height='218' fill='%23A8C8B3'/%3E%3Cellipse cx='150' cy='580' rx='80' ry='90' fill='%23677A6C'/%3E%3Cellipse cx='400' cy='590' rx='90' ry='80' fill='%23677A6C'/%3E%3Cellipse cx='650' cy='585' rx='85' ry='85' fill='%23677A6C'/%3E%3Cellipse cx='900' cy='590' rx='95' ry='85' fill='%23677A6C'/%3E%3Cellipse cx='1150' cy='580' rx='70' ry='90' fill='%23677A6C'/%3E%3C/g%3E%3Cg%3E%3Crect x='550' y='300' width='500' height='250' fill='%23C8CCD8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='560' y='310' width='480' height='230' fill='%23F0F0F0'/%3E%3Crect x='620' y='320' width='100' height='200' fill='%23FF6B35' stroke='%23464646' stroke-width='2'/%3E%3Crect x='800' y='320' width='100' height='200' fill='%23464646'/%3E%3Cpolygon points='530,300 800,180 1070,300' fill='%239A9A9A' stroke='%23464646' stroke-width='2'/%3E%3Crect x='780' y='220' width='40' height='40' fill='%23464646'/%3E%3C/g%3E%3C/svg%3E",
      title: "Custom Steel Buildings.",
      subtitle: "Built To Order.",
      description: "Agricultural Barns, Commercial Buildings, And Custom Metal Structures Designed For Your Specific Requirements And Built To Last Decades."
    },
    {
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1240 818'%3E%3Cdefs%3E%3ClinearGradient id='sky3' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D8E8DA'/%3E%3Cstop offset='100%25' style='stop-color:%23F8FDF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1240' height='818' fill='url(%23sky3)'/%3E%3Cg%3E%3Crect x='0' y='600' width='1240' height='218' fill='%23B8D8A3'/%3E%3Cellipse cx='120' cy='580' rx='70' ry='85' fill='%23778A5C'/%3E%3Cellipse cx='350' cy='590' rx='85' ry='75' fill='%23778A5C'/%3E%3Cellipse cx='580' cy='585' rx='75' ry='80' fill='%23778A5C'/%3E%3Cellipse cx='810' cy='590' rx='100' ry='85' fill='%23778A5C'/%3E%3Cellipse cx='1040' cy='580' rx='80' ry='90' fill='%23778A5C'/%3E%3C/g%3E%3Cg%3E%3Crect x='450' y='280' width='600' height='280' fill='%23A8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='460' y='290' width='580' height='260' fill='%23E8E8E8'/%3E%3Crect x='520' y='300' width='120' height='240' fill='%23FF6B35' stroke='%23464646' stroke-width='2'/%3E%3Crect x='750' y='300' width='120' height='240' fill='%23464646'/%3E%3Cpolygon points='430,280 750,160 1070,280' fill='%23AAAA9A' stroke='%23464646' stroke-width='2'/%3E%3Crect x='730' y='200' width='40' height='40' fill='%23464646'/%3E%3C/g%3E%3C/svg%3E",
      title: "Professional Installation.",
      subtitle: "Expert Service.",
      description: "From Foundation To Completion, Our Experienced Team Handles Every Detail With Precision And Care For A Perfect Result Every Time."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Slider Container */}
        <div className="relative w-full max-w-[1240px] h-[818px] mx-auto">
          {/* Slider with rounded corners and curved notch cut */}
          <div 
            className="relative w-full h-full overflow-hidden rounded-3xl"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 90%, 90% 95%, 85% 98%, 75% 100%, 0 100%)"
            }}
          >
            {/* Current Slide */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url('${slides[currentSlide].image}')`
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              
              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-8 lg:px-16">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    {slides[currentSlide].title}<br />
                    <span className="text-white">{slides[currentSlide].subtitle}</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                    {slides[currentSlide].description}
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



          </div>
          
          {/* Slide Indicators - positioned in the cut-out area */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-brand-orange' : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}