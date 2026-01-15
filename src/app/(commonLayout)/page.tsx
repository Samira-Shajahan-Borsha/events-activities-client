import HomeCategories from "@/components/modules/Home/HomeCategories"
import HeroSection from "@/components/modules/Home/HeroSection"
import { getAllEvents } from "@/services/event/eventManagement";
import HomeFeaturedEvents from "@/components/modules/Home/HomeFeaturedEvents";
import HomeHowItWorks from "@/components/modules/Home/HomeHowItWorks";
import HomeTopHosts from "@/components/modules/Home/HomeTopHosts";
import HomeTestimonials from "@/components/modules/Home/HomeTestimonials";
import HomeCTA from "@/components/modules/Home/HomeCTA";

const HomePage = async () => {
  const result = await getAllEvents('');
  return (
    <div className="px-6 md:px-0">
      <HeroSection />
      <HomeCategories />
      <HomeFeaturedEvents events={result.data} />
      <HomeHowItWorks />
      <HomeTopHosts />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  )
}

export default HomePage