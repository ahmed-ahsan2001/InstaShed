import { Button } from "@/components/ui/button";
import heroImage9 from "../../../Image 16.png";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "5 Benefits of Metal Storage Buildings",
      excerpt:
        "Discover why metal storage buildings are the smart choice for long-term durability and cost-effectiveness.",
      date: "March 15, 2024",
      category: "Storage Tips",
      image: heroImage9,
    },
    {
      title: "How to Choose the Right Shed Size",
      excerpt:
        "A comprehensive guide to determining the perfect shed size for your storage needs and available space.",
      date: "March 10, 2024",
      category: "Planning Guide",
      image: heroImage9,
    },
    {
      title: "Maintenance Tips for Metal Buildings",
      excerpt:
        "Keep your metal building in pristine condition with these essential maintenance practices and schedules.",
      date: "March 5, 2024",
      category: "Maintenance",
      image: heroImage9,
    },
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
            Stay informed with expert tips, industry insights, and helpful
            guides for your metal building projects.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
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
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button
                  variant="outline"
                  className="text-brand-orange border-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-200"
                >
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
