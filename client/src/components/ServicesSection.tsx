import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      title: "Residential Metal Sheds",
      image: "/Image 6.png",
    },
    {
      title: "Prefab Steel Garages",
      image: "/Image 7.png",
    },
    {
      title: "Agricultural Pole Barns",
      image: "/Image 8.png",
    },
    {
      title: "Commercial Steel Buildings",
      image: "/Image 9.png",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        {/* Request Quote Button - Absolute positioned */}
        <div className="absolute top-0 right-0 z-10">
          <Button
            variant="outline"
            className="px-4 py-2 border border-gray-300 text-sm font-medium bg-white hover:bg-gray-50"
          >
            Request a Free Quote
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Title and Bottom Card */}
          <div className="lg:w-1/3 flex flex-col">
            {/* Title */}
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-16">
              Services We<br />Offer
            </h2>

            {/* Bottom Left Card */}
            <div className="mt-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {services[0].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Masonry Grid */}
          <div className="lg:w-2/3 relative">
            <div className="grid grid-cols-2 gap-4 h-96">
              {/* Large Left Card - Agricultural Pole Barns */}
              <div className="col-span-1 row-span-2">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {services[2].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Top Right Card - Prefab Steel Garages */}
              <div className="col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-44">
                  <img
                    src={services[1].image}
                    alt={services[1].title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-gray-900">
                      {services[1].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card with Blue Badge - Commercial Steel Buildings */}
              <div className="col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-44 relative">
                  <img
                    src={services[3].image}
                    alt={services[3].title}
                    className="w-full h-32 object-cover"
                  />
                  
                  {/* Blue Badge Overlay */}
                  <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Fill (598) × 670.05 Hug
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-base font-semibold text-gray-900">
                      {services[3].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Find Installer Button - Bottom Right */}
            <div className="flex justify-end mt-6">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-lg font-medium">
                Find an Installer Near You
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
