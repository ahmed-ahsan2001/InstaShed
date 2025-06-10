import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The team at INSTA-SHED was incredible to work with. From the initial consultation to the final installation, everything was handled professionally and efficiently. Our new metal garage has exceeded our expectations in both quality and functionality.",
      name: "Sarah Mitchell",
      title: "Homeowner, Austin TX"
    },
    {
      quote: "Outstanding service from start to finish! The quality of our agricultural barn is exceptional, and it was completed ahead of schedule. The team was professional, knowledgeable, and went above and beyond our expectations.",
      name: "John Rodriguez",
      title: "Farm Owner, Dallas TX"
    },
    {
      quote: "We needed a custom commercial building for our business, and INSTA-SHED delivered exactly what we envisioned. The attention to detail and craftsmanship is remarkable. Highly recommend their services!",
      name: "Michelle Chen",
      title: "Business Owner, Houston TX"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. See what our satisfied customers have to say about their experience with INSTA-SHED.
        </p>
        
        {/* Testimonial Container with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-brand-orange transition-all duration-200 shadow-sm z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 hover:border-brand-orange transition-all duration-200 shadow-sm z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Large Quote */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="text-6xl text-brand-orange mb-4">"</div>
            <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-6">
              {testimonials[currentTestimonial].quote}
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentTestimonial ? 'bg-brand-orange' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}