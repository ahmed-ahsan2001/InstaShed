import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

      {/* Business Hours Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">InstaShed HQ</h3>
                <div className="space-y-2 text-gray-300">
                  <div>📍 info@instashed.us</div>
                  <div>
                    📍 123 West Main Street Suite 100, Spring Hill, TN 37074,
                    USA
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-orange transition-colors duration-200 cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fill out the form and we'll call you back
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent">
                    <option>What type of building do you need?</option>
                    <option>Residential Storage Shed</option>
                    <option>Commercial Building</option>
                    <option>Agricultural Barn</option>
                    <option>Workshop Building</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                ></textarea>
                <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200 py-3">
                  Schedule My Call
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
