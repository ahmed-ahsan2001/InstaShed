import { Button } from "@/components/ui/button";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "5 Benefits of Metal Storage Buildings",
      excerpt: "Discover why metal storage buildings are the smart choice for long-term durability and cost-effectiveness.",
      date: "March 15, 2024",
      category: "Storage Tips",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f4f7'/%3E%3Cg%3E%3Crect x='50' y='80' width='120' height='90' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='50,80 110,50 170,80' fill='%238A8A8A'/%3E%3Crect x='230' y='90' width='120' height='80' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='230,90 290,65 350,90' fill='%237A7A7A'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "How to Choose the Right Shed Size",
      excerpt: "A comprehensive guide to determining the perfect shed size for your storage needs and available space.",
      date: "March 10, 2024", 
      category: "Planning Guide",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f4f7'/%3E%3Cg%3E%3Crect x='80' y='70' width='80' height='70' fill='%23FF6B35' stroke='%23464646' stroke-width='2'/%3E%3Crect x='170' y='70' width='100' height='70' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Crect x='280' y='70' width='60' height='70' fill='%23A0A4B0' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='80,70 120,50 160,70' fill='%23E55A2B'/%3E%3Cpolygon points='170,70 220,50 270,70' fill='%238A8A8A'/%3E%3Cpolygon points='280,70 310,55 340,70' fill='%237A7A7A'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    },
    {
      title: "Maintenance Tips for Metal Buildings",
      excerpt: "Keep your metal building in pristine condition with these essential maintenance practices and schedules.",
      date: "March 5, 2024",
      category: "Maintenance",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f4f7'/%3E%3Cg%3E%3Crect x='150' y='80' width='100' height='80' fill='%23B8BCC8' stroke='%23464646' stroke-width='2'/%3E%3Cpolygon points='150,80 200,55 250,80' fill='%238A8A8A'/%3E%3Crect x='180' y='110' width='15' height='40' fill='%23FF6B35'/%3E%3Ccircle cx='120' cy='140' r='8' fill='%23666'/%3E%3Crect x='105' y='135' width='30' height='6' fill='%23333'/%3E%3Ccircle cx='280' cy='130' r='10' fill='%23FF6B35'/%3E%3Cline x1='270' y1='120' x2='290' y2='140' stroke='%23333' stroke-width='3'/%3E%3Cpath d='M0 200 Q200 180 400 200 L400 250 L0 250 Z' fill='%2398B8A3'/%3E%3C/g%3E%3C/svg%3E"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Blog & Resource Center
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with expert tips, industry insights, and helpful guides for your metal building projects.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-brand-orange font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button variant="outline" className="text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-200">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-orange-hover transition-colors duration-200">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}