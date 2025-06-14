import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { Button } from "@/components/ui/button";
import heroImage2 from "../../../Image 8.png";
import heroImage3 from "../../../Image 9.png";
import heroImage4 from "../../../Image 11.png";
import heroImage5 from "../../../Image 12.png";
import heroImage6 from "../../../Image 13.png";
import heroImage7 from "../../../Image 14.png";
import heroImage8 from "../../../Image 15.png";
import heroImage9 from "../../../Image 16.png";
export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: heroImage2,
      alt: "Large Commercial Steel Building",
      className: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: heroImage3,
      alt: "Modern Steel Garage",
      className: "col-span-1 row-span-1",
    },
    {
      id: 3,
      src: heroImage4,
      alt: "Red Agricultural Barn",
      className: "col-span-2 row-span-1",
    },
    {
      id: 4,
      src: heroImage5,
      alt: "Dark Steel Building",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      src: heroImage6,
      className: "col-span-1 row-span-1",
    },
    {
      id: 6,
      src: heroImage7,
      alt: "Steel Storage Buildings",
      className: "col-span-1 row-span-1",
    },
    {
      id: 7,
      src: heroImage8,
      className: "col-span-1 row-span-1",
    },
    {
      id: 8,
      src: heroImage9,
      alt: "Green Agricultural Building Interior",
      className: "col-span-1 row-span-1",
    },
    {
      id: 9,
      src: heroImage2,
      className: "col-span-2 row-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl sm:text-5xl font-bold text-center mb-8"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 55, 58, 1) 0%, rgba(0, 55, 58, 0.4) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            GALLERY
          </h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Row 1 - Two equal images */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Row 2 - Wide panoramic image */}
            <div className="col-span-1 md:col-span-2 aspect-[2/1] overflow-hidden rounded-lg">
              <img
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Row 3 - Three images */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Row 4 - Two images */}
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={galleryImages[6].src}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={galleryImages[7].src}
                alt={galleryImages[7].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Row 5 - Wide panoramic image */}
            <div className="col-span-1 md:col-span-2 aspect-[2/1] overflow-hidden rounded-lg">
              <img
                src={galleryImages[8].src}
                alt={galleryImages[8].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <ContactFormSection />

      <Footer />
    </div>
  );
}
