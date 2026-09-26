import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { siteConfig } from "@/lib/constants";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyasaha.com"),
  title: {
    default: "ডায়েটিশিয়ান এন্ড পুষ্টিবিদ প্রিয়া সাহা | Dietitian Priya Saha",
    template: "%s | ডায়েটিশিয়ান এন্ড পুষ্টিবিদ প্রিয়া সাহা",
  },
  description: siteConfig.description,
  keywords: [
    "পুষ্টিবিদ প্রিয়া সাহা",
    "ডায়েটিশিয়ান চট্টগ্রাম",
    "Priya Saha Dietitian",
    "clinical nutritionist chittagong",
    "diet plan bangladesh",
    "diabetic diet",
    "weight loss diet chart",
    "PCOS diet",
    "ম্যাক্স হসপিটাল পুষ্টিবিদ",
    "child nutrition",
    "renal diet",
  ],
  authors: [{ name: "Priya Saha" }],
  creator: "Priya Saha",
  publisher: "Priya Saha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ডায়েটিশিয়ান এন্ড পুষ্টিবিদ প্রিয়া সাহা — আপনার সুস্বাস্থ্য-ই আপনার সম্পদ",
    description: siteConfig.description,
    url: "https://priyasaha.com",
    siteName: "পুষ্টিবিদ প্রিয়া সাহা",
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: "/image.png",
        width: 1376,
        height: 768,
        alt: "ডায়েটিশিয়ান ও পুষ্টিবিদ প্রিয়া সাহা",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ডায়েটিশিয়ান এন্ড পুষ্টিবিদ প্রিয়া সাহা",
    description: siteConfig.description,
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Physician", "Person"],
  name: "প্রিয়া সাহা (Priya Saha)",
  jobTitle: "Certified Dietitian & Clinical Nutritionist",
  description: siteConfig.description,
  url: "https://priyasaha.com",
  telephone: [siteConfig.phone, siteConfig.phone2],
  sameAs: [siteConfig.facebook],
  address: {
    "@type": "PostalAddress",
    streetAddress: "৩৫/৩৬, মেহেদীবাগ রোড",
    addressLocality: "Chittagong",
    postalCode: "4000",
    addressCountry: "BD",
  },
  medicalSpecialty: ["DietNutrition", "PublicHealth"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
