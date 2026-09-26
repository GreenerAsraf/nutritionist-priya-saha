import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NutritionCarousel from "@/components/NutritionCarousel";
import Videos from "@/components/Videos";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import MobileActionDock from "@/components/MobileActionDock";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NutritionCarousel />
        <Videos />
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <MobileActionDock />
    </>
  );
}
