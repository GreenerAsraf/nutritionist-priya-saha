import { services } from "@/lib/constants";
import ServiceIcon from "./ServiceIcon";
import Reveal from "@/components/ui/Reveal";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              সেবাসমূহ
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
              আপনার জন্য বিজ্ঞানসম্মত পুষ্টি পরামর্শ
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.14}>
            <p className="mt-4 text-lg text-muted">
              শারীরিক সুস্থতা ও বিভিন্ন জটিলতার কথা মাথায় রেখে আপনার জন্য
              ব্যক্তিগত ডায়েট ও পুষ্টি পরামর্শ প্রদান করা হয়।
            </p>
          </Reveal>
        </div>

        <ServiceCardsGrid services={services} />
      </div>
    </section>
  );
}
