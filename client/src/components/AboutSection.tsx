export default function AboutSection() {
  const stats = [
    { number: "20", label: "Years Experience", suffix: "+" },
    { number: "5000", label: "Projects Completed", suffix: "+" },
    { number: "98", label: "Customer Satisfaction", suffix: "%" },
    { number: "24", label: "Expert Team Members", suffix: "" }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over two decades of experience in the metal building industry, INSTA-SHED has become a trusted name in providing premium storage solutions across the region.
              </p>
              <p>
                Our team of skilled craftsmen and engineers work together to deliver buildings that not only meet your immediate needs but also stand the test of time. We use only the highest quality materials and proven construction techniques.
              </p>
              <p>
                From residential storage sheds to large commercial facilities, we've successfully completed thousands of projects, each one tailored to our client's specific requirements and built to exceed expectations.
              </p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-brand-orange mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}