import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — info */}
          <div className="space-y-6">
            <Reveal variant="fadeUp">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
                অ্যাপয়েন্টমেন্ট
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.08}>
              <h2 className="font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
                পরামর্শ নিতে আজই যোগাযোগ করুন
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.14}>
              <p className="text-lg leading-relaxed text-muted">
                সরাসরি চেম্বারে এসে বা অনলাইনে ফর্ম পূরণ করে অ্যাপয়েন্টমেন্ট নিন।
                আপনার সমস্যার কথা জানান, আমরা দ্রুত যোগাযোগ করব।
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">ফোন (ম্যাক্স হসপিটাল)</p>
                    <a
                      href={`tel:01713998166`}
                      className="font-medium text-primary-dark hover:text-primary transition-colors"
                    >
                      01713-998166, 01571-159059
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">ফোন (রাঙ্গুনিয়া হাসপাতাল)</p>
                    <a
                      href={`tel:01835705031`}
                      className="font-medium text-primary-dark hover:text-primary transition-colors"
                    >
                      01835-705031, 01835-870304
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">চেম্বার</p>
                    <p className="font-medium text-primary-dark">
                      মেহেদীবাগ রোড, চট্টগ্রাম ও রাঙ্গুনিয়া, চট্টগ্রাম
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted">ফেইসবুক পেজ</p>
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary-dark hover:text-primary transition-colors"
                    >
                      পুষ্টিবিদ প্রিয়া সাহা
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal variant="fadeUp" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
