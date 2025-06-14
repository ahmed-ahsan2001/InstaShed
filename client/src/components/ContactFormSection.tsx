import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    zipCode: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        zipCode: "",
        serviceType: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#00373A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Business Info */}
          <div className="text-white">
            <h3 className="text-2xl font-bold text-brand-orange mb-6">Business Hours</h3>
            <div className="space-y-3 mb-8">
              <p className="text-lg">Mon – Fri: 9 AM – 5 PM</p>
              <p className="text-lg">Saturday: 9 AM – 12 PM</p>
              <p className="text-lg">Sunday: Closed</p>
            </div>

            <h3 className="text-2xl font-bold text-brand-orange mb-6">InstaShed HQ</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                <span className="text-lg">info@instashed.us</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                <span className="text-lg">107 West Main Street #681 Terre Hill, PA 17581 USA</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-8">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                <span className="text-white text-lg">f</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                <span className="text-white text-lg">t</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                <span className="text-white text-lg">in</span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-6">Fill out the form and we'll call you back</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name (Required)"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                    className="bg-transparent border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email (Required)"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-transparent border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Zip Code / Area (Required)"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    required
                    className="bg-transparent border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange"
                  />
                </div>
                <div>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="bg-transparent border-gray-500 border-opacity-50 text-white focus:border-brand-orange">
                      <SelectValue placeholder="Type of Service You're Interested In" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential-sheds">Residential Sheds</SelectItem>
                      <SelectItem value="agricultural-barns">Agricultural Barns</SelectItem>
                      <SelectItem value="prefab-garages">Prefab Garages</SelectItem>
                      <SelectItem value="commercial-buildings">Commercial Buildings</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="bg-transparent border-gray-500 border-opacity-50 text-white placeholder:text-gray-300 focus:border-brand-orange resize-none"
                />
                <div className="text-right text-sm text-gray-300 mt-1">
                  0/500
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {isSubmitting ? "Scheduling..." : "Schedule My Call"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}