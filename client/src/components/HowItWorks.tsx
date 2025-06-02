import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Style",
      description: "Browse our extensive catalog of metal sheds and storage buildings to find the perfect fit for your needs.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f4f7'/%3E%3Cg%3E%3Crect x='50' y='100' width='120' height='80' fill='%23FF6B35' stroke='%23333' stroke-width='2'/%3E%3Crect x='230' y='100' width='120' height='80' fill='%23666' stroke='%23333' stroke-width='2'/%3E%3Cpolygon points='50,100 110,60 170,100' fill='%23888'/%3E%3Cpolygon points='230,100 290,60 350,100' fill='%23888'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      number: "02", 
      title: "Get A Quote",
      description: "Our experts will provide you with a detailed quote based on your specific requirements and site conditions.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f4f7'/%3E%3Cg%3E%3Crect x='100' y='80' width='200' height='140' fill='%23fff' stroke='%23333' stroke-width='2'/%3E%3Cline x1='120' y1='110' x2='280' y2='110' stroke='%23FF6B35' stroke-width='3'/%3E%3Cline x1='120' y1='130' x2='250' y2='130' stroke='%23666' stroke-width='2'/%3E%3Cline x1='120' y1='150' x2='270' y2='150' stroke='%23666' stroke-width='2'/%3E%3Cline x1='120' y1='170' x2='230' y2='170' stroke='%23666' stroke-width='2'/%3E%3Cline x1='120' y1='190' x2='260' y2='190' stroke='%23FF6B35' stroke-width='3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      number: "03",
      title: "We Build & Install", 
      description: "Our skilled team handles everything from permits to final installation, ensuring your shed is built to last.",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f0f4f7'/%3E%3Cg%3E%3Crect x='150' y='120' width='100' height='60' fill='%23FF6B35' stroke='%23333' stroke-width='2'/%3E%3Cpolygon points='150,120 200,90 250,120' fill='%23888'/%3E%3Crect x='180' y='140' width='15' height='30' fill='%23333'/%3E%3Ccircle cx='120' cy='200' r='15' fill='%23666'/%3E%3Cline x1='105' y1='190' x2='280' y2='160' stroke='%23333' stroke-width='3'/%3E%3Cpolygon points='275,155 285,160 275,165' fill='%23333'/%3E%3C/g%3E%3C/svg%3E"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes getting your perfect storage solution simple and stress-free.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Image */}
              <div className="mb-6">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Step Number */}
              <div className="text-4xl font-bold text-brand-orange mb-4">
                {step.number}
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-hover transition-colors duration-200">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
}