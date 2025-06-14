import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "../../../image1.jpg";
import heroImage2 from "../../../Image 7.png";
import heroImage3 from "../../../Back ground 1.jpg";
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Sheds Built To Last.",
      subtitle: "Designed For You.",
      description:
        "Premium Metal Sheds, Prefab Steel Garages, And Outdoor Storage Buildings Engineered For Long-Term Durability, Functionality, And Peace Of Mind.",
    },
    {
      image: heroImage2,
      title: "Custom Steel Buildings.",
      subtitle: "Built To Order.",
      description:
        "Agricultural Barns, Commercial Buildings, And Custom Metal Structures Designed For Your Specific Requirements And Built To Last Decades.",
    },
    {
      image: heroImage3,
      title: "Professional Installation.",
      subtitle: "Expert Service.",
      description:
        "From Foundation To Completion, Our Experienced Team Handles Every Detail With Precision And Care For A Perfect Result Every Time.",
    },
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
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            {/* Current Slide */}
            <div className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-white rounded-tl-2xl z-20" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url('${slides[currentSlide].image}')`,
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0% 100%)",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-8 lg:px-16">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    {slides[currentSlide].title}
                    <br />
                    <span className="text-white">
                      {slides[currentSlide].subtitle}
                    </span>
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
                  index === currentSlide
                    ? "bg-brand-orange"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
