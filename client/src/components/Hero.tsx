import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleGetQuote = () => {
    console.log("Get a Free Quote clicked");
    // Future implementation: navigate to quote form or open modal
  };

  const handleExploreStructures = () => {
    console.log("Explore Structures clicked");
    // Future implementation: navigate to gallery or structures page
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sheds Built To Last.<br />
              <span className="text-white">Designed For You.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Premium Metal Sheds, Prefab Steel Garages, And Outdoor Storage Buildings Engineered For Long-Term Durability, Functionality, And Peace Of Mind.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetQuote}
                className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-orange-hover transform hover:scale-105 transition-all duration-200 shadow-lg h-auto"
              >
                Get a Free Quote
              </Button>
              <Button
                onClick={handleExploreStructures}
                variant="outline"
                className="bg-gray-800 bg-opacity-80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-100 transition-all duration-200 border border-gray-600 h-auto"
              >
                Explore Structures
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <div className="w-2 h-2 bg-brand-orange rounded-full" />
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full" />
        <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full" />
      </div>
    </section>
  );
}
