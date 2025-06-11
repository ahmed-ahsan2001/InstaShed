import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Quote() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredContact: "",
    serviceType: "",
    length: "",
    width: "",
    height: "",
    intendedUse: "",
    sidingMaterial: "",
    windowType: "",
    doorType: "",
    shelving: "",
    workbench: "",
    howDidYouHear: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl font-bold text-center mb-8"
            style={{
              background:
                "linear-gradient(90deg, rgba(0, 55, 58, 1) 0%, rgba(0, 55, 58, 0.4) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            REQUEST QUOTE
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Request a Quote
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get Your Custom Metal Building Quote Today
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Looking for a durable, cost-effective storage solution? Our
                expert team can help you find the perfect metal shed or building
                that meets your needs and budget. Fill out our form to get a
                personalized quote today.
              </p>

              {/* Hero Image */}
              <div className="mb-8">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 350'%3E%3Crect width='500' height='350' fill='%23e8f4f7'/%3E%3Cg%3E%3Crect x='100' y='150' width='300' height='140' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='100,150 250,100 400,150' fill='%238A8A8A'/%3E%3Crect x='180' y='190' width='50' height='80' fill='%23FF6B35'/%3E%3Crect x='270' y='190' width='50' height='80' fill='%23666'/%3E%3Cpath d='M50 300 Q250 250 450 300 L450 350 L50 350 Z' fill='%2398B8A3'/%3E%3Cpath d='M20 50 Q250 30 480 50 L480 120 Q250 100 20 120 Z' fill='%23B0D4E3' opacity='0.7'/%3E%3Cellipse cx='100' cy='85' rx='30' ry='15' fill='%23ffffff' opacity='0.8'/%3E%3Cellipse cx='250' cy='70' rx='40' ry='20' fill='%23ffffff' opacity='0.6'/%3E%3Cellipse cx='400' cy='85' rx='35' ry='18' fill='%23ffffff' opacity='0.7'/%3E%3Ccircle cx='350' cy='200' r='40' fill='%23D4AF9A'/%3E%3Cpath d='M330 230 Q350 250 370 230 L370 290 Q350 300 330 290 Z' fill='%233B82F6'/%3E%3Ccircle cx='450' cy='220' r='35' fill='%23D4AF9A'/%3E%3Cpath d='M425 245 Q450 265 475 245 L475 300 Q450 315 425 300 Z' fill='%23059669'/%3E%3C/g%3E%3C/svg%3E"
                  alt="Metal Building with People"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                <span className="text-brand-orange">Fill the Form</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent mb-4"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Preferred Contact Method
                  </h4>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        onChange={(e) =>
                          handleInputChange("preferredContact", e.target.value)
                        }
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        onChange={(e) =>
                          handleInputChange("preferredContact", e.target.value)
                        }
                        className="mr-2"
                      />
                      Call
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="text"
                        onChange={(e) =>
                          handleInputChange("preferredContact", e.target.value)
                        }
                        className="mr-2"
                      />
                      Text
                    </label>
                  </div>
                </div>

                {/* Type of Service */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Type of Service
                  </h4>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("serviceType", value)
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-metal-shed">
                        Residential Metal Shed
                      </SelectItem>
                      <SelectItem value="prefab-steel-garage">
                        Prefab Steel Garage
                      </SelectItem>
                      <SelectItem value="agricultural-pole-barn">
                        Agricultural Pole Barn
                      </SelectItem>
                      <SelectItem value="commercial-steel-building">
                        Commercial Steel Building
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Desired Dimensions */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Desired Dimensions
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Length"
                      value={formData.length}
                      onChange={(e) =>
                        handleInputChange("length", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Width"
                      value={formData.width}
                      onChange={(e) =>
                        handleInputChange("width", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Height"
                      value={formData.height}
                      onChange={(e) =>
                        handleInputChange("height", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Intended Use */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Intended Use
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Storage"
                      value={formData.intendedUse}
                      onChange={(e) =>
                        handleInputChange("intendedUse", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Workshop"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Other: Garage"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent mt-4"
                  />
                </div>

                {/* Siding Material */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Siding Material
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Galvanized"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Painted"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Window Type */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Window Type
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Number of Windows"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Window Size"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Door Type */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Door Type
                  </h4>
                  <input
                    type="text"
                    placeholder="Standard"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  />
                </div>

                {/* Shelving and Work Bench */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Shelving
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        No
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Work Bench
                    </h4>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Yes
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        No
                      </label>
                    </div>
                  </div>
                </div>

                {/* How Did You Hear About Us */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    How Did You Hear About Us?
                  </h4>
                  <textarea
                    rows={4}
                    placeholder="Tell us how you found out about InstaShed"
                    value={formData.howDidYouHear}
                    onChange={(e) =>
                      handleInputChange("howDidYouHear", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors duration-200 py-4 text-lg font-semibold"
                >
                  Submit Your Form
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
