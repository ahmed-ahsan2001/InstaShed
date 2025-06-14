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

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1240px] h-[600px] sm:h-[700px] lg:h-[818px] mx-auto">
          <div className="relative w-full h-full overflow-hidden rounded-3xl">
            {/* Define the clip path for the curved cut */}
            <svg className="absolute inset-0 w-0 h-0">
              <defs>
                <clipPath id="heroClipPath">
                  <path d="M 0 0 L 1240 0 L 1240 718 Q 1140 818 1040 818 L 0 818 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Slide image with overlay and curved cut */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
              style={{
                backgroundImage: `url('${slides[currentSlide].image}')`,
                clipPath: "url(#heroClipPath)",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {/* Content */}
              <div className="relative z-10 flex items-center h-full px-4 sm:px-8 lg:px-16">
                <div className="max-w-2xl text-white">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
                    {slides[currentSlide].title}
                    <br />
                    <span>{slides[currentSlide].subtitle}</span>
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed font-normal">
                    {slides[currentSlide].description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/quote">
                      <Button className="bg-brand-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-brand-orange-hover transform hover:scale-105 transition-all duration-200 shadow-lg h-auto">
                        Get a Free Quote
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        variant="outline"
                        className="bg-gray-800 bg-opacity-80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-100 transition-all duration-200 border border-gray-600 h-auto"
                      >
                        Explore Structures
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 right-4 flex space-x-2 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
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
