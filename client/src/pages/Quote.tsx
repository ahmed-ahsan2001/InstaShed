import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage1 from "../../../RequestaQuote/reqaquoteimage1.png";
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
            className="text-6xl sm:text-7xl font-bold text-center mb-8"
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

      {/* Header Section with Content and Image */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-6xl font-bold text-gray-900 mb-6">
                Request a<br />
                Quote
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
            </div>

            {/* Right Column - Hero Image */}
            <div>
              <img
                src={heroImage1}
                alt="Metal Building with People"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Form Heading */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 pl-4 border-l-4 border-orange-500 py-3 pr-8 inline-block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0) 100%)",
              }}
            >
              Fill the Form
            </h3>
          </div>

          {/* Form Section - Full Width */}
          <div className="p-8 rounded-lg">
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Personal Information
                  </h4>
                  <div className="space-y-4">
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
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Preferred Contact Method
                  </h4>
                  <div className="flex space-x-8">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        onChange={(e) =>
                          handleInputChange("preferredContact", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        onChange={(e) =>
                          handleInputChange("preferredContact", e.target.value)
                        }
                        className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Call</span>
                    </label>
                  </div>
                </div>

                {/* Type of Service */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Type of Structure
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
              </div>

              <div className="space-y-6">
                {/* Intended Use */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Intended Use
                  </h4>
                  <div className="space-y-4">
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
                    <input
                      type="text"
                      placeholder="Other: Garage"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    />
                  </div>
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
                    <div className="space-y-3">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="shelving"
                          value="yes"
                          onChange={(e) => handleInputChange("shelving", e.target.value)}
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500" 
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="shelving"
                          value="no"
                          onChange={(e) => handleInputChange("shelving", e.target.value)}
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500" 
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Work Bench
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="workbench"
                          value="yes"
                          onChange={(e) => handleInputChange("workbench", e.target.value)}
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500" 
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="workbench"
                          value="no"
                          onChange={(e) => handleInputChange("workbench", e.target.value)}
                          className="mr-3 w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500" 
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
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
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
