import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='50' y='200' width='500' height='150' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,200 300,150 550,200' fill='%238A8A8A'/%3E%3Crect x='120' y='240' width='80' height='100' fill='%23333'/%3E%3Crect x='220' y='240' width='80' height='100' fill='%23333'/%3E%3Crect x='320' y='240' width='80' height='100' fill='%23333'/%3E%3Crect x='420' y='240' width='80' height='100' fill='%23333'/%3E%3Cpath d='M0 350 Q300 320 600 350 L600 400 L0 400 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q300 30 600 50 L600 150 Q300 120 0 150 Z' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='150' cy='100' rx='40' ry='20' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='450' cy='85' rx='50' ry='25' fill='%23ffffff' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Large Commercial Steel Building",
      className: "col-span-1 row-span-1"
    },
    {
      id: 2,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='150' y='180' width='300' height='140' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='150,180 300,130 450,180' fill='%237A7A7A'/%3E%3Crect x='220' y='220' width='50' height='80' fill='%23FF6B35'/%3E%3Crect x='330' y='220' width='50' height='80' fill='%23666'/%3E%3Cpath d='M0 330 Q300 300 600 330 L600 400 L0 400 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q300 30 600 50 L600 150 Q300 120 0 150 Z' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='200' cy='100' rx='35' ry='18' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='400' cy='90' rx='45' ry='22' fill='%23ffffff' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Modern Steel Garage",
      className: "col-span-1 row-span-1"
    },
    {
      id: 3,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='120' width='400' height='120' fill='%23D32F2F' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M100 120 Q300 80 500 120' fill='%23B71C1C'/%3E%3Crect x='180' y='160' width='40' height='60' fill='%23333'/%3E%3Crect x='240' y='160' width='40' height='60' fill='%23333'/%3E%3Crect x='320' y='160' width='40' height='60' fill='%23333'/%3E%3Crect x='380' y='160' width='40' height '60' fill='%23333'/%3E%3Cpath d='M0 250 Q300 220 600 250 L600 300 L0 300 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 30 Q300 10 600 30 L600 80 Q300 60 0 80 Z' fill='%23A5D6A7'/%3E%3Cellipse cx='150' cy='55' rx='30' ry='15' fill='%23C8E6C9'/%3E%3Cellipse cx='450' cy='50' rx='40' ry='18' fill='%23C8E6C9'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Red Agricultural Barn",
      className: "col-span-2 row-span-1"
    },
    {
      id: 4,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='200' width='200' height='120' fill='%23464646' stroke='%23333' stroke-width='2'/%3E%3Cpolygon points='100,200 200,160 300,200' fill='%23333'/%3E%3Crect x='160' y='240' width='30' height='60' fill='%23FF6B35'/%3E%3Crect x='210' y='240' width='30' height='60' fill='%23666'/%3E%3Cpath d='M50 330 Q200 310 350 330 L350 400 L50 400 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q200 30 400 50 L400 120 Q200 100 0 120 Z' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='100' cy='85' rx='25' ry='12' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='300' cy='80' rx='30' ry='15' fill='%23ffffff' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Dark Steel Building",
      className: "col-span-1 row-span-1"
    },
    {
      id: 5,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23FFF8E1'/%3E%3Cg%3E%3Crect x='50' y='200' width='300' height='120' fill='%23D7CCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,200 200,150 350,200' fill='%23BCAAA4'/%3E%3Crect x='120' y='240' width='50' height='60' fill='%23333'/%3E%3Crect x='180' y='240' width='50' height='60' fill='%23333'/%3E%3Crect x='240' y='240' width='50' height='60' fill='%23333'/%3E%3Cpath d='M0 330 Q200 310 400 330 L400 400 L0 400 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q200 30 400 50 L400 120 Q200 100 0 120 Z' fill='%23FFE082' opacity='0.7'/%3E%3Cellipse cx='100' cy='85' rx='25' ry='12' fill='%23FFF59D'/%3E%3Cellipse cx='300' cy='80' rx='30' ry='15' fill='%23FFF59D'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Construction Workshop Interior",
      className: "col-span-1 row-span-1"
    },
    {
      id: 6,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='80' y='180' width='240' height='140' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='80,180 200,140 320,180' fill='%237A7A7A'/%3E%3Crect x='140' y='220' width='40' height='80' fill='%23333'/%3E%3Crect x='220' y='220' width='40' height='80' fill='%23333'/%3E%3Cpath d='M30 330 Q200 310 370 330 L370 400 L30 400 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q200 30 400 50 L400 120 Q200 100 0 120 Z' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='100' cy='85' rx='25' ry='12' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='300' cy='80' rx='30' ry='15' fill='%23ffffff' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Steel Storage Buildings",
      className: "col-span-1 row-span-1"
    },
    {
      id: 7,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23E3F2FD'/%3E%3Cg%3E%3Crect x='50' y='200' width='500' height='150' fill='%232196F3' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M50 200 Q300 160 550 200' fill='%231976D2'/%3E%3Crect x='120' y='240' width='80' height='100' fill='%23333'/%3E%3Crect x='220' y='240' width='80' height='100' fill='%23333'/%3E%3Crect x='320' y='240' width='80' height='100' fill='%23333'/%3E%3Crect x='420' y='240' width='80' height='100' fill='%23333'/%3E%3Cline x1='160' y1='240' x2='160' y2='340' stroke='%23666' stroke-width='2'/%3E%3Cline x1='260' y1='240' x2='260' y2='340' stroke='%23666' stroke-width='2'/%3E%3Cline x1='360' y1='240' x2='360' y2='340' stroke='%23666' stroke-width='2'/%3E%3Cline x1='460' y1='240' x2='460' y2='340' stroke='%23666' stroke-width='2'/%3E%3Cpath d='M0 350 Q300 320 600 350 L600 400 L0 400 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Blue Steel Frame Building",
      className: "col-span-1 row-span-1"
    },
    {
      id: 8,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23E8F5E8'/%3E%3Cg%3E%3Crect x='100' y='180' width='400' height='160' fill='%23C8E6C9' stroke='%23464646' stroke-width='2'/%3E%3Cpath d='M100 180 Q300 140 500 180' fill='%23A5D6A7'/%3E%3Crect x='180' y='220' width='60' height='100' fill='%23333'/%3E%3Crect x='260' y='220' width='60' height='100' fill='%23333'/%3E%3Crect x='340' y='220' width='60' height='100' fill='%23333'/%3E%3Cpath d='M50 350 Q300 320 550 350 L550 400 L50 400 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 50 Q300 30 600 50 L600 120 Q300 100 0 120 Z' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='200' cy='85' rx='40' ry='20' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='400' cy='80' rx='50' ry='25' fill='%23ffffff' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Green Agricultural Building Interior",
      className: "col-span-1 row-span-1"
    },
    {
      id: 9,
      src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 300'%3E%3Crect width='600' height='300' fill='%23FFF3E0'/%3E%3Cg%3E%3Crect x='50' y='120' width='150' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='220' y='120' width='150' height='120' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Crect x='390' y='120' width='150' height='120' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,120 125,90 200,120' fill='%238A8A8A'/%3E%3Cpolygon points='220,120 295,90 370,120' fill='%237A7A7A'/%3E%3Cpolygon points='390,120 465,90 540,120' fill='%238A8A8A'/%3E%3Crect x='90' y='160' width='25' height='60' fill='%23FF6B35'/%3E%3Crect x='260' y='160' width='25' height='60' fill='%23333'/%3E%3Crect x='430' y='160' width='25' height='60' fill='%23666'/%3E%3Cpath d='M0 250 Q300 220 600 250 L600 300 L0 300 Z' fill='%2398B8A3'/%3E%3Cpath d='M0 30 Q300 10 600 30 L600 80 Q300 60 0 80 Z' fill='%23FFE082' opacity='0.7'/%3E%3C/g%3E%3C/svg%3E",
      alt: "Multiple Storage Units at Sunset",
      className: "col-span-2 row-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-8">
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
                  <div>📍 123 West Main Street Suite 100, Spring Hill, TN 37074, USA</div>
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