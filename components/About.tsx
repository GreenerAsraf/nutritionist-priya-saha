import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";
import AboutImage from "@/components/AboutImage";

const highlights = [
  "ব্যক্তিগত স্বাস্থ্য ইতিহাস বিশ্লেষণ করে বিজ্ঞানসম্মত ডায়েট পরিকল্পনা",
  "স্থানীয় খাদ্যাভ্যাস ও সংস্কৃতি মাথায় রেখে পরামর্শ",
  "নিয়মিত ফলো-আপের মাধ্যমে অগ্রগতি পর্যবেক্ষণ",
  "দীর্ঘমেয়াদি সুস্থ অভ্যাস গড়ে তোলার উপর মনোযোগ",
];

export default function About() {
  return (
    <section id="about" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image — animated from left */}
          <Reveal variant="fadeLeft" amount={0.15}>
            <AboutImage />
          </Reveal>

          {/* Text — animated from right */}
          <div className="space-y-6">
            <Reveal variant="fadeRight" delay={0.05}>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
                আমার সম্পর্কে
              </p>
            </Reveal>
            <Reveal variant="fadeRight" delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
                আপনার সুস্থতাই আমার লক্ষ্য
              </h2>
            </Reveal>
            <Reveal variant="fadeRight" delay={0.15}>
              <p className="text-lg leading-relaxed text-muted">
                চট্টগ্রাম বিশ্ববিদ্যালয় থেকে খাদ্য ও পুষ্টিতে বিএসসি এবং ঢাকা বিশ্ববিদ্যালয়
                থেকে এমএসসি সম্পন্ন করেছি। ক্লিনিক্যাল পুষ্টিবিদ হিসেবে প্রশিক্ষণ এবং
                ডায়াবেটিক ও কিডনি ডায়েটে বিশেষ প্রশিক্ষণ রয়েছে।
              </p>
            </Reveal>
            <Reveal variant="fadeRight" delay={0.2}>
              <p className="leading-relaxed text-muted">
                বিভিন্ন জটিল রোগ থেকে দূরে থাকতে আমাদের অবশ্যই ডায়েট এবং পুষ্টি বিষয়ে
                সচেতন থাকতে হবে — আর সেটি হতে হবে সঠিক ও বিজ্ঞানসম্মত।
              </p>
            </Reveal>

            <StaggerReveal className="space-y-3 pt-2">
              {highlights.map((item) => (
                <StaggerItem key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary-light"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
