import EventCategories from "@/components/modules/Home/EventCategories";
import FeaturedEvents from "@/components/modules/Home/FeaturedEvents";
import FinalCTA from "@/components/modules/Home/FinalCTA";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import Testimonials from "@/components/modules/Home/Testimonials";
import TopHosts from "@/components/modules/Home/TopHosts";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventCategories />
      <HowItWorks />
      <FeaturedEvents />
      <TopHosts />
      <Testimonials />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}
