import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NutritionCarousel from "@/components/NutritionCarousel";
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
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileActionDock />
    </>
  );
}
