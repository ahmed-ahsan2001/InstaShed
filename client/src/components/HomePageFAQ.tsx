import { useState } from "react";
import icon7 from "../../../Icon 6.svg"; // Down arrow (collapsed)
import icon6 from "../../../reqicon2.svg"; // Up arrow (expanded)

export default function HomePageFAQ() {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  const faqs = [
    {
      question: "How much does a custom metal shed or garage cost?",
      answer:
        "The cost varies based on size, features, and customization options. We provide detailed quotes after understanding your specific needs and requirements.",
    },
    {
      question: "What areas does InstaShed serve?",
      answer:
        "We serve customers across Texas and surrounding states. Contact us to confirm service availability in your area.",
    },
    {
      question: "How long does it take to build and install a metal building?",
      answer:
        "Most residential projects take 1-3 days to complete, while larger commercial buildings may take 1-2 weeks depending on complexity.",
    },
    {
      question: "Do I need a permit for my shed or garage?",
      answer:
        "Permit requirements vary by location and building size. We handle all necessary permits and inspections as part of our service.",
    },
    {
      question: "What kind of foundations do you install on?",
      answer:
        "We work with various foundation types including concrete slabs, gravel pads, and level ground preparations depending on your needs.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-1 h-16 bg-brand-orange rounded-full"></div>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                <div className="text-brand-orange">Frequently</div>
                <div className="text-gray-900">Asked Questions</div>
              </h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 ml-8">
            Find answers to the most common questions about our metal building
            services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <img
                  src={expandedFAQs.includes(index) ? icon7 : icon6}
                  alt={expandedFAQs.includes(index) ? "Collapse" : "Expand"}
                  className="w-5 h-5 flex-shrink-0"
                />
              </button>
              {expandedFAQs.includes(index) && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
