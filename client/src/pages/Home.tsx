import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesPreview from "@/components/FeaturesPreview";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesPreview />
    </div>
  );
}
