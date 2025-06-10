import heroImage2 from "../../../Image 8.png";
import heroImage3 from "../../../Image 9.png";
import heroImage4 from "../../../Image 11.png";
import heroImage5 from "../../../Image 12.png";
import heroImage6 from "../../../Image 13.png";
import heroImage7 from "../../../Image 14.png";
import heroImage8 from "../../../Image 15.png";
import heroImage9 from "../../../Image 16.png";

export default function GallerySection() {
  const galleryItems = [
    {
      image: heroImage2,
    },
    {
      image: heroImage3,
    },
    {
      image: heroImage4,
    },
    {
      image: heroImage5,
    },
    {
      image: heroImage6,
    },
    {
      image: heroImage7,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed projects showcasing the quality
            and variety of our metal building solutions.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-sm text-brand-orange font-medium mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
