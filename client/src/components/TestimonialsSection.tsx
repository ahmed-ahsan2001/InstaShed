export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      rating: 5,
      text: "INSTA-SHED built us the perfect workshop for our woodworking business. The quality is outstanding and the installation was professional and timely.",
      project: "Custom Workshop Building"
    },
    {
      name: "Mike Chen", 
      location: "Dallas, TX",
      rating: 5,
      text: "We needed a large storage solution for our equipment. The team delivered exactly what we wanted on time and within budget. Highly recommended!",
      project: "Commercial Storage Facility"
    },
    {
      name: "Jennifer Davis",
      location: "Houston, TX", 
      rating: 5,
      text: "The shed has been perfect for organizing our backyard tools and equipment. Great build quality and excellent customer service throughout the process.",
      project: "Residential Storage Shed"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience with INSTA-SHED.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Project Type */}
              <div className="text-sm text-brand-orange font-medium mb-2">
                {testimonial.project}
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}