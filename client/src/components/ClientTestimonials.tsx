export default function ClientTestimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. See what our satisfied customers have to say about their experience with INSTA-SHED.
        </p>
        
        {/* Large Quote */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="text-6xl text-brand-orange mb-4">"</div>
          <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed mb-6">
            The team at INSTA-SHED was incredible to work with. From the initial consultation to the final installation, everything was handled professionally and efficiently. Our new metal garage has exceeded our expectations in both quality and functionality.
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Sarah Mitchell</div>
              <div className="text-gray-600">Homeowner, Austin TX</div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}