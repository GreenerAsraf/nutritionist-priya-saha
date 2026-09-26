import type { IconKey } from "@/lib/services-data";

export interface WhyConsultItem {
  id: string;
  serial: number;
  icon: IconKey;
  bn: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
}

export const whyConsultList: WhyConsultItem[] = [
  {
    id: "diabetic",
    serial: 1,
    icon: "heart",
    bn: {
      title: "ডায়াবেটিক রোগীর ডায়েট",
      description:
        "ডায়াবেটিস নিয়ন্ত্রণে রক্তের শর্করা বা গ্লুকোজের মাত্রা সঠিক রাখা অত্যন্ত গুরুত্বপূর্ণ। কোন খাবারগুলো রক্তে দ্রুত সুগার বাড়ায় এবং কোনগুলো ধীরগতিতে শক্তি জোগায়, তা সাধারণ মানুষের পক্ষে নিখুঁতভাবে নির্ধারণ করা কঠিন। আমি রোগীর শারীরিক অবস্থা, বয়স এবং ওষুধের মাত্রা অনুযায়ী একটি নির্দিষ্ট কার্বোহাইড্রেট ও গ্লাইসেমিক ইনডেক্স ভিত্তিক ডায়েট চার্ট তৈরি করি। এটি রক্তে শর্করার মাত্রা নিয়ন্ত্রণে রেখে রোগীর শরীরে শক্তির জোগান দেয় এবং ডায়াবেটিসের দীর্ঘমেয়াদি জটিলতা যেমন—কিডনি ও স্নায়ুর ক্ষতি প্রতিরোধে সাহায্য করে।",
    },
    en: {
      title: "Diabetic Patient Diet",
      description:
        "Maintaining optimal blood sugar and glucose levels is vital in diabetes management. It is challenging for most individuals to accurately identify which foods rapidly spike glucose and which provide sustained energy. I formulate a customised carbohydrate and glycaemic-index-based diet chart tailored to the patient's physical state, age, and medication. This keeps blood sugar strictly regulated, energises the body, and prevents severe long-term diabetic complications such as renal and nerve damage.",
    },
  },
  {
    id: "cancer",
    serial: 2,
    icon: "shield",
    bn: {
      title: "ক্যান্সার রোগীর ডায়েট",
      description:
        "ক্যান্সার এবং এর চিকিৎসাপদ্ধতি (যেমন কেমোথেরাপি বা রেডিওথেরাপি) রোগীর শরীরের রোগ প্রতিরোধ ক্ষমতা ও পুষ্টির চাহিদা মারাত্মকভাবে ব্যাহত করে। এ সময় সঠিক পুষ্টি নিশ্চিত করা এবং ওজন ধরে রাখা রোগীর সুস্থতার লড়াইয়ে বড় ভূমিকা রাখে। আমি রোগীর হজমশক্তি, রুচি ও চিকিৎসার ধরণ বিবেচনা করে সহজপাচ্য, পুষ্টিকর এবং রোগপ্রতিরোধ ক্ষমতা বৃদ্ধিকারী খাবার নির্বাচন করি। এটি থেরাপির পার্শ্বপ্রতিক্রিয়া সামলাতে এবং দ্রুত শারীরিক শক্তি ফিরে পেতে সাহায্য করে।",
    },
    en: {
      title: "Cancer Patient Diet",
      description:
        "Cancer and treatments such as chemotherapy or radiotherapy severely impair immune function and nutritional reserves. Ensuring precise nutrition and preventing muscle wasting are critical to patient survival and recovery. I carefully design easily digestible, nutrient-dense, and immunity-enhancing meal plans considering digestive capacity, appetite, and treatment stages, helping patients overcome side effects and regain physical vitality.",
    },
  },
  {
    id: "weight",
    serial: 3,
    icon: "leaf",
    bn: {
      title: "ওজন বাড়ানো/কমানো/আদর্শ ডায়েট",
      description:
        "ওজন কমানো বা বাড়ানোর প্রক্রিয়াটি কেবল না খেয়ে থাকা বা অতিরিক্ত খাবার খাওয়ার বিষয় নয়, বরং সঠিক ক্যালোরি ঘাটতি বা উদ্বৃত্ত বজায় রাখা। ভুল ডায়েটের কারণে মেদ না কমে শরীরের পেশি ও প্রয়োজনীয় পুষ্টির ঘাটতি দেখা দিতে পারে। আমি শরীরের মেটাবলিজম, উচ্চতা, বয়স এবং লাইফস্টাইল মেপে একটি বিজ্ঞানসম্মত ও টেকসই ডায়েট চার্ট দিই। এর ফলে স্বাস্থ্যের ক্ষতি না করে স্বাস্থ্যকর উপায়ে আদর্শ ওজন অর্জন করা সম্ভব হয়।",
    },
    en: {
      title: "Weight Gain / Loss / Ideal Weight Diet",
      description:
        "Healthy weight management is not about starvation or overeating, but maintaining a precise, healthy caloric deficit or surplus. Inappropriate fad diets often cause muscle loss and severe malnutrition instead of fat loss. I evaluate metabolic rate, height, age, and daily lifestyle to provide a scientific, sustainable diet plan, enabling you to reach your target weight safely and permanently.",
    },
  },
  {
    id: "kidney",
    serial: 4,
    icon: "activity",
    bn: {
      title: "কিডনী রোগীদের জন্য লো-প্রোটিন ডায়েট",
      description:
        "কিডনি যখন সঠিকভাবে রক্ত ফিল্টার করতে পারে না, তখন প্রোটিন ভেঙে তৈরি বর্জ্য পদার্থ রক্তে জমতে থাকে। এ অবস্থায় প্রোটিন, সোডিয়াম, পটাশিয়াম এবং ফসফরাস নিয়ন্ত্রণের মাধ্যমে কিডনির ওপর থেকে অতিরিক্ত চাপ কমানো দরকার হয়। আমি প্রতিটি রোগীর রেনাল ফাংশন টেস্ট (যেমন ক্রিয়েটিনিন ও জিএফআর) দেখে নিরাপদ মাত্রার লো-প্রোটিন ডায়েট নির্ধারণ করি। এটি কিডনির কার্যকারিতা দীর্ঘস্থায়ী করতে এবং ডায়ালাইসিসের প্রয়োজনীয়তা পেছাতে সাহায্য করে।",
    },
    en: {
      title: "Low-Protein Diet for Kidney Patients",
      description:
        "When kidneys lose filtering capacity, toxic protein metabolic waste accumulates in the bloodstream. Controlling dietary protein, sodium, potassium, and phosphorus reduces strain on the kidneys. Based on renal function parameters (Creatinine and eGFR), I design a medically safe low-protein meal regimen that protects remaining nephrons and helps delay dialysis.",
    },
  },
  {
    id: "heart-fatty-liver",
    serial: 5,
    icon: "heart",
    bn: {
      title: "লো-ফ্যাট ডায়েট হৃদরোগ, ফ্যাটি লিভার",
      description:
        "রক্তে কোলেস্টেরল বৃদ্ধি এবং লিভারে চর্বি জমে যাওয়ার মূল কারণ অস্বাস্থ্যকর খাদ্যাভ্যাস ও অতিরিক্ত চর্বিযুক্ত খাবার। সঠিক ডায়েট ছাড়া এই চর্বি কমানো এবং হৃৎপিণ্ডকে সুরক্ষিত রাখা অসম্ভব। আমি স্যাচুরেটেড ফ্যাট ও ট্রান্স ফ্যাট বাদ দিয়ে উপকারী ওমেগা-৩ ফ্যাটি অ্যাসিড সমৃদ্ধ খাবার এবং ফাইবারযুক্ত ডায়েট চার্ট দিই। এটি লিভারের কোষ মেরামত করতে এবং হৃৎপিণ্ডের ব্লক বা হৃদরোগের ঝুঁকি কমাতে অত্যন্ত কার্যকর ভূমিকা পালন করে।",
    },
    en: {
      title: "Low-Fat Diet for Heart Disease & Fatty Liver",
      description:
        "High cholesterol and fatty liver disease stem primarily from poor dietary choices and saturated fats. Reversing hepatic lipid buildup and protecting cardiovascular health requires specialized nutrition. I formulate low-saturated-fat, trans-fat-free meal plans rich in omega-3 fatty acids and soluble fibre, regenerating liver tissue and lowering the risk of coronary arterial blockage.",
    },
  },
  {
    id: "weakness",
    serial: 6,
    icon: "zap",
    bn: {
      title: "শারীরিক দুর্বল রোগীদের জন্য ব্যালেন্স ডায়েট",
      description:
        "দীর্ঘমেয়াদি রোগ বা বার্ধক্যের কারণে শরীরে শক্তির ঘাটতি ও তীব্র দুর্বলতা দেখা দেয়। সাধারণ খাবারে শরীরের প্রয়োজনীয় ভিটামিন ও মিনারেলের চাহিদা সবসময় পূরণ হয় না। আমি রোগীর শক্তির চাহিদা বিশ্লেষণ করে সহজে হজম হয় এমন সুষম ও পুষ্টিঘন খাবারের তালিকা তৈরি করি। এটি শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়িয়ে দ্রুত শক্তি ফিরিয়ে আনতে এবং দুর্বলতা দূর করতে সাহায্য করে।",
    },
    en: {
      title: "Balanced Diet for Weak & Recovering Patients",
      description:
        "Chronic illnesses and advanced age often cause severe fatigue and micronutrient depletion. Everyday meals frequently fall short of supplying therapeutic vitamin and mineral quotas. I evaluate metabolic demands to create easily digestible, energy-dense balanced diets that restore immune strength and revitalize energy levels rapidly.",
    },
  },
  {
    id: "ng-feeding",
    serial: 7,
    icon: "droplets",
    bn: {
      title: "NG ফিডিং (মুমূর্ষ রোগী)",
      description:
        "যাঁরা মুখ দিয়ে স্বাভাবিক খাবার খেতে পারেন না, তাঁদের নাকের নল বা এনজি টিউবের মাধ্যমে তরল খাবার দিতে হয়। এই তরল খাবারের পুষ্টিগুণ সঠিক না হলে রোগীর অবস্থার অবনতি ঘটতে পারে। আমি রোগীর শারীরিক চাহিদা অনুযায়ী ক্যালোরি, প্রোটিন ও ভিটামিনসমৃদ্ধ বিশেষ তরল খাদ্যের অনুপাত ও রেসিপি প্রস্তুত করি। এটি মুমূর্ষু রোগীর পুষ্টির অভাব রোধ করে এবং দ্রুত সেরে উঠতে সাহায্য করে।",
    },
    en: {
      title: "NG Tube Feeding for Critical Patients",
      description:
        "Patients unable to ingest orally require nasogastric enteral tube nutrition. Any imbalance in liquid formulations can worsen clinical outcomes. I formulate sterile, calibrated liquid nutritional recipes ensuring exact macronutrient and micronutrient balance to prevent malnutrition and expedite recovery in critically ill patients.",
    },
  },
  {
    id: "arthritis-exercise",
    serial: 8,
    icon: "activity",
    bn: {
      title: "বাত-ব্যাথা ডায়েট (ব্যায়াম)",
      description:
        "বাত ও হাড়ের ব্যথায় প্রদাহ বা ইনফ্লেমেশন একটি বড় সমস্যা, যা কিছু নির্দিষ্ট খাবারের কারণে আরও বেড়ে যেতে পারে। সঠিক ডায়েট ও ব্যায়ামের সমন্বয়ে ইউরিক এসিড এবং প্রদাহ সৃষ্টিকারী উপাদান নিয়ন্ত্রণ করা যায়। আমি অ্যান্টি-ইনফ্লেমেটরি খাবার, ক্যালসিয়াম ও ভিটামিন ডি সমৃদ্ধ ডায়েট চার্ট তৈরি করি। এটি জয়েন্টের ব্যথা ও ফোলাভাব কমাতে এবং চলাফেরাকে সহজ করতে সাহায্য করে।",
    },
    en: {
      title: "Arthritis & Joint Pain Diet (With Exercise)",
      description:
        "Systemic inflammation is the primary driver of arthritic pain, frequently aggravated by pro-inflammatory foods. Combining targeted anti-inflammatory nutrition with mobility exercise manages uric acid and joint stress. I provide calcium- and vitamin-D-enriched meal plans that alleviate joint swelling, reduce pain, and restore joint flexibility.",
    },
  },
  {
    id: "constipation-gastric",
    serial: 9,
    icon: "utensils",
    bn: {
      title: "কোষ্ঠকাঠিন্য, আলসার ও গ্যাস্ট্রিক ডায়েট",
      description:
        "গ্যাস্ট্রিক, আলসার বা কোষ্ঠকাঠিন্যের সমস্যা মূলত অনিয়মিত খাদ্যাভ্যাস ও ভুল খাবার পছন্দের কারণে হয়। কোন খাবার এসিডিটি বাড়ায় এবং কোনগুলো পেটের স্বাস্থ্য ভালো রাখে তা জানা জরুরি। আমি ফাইবারযুক্ত খাবার, পর্যাপ্ত তরল এবং সহজে হজমযোগ্য মৃদু খাবারের একটি সুনির্দিষ্ট তালিকা তৈরি করি। এটি পরিপাকতন্ত্রের কার্যক্ষমতা উন্নত করে এবং পেটের অস্বস্তি থেকে স্থায়ী মুক্তি দেয়।",
    },
    en: {
      title: "Constipation, Ulcer & Gastritis Diet",
      description:
        "Gastric hyperacidity, peptic ulcers, and chronic constipation arise predominantly from irregular eating habits and irritant foods. I construct soothing, high-fibre, gut-healing meal plans with adequate hydration guidelines that heal mucous linings, optimize bowel motility, and deliver permanent relief from digestive distress.",
    },
  },
  {
    id: "infertility",
    serial: 10,
    icon: "users",
    bn: {
      title: "ইনফার্টিলিটি (বন্ধ্যাত্ব) রোগীর ডায়েট",
      description:
        "হরমোনের ভারসাম্যহীনতা এবং পুষ্টির ঘাটতি পুরুষ ও নারী উভয়ের ক্ষেত্রেই উর্বরতা বা ফার্টিলিটিতে নেতিবাচক প্রভাব ফেলতে পারে। বিশেষ কিছু অ্যান্টিঅক্সিডেন্ট ও পুষ্টি উপাদান প্রজনন স্বাস্থ্য উন্নত করতে প্রমাণিত ভূমিকা রাখে। আমি হরমোন নিয়ন্ত্রণে সাহায্যকারী এবং ডিম্বাণু ও শুক্রাণুর গুণগত মান বৃদ্ধিকারী সুনির্দিষ্ট ডায়েট চার্ট প্রদান করি। এটি প্রজনন অঙ্গের কার্যকারিতা বাড়িয়ে গর্ভধারণের সম্ভাবনা বৃদ্ধিতে সহায়তা করে।",
    },
    en: {
      title: "Diet for Infertility & Reproductive Health",
      description:
        "Hormonal disruptions and cellular oxidative stress adversely affect male and female fertility parameters. Specific antioxidants, zinc, and essential fatty acids play evidence-based roles in optimizing reproductive health. I prescribe clinical diets designed to balance endocrine hormones, boost egg and sperm quality, and enhance conception probability.",
    },
  },
  {
    id: "ramadan",
    serial: 11,
    icon: "sun",
    bn: {
      title: "রোজা থাকাকালীন ডায়েট",
      description:
        "রোজায় দীর্ঘ সময় না খেয়ে থাকার ফলে শরীরে পানির ও শক্তির ভারসাম্য নষ্ট হতে পারে, যা গ্যাস্ট্রিক বা দুর্বলতার কারণ হয়। সাহরি ও ইফতারে সঠিক খাবার নির্বাচন না করলে ওজন বৃদ্ধি বা রক্তচাপের সমস্যা দেখা দিতে পারে। আমি সারাদিনের শক্তির চাহিদা পূরণের জন্য হাইড্রেটিং খাবার, কমপ্লেক্স কার্ব ও প্রোটিনসমৃদ্ধ ডায়েট প্ল্যান তৈরি করি। এটি রোজা রেখেও শরীর চাঙ্গা ও সুস্থ রাখতে সাহায্য করে।",
    },
    en: {
      title: "Healthy Diet During Ramadan Fasting",
      description:
        "Extended intermittent fasting during Ramadan can disrupt hydration and glucose homeostasis if suhoor and iftar are improperly managed. Consuming deep-fried foods often leads to weight gain and hyperacidity. I design hydrating, complex-carb and high-protein fasting diets that sustain steady energy levels and preserve digestive health throughout the holy month.",
    },
  },
  {
    id: "skin-health",
    serial: 12,
    icon: "sparkles" as any,
    bn: {
      title: "ত্বকের সমস্যার ডায়েট",
      description:
        "ত্বকের বিভিন্ন সমস্যা যেমন ব্রণ, বলিরেখা বা একজিমা অনেক সময় অভ্যন্তরীণ পুষ্টির অভাব ও পেটের গণ্ডগোলের কারণে দেখা দেয়। প্রসাধন ব্যবহার করে সাময়িক সমাধান মিললেও ভেতর থেকে ত্বক সুস্থ রাখতে খাদ্যাভ্যাস বদলানো দরকার। আমি অ্যান্টিঅক্সিডেন্ট, ভিটামিন সি এবং স্বাস্থ্যকর ফ্যাটযুক্ত ডায়েট চার্ট দিই। এটি কোলাজেন উৎপাদনে সাহায্য করে এবং ত্বককে ভেতর থেকে উজ্জ্বল ও স্বাস্থ্যোজ্জ্বল করে তোলে।",
    },
    en: {
      title: "Nutritional Diet for Skin Health & Acne",
      description:
        "Dermatological conditions like persistent acne, eczema, and premature aging stem from systemic inflammation, gut dysbiosis, and micronutrient deficits. While cosmetics offer topical masking, true cellular rejuvenation starts from within. I formulate antioxidant- and vitamin-C-rich dietary protocols that stimulate collagen synthesis and clear skin naturally.",
    },
  },
  {
    id: "pcos",
    serial: 13,
    icon: "users",
    bn: {
      title: "PCOS DIET",
      description:
        "পলিসিস্টিক ওভারিয়ান সিন্ড্রোম বা PCOS মূলত হরমোনজনিত সমস্যা, যা ইনসুলিন রেজিস্ট্যান্সের সাথে গভীরভাবে জড়িত। এই সমস্যায় ওজন নিয়ন্ত্রণ এবং কার্বোহাইড্রেট ম্যানেজমেন্ট করা অত্যন্ত জরুরি। আমি কম গ্লাইসেমিক ইনডেক্সযুক্ত খাবার ও হরমোন ব্যালেন্সিং ডায়েট চার্ট তৈরি করি। এটি ইনসুলিন লেভেল নিয়ন্ত্রণে রেখে মাসিক নিয়মিত করতে এবং ওজন কমাতে সাহায্য করে।",
    },
    en: {
      title: "PCOS & Hormonal Balance Diet",
      description:
        "Polycystic Ovary Syndrome (PCOS) is an endocrine disorder tightly linked with insulin resistance and hyperandrogenism. Controlling carbohydrate quality and insulin response is essential. I prescribe low-GI anti-inflammatory diets that regulate insulin sensitivity, normalize menstrual cycles, and promote healthy weight reduction.",
    },
  },
  {
    id: "icu",
    serial: 14,
    icon: "activity",
    bn: {
      title: "ICU DIET",
      description:
        "আইসিইউতে চিকিৎসাধীন রোগীদের মেটাবলিক চাহিদা অত্যন্ত জটিল এবং তাঁদের শরীরের টিস্যু দ্রুত ভেঙে যায়। এ সময় রোগীর মেটাবলিজম অনুযায়ী নিখুঁত পুষ্টি সরবরাহ না করলে অঙ্গহানির ঝুঁকি বেড়ে যায়। আমি চিকিৎসকের সাথে পরামর্শ করে বিশেষায়িত এন্টারাল বা প্যারেন্টারাল পুষ্টির মাত্রা নির্ধারণ করি। এটি রোগীর শরীরের রোগ প্রতিরোধ ক্ষমতা টিকিয়ে রাখতে এবং দ্রুত আরোগ্যে সহায়তা করে।",
    },
    en: {
      title: "ICU & Intensive Care Critical Diet",
      description:
        "Patients in critical care face hypercatabolic stress and rapid nitrogen depletion. Precision nutrition delivery matching real-time hemodynamic stability is crucial to avoid multiple organ dysfunction. In coordination with attending intensivists, I calibrate enteral and parenteral feeding formulas to sustain immunity and accelerate recovery.",
    },
  },
  {
    id: "paralysis-stroke",
    serial: 15,
    icon: "brain",
    bn: {
      title: "প্যারালাইসিস, স্ট্রোক রোগীর ডায়েট",
      description:
        "স্ট্রোক বা প্যারালাইসিসের পর রোগীর চলাফেরা বন্ধ থাকে এবং গিলতেও সমস্যা হতে পারে, ফলে পেশি ক্ষয় ও পুষ্টিহীনতা দেখা দেয়। এই রোগীদের জন্য ফাইবার, প্রোটিন ও হার্ট-হেলদি ফ্যাট অত্যন্ত প্রয়োজন। আমি রোগীর গিলবার ক্ষমতার ওপর ভিত্তি করে নরম বা তরল কিন্তু পুষ্টিকর ডায়েট চার্ট দিই। এটি শরীরের পেশি পুনর্গঠনে এবং দ্বিতীয়বার স্ট্রোকের ঝুঁকি কমাতে সাহায্য করে।",
    },
    en: {
      title: "Paralysis & Post-Stroke Recovery Diet",
      description:
        "Post-stroke patients frequently experience immobility, muscle wasting, and dysphagia (swallowing difficulties). Delivering adequate lean protein, neuroprotective antioxidants, and cardiovascular-friendly fats is critical. I structure texture-modified, nutrient-dense diets that rebuild muscle tone and prevent recurrent cerebrovascular episodes.",
    },
  },
  {
    id: "school-children",
    serial: 16,
    icon: "baby",
    bn: {
      title: "স্কুলগামী ছেলে-মেয়েদের বিশেষ ডায়েট",
      description:
        "growing age বা বেড়ে ওঠার এই সময়ে শিশুদের শারীরিক ও মানসিক বিকাশ দ্রুত ঘটে, যার জন্য পুষ্টিকর খাবারের বিকল্প নেই। জাংক ফুডের আসক্তি এবং পুষ্টির অভাব তাদের মেধা ও মনোযোগ কমিয়ে দিতে পারে। আমি মস্তিষ্কের বিকাশ এবং শক্তি জোগানোর জন্য আয়রন, ক্যালসিয়াম ও প্রোটিনসমৃদ্ধ আকর্ষণীয় ডায়েট প্ল্যান তৈরি করি। এটি তাদের পড়ালেখায় মনোযোগ বাড়াতে এবং রোগ প্রতিরোধ ক্ষমতা শক্তিশালী করতে সাহায্য করে।",
    },
    en: {
      title: "Nutrition for School-Going Children & Teens",
      description:
        "The growing adolescent years require concentrated micronutrients for cognitive sharpness and skeletal growth. Junk food addiction and nutritional gaps impair academic performance and immunity. I develop appetizing, iron-, calcium-, and protein-packed meal plans that enhance academic concentration and foster robust development.",
    },
  },
  {
    id: "sports-gym",
    serial: 17,
    icon: "zap",
    bn: {
      title: "জীম, স্পোর্টস ডায়েট",
      description:
        "জিম বা খেলাধুলার সাথে যুক্ত ব্যক্তিদের সাধারণ মানুষের চেয়ে অনেক বেশি ক্যালোরি ও প্রোটিনের প্রয়োজন হয়। সঠিক ডায়েট ছাড়া মাসেল বিল্ড বা এনার্জি লেভেল ধরে রাখা সম্ভব নয়। আমি ওয়ার্কআউটের তীব্রতা ও লক্ষ্যের ওপর ভিত্তি করে প্রি-ওয়ার্কআউট ও পোস্ট-ওয়ার্কআউট মিল প্ল্যান তৈরি করি। এটি পেশি গঠনে, ক্লান্তি দূর করতে এবং শারীরিক স্ট্যামিনা বহুগুণ বাড়িয়ে দেয়।",
    },
    en: {
      title: "Gym, Athlete & Sports Performance Diet",
      description:
        "Athletes and fitness enthusiasts require specialized macronutrient timing to sustain peak performance and muscle hypertrophy. Without proper nutrition, overtraining syndrome and fatigue occur. I structure targeted pre- and post-workout nutrition plans that accelerate muscle protein synthesis and boost stamina.",
    },
  },
  {
    id: "jaundice-diarrhea",
    serial: 18,
    icon: "droplets",
    bn: {
      title: "ডায়রিয়া, জন্ডিস, টাইফয়েট রোগীর ডায়েট",
      description:
        "এই রোগগুলোতে লিভার ও পরিপাকতন্ত্র অত্যন্ত দুর্বল থাকে, তাই যেকোনো খাবার সহজে হজম হয় না। ভুল খাবার খেলে লিভারের ওপর চাপ বাড়ে এবং রোগ দীর্ঘস্থায়ী হতে পারে। আমি তেল-মসলা ছাড়া ফ্যাট-ফ্রি, সহজপাচ্য এবং ইলেকট্রোলাইট ভারসাম্য রক্ষাকারী ডায়েট চার্ট প্রদান করি। এটি লিভারকে বিশ্রাম দিয়ে দ্রুত শক্তি ফিরিয়ে আনতে এবং পরিপাকতন্ত্র সুস্থ রাখতে সাহায্য করে।",
    },
    en: {
      title: "Diet for Jaundice, Typhoid & Acute Diarrhea",
      description:
        "Acute hepatic and gastrointestinal infections impair enzymatic digestion and cause severe electrolyte loss. Inappropriate fatty foods exacerbate hepatic strain. I prescribe non-fat, bland, electrolyte-replenishing medical diets that provide liver rest and expedite complete clinical recovery.",
    },
  },
  {
    id: "pregnancy",
    serial: 19,
    icon: "baby",
    bn: {
      title: "গর্ভবতী মা এবং শিশুর পুষ্টি ও মেধা বিকাশে ডায়েট",
      description:
        "গর্ভকালে মায়ের পুষ্টির ওপর সরাসরি নির্ভর করে অনাগত সন্তানের শারীরিক ও বুদ্ধিবৃত্তিক বিকাশ। এ সময় ক্যালসিয়াম, আয়রন ও ফলিক এসিডের সঠিক মাত্রা নিশ্চিত না হলে মা ও শিশু উভয়ই ঝুঁকিতে পড়ে। আমি গর্ভাবস্থার ত্রৈমাসিক (trimester) অনুযায়ী নিরাপদ ও পুষ্টিকর খাবারের তালিকা তৈরি করি। এটি শিশুর জন্মগত ত্রুটি রোধ করে এবং মায়ের প্রসবকালীন শক্তি জোগায়।",
    },
    en: {
      title: "Maternal Nutrition & Fetal Brain Development Diet",
      description:
        "A mother's gestational nutritional intake dictates fetal neurological and physical development. Adequate intake of folate, iron, DHA, and calcium prevents congenital anomalies and maternal anemia. I create trimester-specific clinical diets ensuring optimal birth weight and safe maternal health.",
    },
  },
  {
    id: "infant-complementary",
    serial: 20,
    icon: "baby",
    bn: {
      title: "৬ মাসের পর শিশুদের মায়ের দুধের পাশাপাশি পরিপূরক সুষম ডায়েট",
      description:
        "ছয় মাস বয়সের পর শুধু মায়ের দুধে শিশুর পুষ্টির চাহিদা পুরোপুরি মেটে না, তাই পরিপূরক খাবারের প্রয়োজন হয়। এই বয়সে ভুল খাবার দিলে শিশুর অ্যালার্জি বা বদহজম হতে পারে। আমি শিশুর বয়স উপযোগী নরম, সুষম এবং সহজে হজম হয় এমন খিচুড়ি বা ম্যাশড ফুডের তালিকা দিই। এটি শিশুর সঠিক ওজন বৃদ্ধি ও পুষ্টির চাহিদা পূরণে সাহায্য করে।",
    },
    en: {
      title: "Complementary Weaning Diet for Infants (6+ Months)",
      description:
        "After 6 months, breastmilk alone cannot fulfill an infant's accelerating iron and caloric needs. Introducing wrong weaning foods triggers allergies and digestive issues. I prepare age-appropriate, digestible weaning schedules and fortified mashed recipes that support healthy infant weight milestones.",
    },
  },
  {
    id: "anemia",
    serial: 21,
    icon: "droplets",
    bn: {
      title: "রক্ত স্বল্পতাজনিত সমস্যার ডায়েট",
      description:
        "রক্তস্বল্পতা বা অ্যানিমিয়া দূর করতে শরীরে পর্যাপ্ত আয়রন এবং তা শোষণের জন্য ভিটামিন সি প্রয়োজন। সাধারণ খাবারের অনিয়মের কারণে হিমোগ্লোবিনের মাত্রা আশঙ্কাজনকভাবে কমে যেতে পারে। আমি আয়রনসমৃদ্ধ খাবার এবং আয়রন শোষণে সাহায্যকারী উপাদানের সঠিক কম্বিনেশনের ডায়েট চার্ট তৈরি করি। এটি রক্তে হিমোগ্লোবিন বাড়িয়ে দুর্বলতা ও মাথা ঘোরার সমস্যা দূর করে।",
    },
    en: {
      title: "Anemia & Low Hemoglobin Management Diet",
      description:
        "Iron-deficiency anemia causes persistent fatigue, dizziness, and compromised immunity. Effective management requires bioavailable heme and non-heme iron paired with ascorbic acid enhancers. I design specialized diets that optimize intestinal iron absorption and steadily raise hemoglobin counts.",
    },
  },
  {
    id: "hypertension",
    serial: 22,
    icon: "heart",
    bn: {
      title: "উচ্চ রক্তচাপজনিত সমস্যার ডায়েট",
      description:
        "উচ্চ রক্তচাপ নিয়ন্ত্রণের জন্য সোডিয়াম বা লবণ খাওয়ার পরিমাণ কমানো এবং পটাশিয়ামসমৃদ্ধ খাবার খাওয়া জরুরি। খাদ্যাভ্যাস পরিবর্তন না করলে স্ট্রোক বা হৃদরোগের ঝুঁকি বহুগুণ বেড়ে যায়। আমি ডিএএসএইচ (DASH) ডায়েটের আদলে কম সোডিয়াম ও উচ্চ ফাইবারযুক্ত ডায়েট চার্ট তৈরি করি। এটি রক্তনালীর চাপ কমিয়ে প্রাকৃতিকভাবে রক্তচাপ নিয়ন্ত্রণে রাখতে সাহায্য করে।",
    },
    en: {
      title: "Hypertension & High Blood Pressure Diet",
      description:
        "Uncontrolled hypertension damages systemic vascular endothelia, escalating stroke risks. Sodium reduction combined with high potassium and magnesium intake is medically proven to lower arterial resistance. Based on the DASH framework, I formulate low-sodium, mineral-rich diets that normalize blood pressure naturally.",
    },
  },
  {
    id: "uric-acid",
    serial: 23,
    icon: "flask",
    bn: {
      title: "ইউরিক এসিডজনিত সমস্যার ডায়েট",
      description:
        "রক্তে ইউরিক এসিড বাড়লে জয়েন্টে ক্রিস্টাল জমে তীব্র ব্যথা বা গাউট বা গেঁটেবাত দেখা দেয়। পিউরিনসমৃদ্ধ খাবার (যেমন লাল মাংস, সামুদ্রিক মাছ) এর প্রধান কারণ। আমি কম পিউরিনযুক্ত খাবার এবং প্রচুর পানি ও ইউরিক এসিড দূরকারী খাবারের তালিকা দিই। এটি রক্তে ইউরিক এসিডের মাত্রা স্বাভাবিক রেখে ব্যথামুক্ত জীবন নিশ্চিত করে।",
    },
    en: {
      title: "Uric Acid & Gout Management Diet",
      description:
        "Hyperuricemia leads to monosodium urate crystal deposition in articular joints, triggering agonizing gout attacks. High-purine foods (red meats, organ meats, shellfish) are primary triggers. I provide low-purine, alkalizing, high-hydration meal regimens that accelerate uric acid excretion and prevent flare-ups.",
    },
  },
  {
    id: "other-conditions",
    serial: 24,
    icon: "shield",
    bn: {
      title: "অন্যান্য শারীরিক সমস্যার জন্য ডায়েট ও পুষ্টিবিষয়ক পরামর্শ দেওয়া হয়",
      description:
        "প্রতিটি মানুষের শারীরিক গঠন, জিনগত বৈশিষ্ট্য এবং মেটাবলিজম আলাদা হওয়ায় সাধারণ কোনো ডায়েট সবার জন্য কাজ করে না। যেকোনো জটিল বা সাধারণ শারীরিক সমস্যায় শরীরের অভ্যন্তরীণ চাহিদা মেটাতে বিশেষ পুষ্টি পরামর্শ প্রয়োজন। আমি সামগ্রিক স্বাস্থ্য পরীক্ষা করে একটি সুনির্দিষ্ট ও ব্যক্তিগত ডায়েট গাইডলাইন প্রদান করি। এটি দ্রুত রোগ নিরাময় এবং দীর্ঘমেয়াদি সুস্থতা বজায় রাখতে কার্যকরী ভূমিকা পালন করে।",
    },
    en: {
      title: "Custom Nutrition for Other Medical Conditions",
      description:
        "Every human body possesses unique metabolic, genetic, and clinical profiles, meaning generic diets are ineffective for complex ailments. I offer comprehensive nutritional evaluations to construct bespoke Medical Nutrition Therapy (MNT) tailored to your specific diagnostic reports, ensuring sustained health.",
    },
  },
];
