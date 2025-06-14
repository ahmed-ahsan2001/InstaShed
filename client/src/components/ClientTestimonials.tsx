import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialImage from "../../../Image 17.png"; // Replace with your actual image path

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The team at INSTA-SHED was incredible to work with. From the initial consultation to the final installation, everything was handled professionally and efficiently. Our new metal garage has exceeded our expectations in both quality and functionality.",
      name: "Sarah Mitchell",
      title: "Homeowner, Austin TX",
    },
    {
      quote:
        "Outstanding service from start to finish! The quality of our agricultural barn is exceptional, and it was completed ahead of schedule. The team was professional, knowledgeable, and went above and beyond our expectations.",
      name: "John Rodriguez",
      title: "Farm Owner, Dallas TX",
    },
    {
      quote:
        "We needed a custom commercial building for our business, and INSTA-SHED delivered exactly what we envisioned. The attention to detail and craftsmanship is remarkable. Highly recommend their services!",
      name: "Michelle Chen",
      title: "Business Owner, Houston TX",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-left">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-left">
            Don’t just take our word for it. See what our satisfied customers
            have to say about their experience with INSTA-SHED.
          </p>
        </div>

        {/* Grid Layout for Testimonial + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Testimonial */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition duration-200 shadow z-10"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition duration-200 shadow z-10"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl text-brand-orange mb-4 leading-none">
                “
              </div>
              <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-6">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex mt-6 space-x-2 justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial
                      ? "bg-brand-orange"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Static Image */}
          <div className="hidden md:block">
            <img
              src={testimonialImage}
              alt="Happy client"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
