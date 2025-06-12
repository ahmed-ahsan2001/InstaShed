import { Button } from "@/components/ui/button";
import heroImage from "../../../ServicesPageAll/servicesimage3.png";
import heroImage1 from "../../../ServicesPageAll/servicesimage2.png";
import heroImage2 from "../../../ServicesPageAll/servicesimage1.png";
import heroImage3 from "../../../ServicesPageAll/servicesimage4.png";
export default function ServicesSection() {
  const services = [
    {
      title: "Residential Metal Sheds",
      image: heroImage,
    },
    {
      title: "Prefab Steel Garages",
      image: heroImage1,
    },
    {
      title: "Agricultural Pole Barns",
      image: heroImage2,
    },
    {
      title: "Commercial Steel Buildings",
      image: heroImage3,
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col space-y-6">
          {/* Heading */}
          <h2 className="text-gray-900 text-[100px] font-bold leading-tight mb-6">
            Services
            <br />
            We Offer
          </h2>

          {/* First Left Card */}
          <div className="w-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[350px]">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {services[0].title}
              </h3>
            </div>
          </div>

          {/* Second Left Card */}
          <div className="w-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[350px]">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {services[1].title}
              </h3>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <Button className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3 text-base rounded-md font-semibold">
              Find an Installer Near You
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col space-y-10 items-end relative">
          {/* Absolute Button */}
          <div className="absolute -top-20 right-0 z-10">
            <Button
              variant="outline"
              className="px-4 py-2 border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50"
            >
              Request a Free Quote
            </Button>
          </div>

          {/* Right Top Card */}
          <div className="w-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[350px]">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {services[2].title}
              </h3>
            </div>
          </div>

          {/* Right Bottom Card */}
          <div className="w-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-[350px]">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {services[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
