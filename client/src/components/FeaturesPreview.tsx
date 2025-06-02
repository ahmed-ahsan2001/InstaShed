import { Building, Layout, CheckCircle } from "lucide-react";

export default function FeaturesPreview() {
  const features = [
    {
      icon: Building,
      title: "Durable Construction",
      description: "Built with premium materials for decades of reliable service"
    },
    {
      icon: Layout,
      title: "Custom Design", 
      description: "Tailored solutions to meet your specific storage needs"
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description: "Backed by comprehensive warranties and expert support"
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
