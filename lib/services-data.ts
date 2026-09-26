export type IconKey = "heart" | "leaf" | "baby" | "activity" | "users" | "utensils" | "shield" | "brain" | "droplets" | "sun" | "zap" | "flask";

export interface ServiceData {
  id: string;
  icon: IconKey;
  bn: {
    title: string;
    short: string;
    why: string;
  };
  en: {
    title: string;
    short: string;
    why: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    id: "diabetic",
    icon: "heart",
    bn: {
      title: "ডায়াবেটিক রোগীর ডায়েট",
      short: "ডায়াবেটিস নিয়ন্ত্রণে বিজ্ঞানসম্মত ব্যক্তিগত ডায়েট পরিকল্পনা।",
      why: "ডায়াবেটিস নিয়ন্ত্রণে রক্তের শর্করা বা গ্লুকোজের মাত্রা সঠিক রাখা অত্যন্ত গুরুত্বপূর্ণ। কোন খাবারগুলো রক্তে দ্রুত সুগার বাড়ায় এবং কোনগুলো ধীরগতিতে শক্তি জোগায়, তা সাধারণ মানুষের পক্ষে নিখুঁতভাবে নির্ধারণ করা কঠিন। আমি রোগীর শারীরিক অবস্থা, বয়স এবং ওষুধের মাত্রা অনুযায়ী একটি নির্দিষ্ট কার্বোহাইড্রেট ও গ্লাইসেমিক ইনডেক্স ভিত্তিক ডায়েট চার্ট তৈরি করি। এটি রক্তে শর্করার মাত্রা নিয়ন্ত্রণে রেখে রোগীর শরীরে শক্তির জোগান দেয় এবং ডায়াবেটিসের দীর্ঘমেয়াদি জটিলতা যেমন — কিডনি ও স্নায়ুর ক্ষতি প্রতিরোধে সাহায্য করে।",
    },
    en: {
      title: "Diabetic Diet",
      short: "Personalised, science-backed diet planning to help manage and control diabetes effectively.",
      why: "Keeping blood sugar levels stable is vital for diabetes management. It can be difficult for the average person to identify which foods spike blood glucose quickly and which provide slow, sustained energy. I prepare a carbohydrate-controlled, glycaemic-index-based diet chart tailored to the patient's physical condition, age, and medication dosage. This keeps blood sugar in check, provides consistent energy, and helps prevent long-term diabetic complications such as kidney and nerve damage.",
    },
  },
  {
    id: "cancer",
    icon: "shield",
    bn: {
      title: "ক্যান্সার রোগীর ডায়েট",
      short: "ক্যান্সার চিকিৎসাকালীন রোগ প্রতিরোধ ক্ষমতা ও পুষ্টি বজায় রাখতে বিশেষ ডায়েট।",
      why: "ক্যান্সার এবং এর চিকিৎসাপদ্ধতি (যেমন কেমোথেরাপি বা রেডিওথেরাপি) রোগীর শরীরের রোগ প্রতিরোধ ক্ষমতা ও পুষ্টির চাহিদা মারাত্মকভাবে ব্যাহত করে। এ সময় সঠিক পুষ্টি নিশ্চিত করা এবং ওজন ধরে রাখা রোগীর সুস্থতার লড়াইয়ে বড় ভূমিকা রাখে। আমি রোগীর হজমশক্তি, রুচি ও চিকিৎসার ধরণ বিবেচনা করে সহজপাচ্য, পুষ্টিকর এবং রোগপ্রতিরোধ ক্ষমতা বৃদ্ধিকারী খাবার নির্বাচন করি। এটি থেরাপির পার্শ্বপ্রতিক্রিয়া সামলাতে এবং দ্রুত শারীরিক শক্তি ফিরে পেতে সাহায্য করে।",
    },
    en: {
      title: "Cancer Patient Diet",
      short: "Specialised nutrition to maintain immunity and strength during cancer treatment.",
      why: "Cancer and its treatments (such as chemotherapy or radiotherapy) severely disrupt the body's immune system and nutritional needs. Ensuring adequate nutrition and maintaining weight plays a major role in the patient's recovery. I select easily digestible, nutrient-dense, immunity-boosting foods based on the patient's digestive capacity, appetite, and type of treatment. This helps manage therapy side-effects and accelerates physical recovery.",
    },
  },
  {
    id: "weight",
    icon: "leaf",
    bn: {
      title: "ওজন বাড়ানো / কমানো / আদর্শ ডায়েট",
      short: "ওজন বাড়ানো, কমানো বা আদর্শ ওজন বজায় রাখতে টেকসই ডায়েট।",
      why: "ওজন কমানো বা বাড়ানোর প্রক্রিয়াটি কেবল না খেয়ে থাকা বা অতিরিক্ত খাবার খাওয়ার বিষয় নয়, বরং সঠিক ক্যালোরি ঘাটতি বা উদ্বৃত্ত বজায় রাখা। ভুল ডায়েটের কারণে মেদ না কমে শরীরের পেশি ও প্রয়োজনীয় পুষ্টির ঘাটতি দেখা দিতে পারে। আমি শরীরের মেটাবলিজম, উচ্চতা, বয়স এবং লাইফস্টাইল মেপে একটি বিজ্ঞানসম্মত ও টেকসই ডায়েট চার্ট দিই। এর ফলে স্বাস্থ্যের ক্ষতি না করে স্বাস্থ্যকর উপায়ে আদর্শ ওজন অর্জন করা সম্ভব হয়।",
    },
    en: {
      title: "Weight Management Diet",
      short: "Sustainable diet plans for healthy weight loss, gain, or maintenance without crash dieting.",
      why: "Weight management is not simply about starving or overeating — it's about maintaining the correct calorie deficit or surplus. An incorrect diet can lead to muscle loss and nutritional deficiencies rather than fat loss. I assess your metabolism, height, age, and lifestyle to create a science-backed, sustainable diet chart. This allows you to achieve your ideal weight in a healthy way without compromising your wellbeing.",
    },
  },
  {
    id: "kidney",
    icon: "droplets",
    bn: {
      title: "কিডনী রোগীদের জন্য লো-প্রোটিন ডায়েট",
      short: "কিডনি রোগীদের লো-প্রোটিন ডায়েট পরিকল্পনা কিডনির চাপ কমাতে।",
      why: "কিডনি যখন সঠিকভাবে রক্ত ফিল্টার করতে পারে না, তখন প্রোটিন ভেঙে তৈরি বর্জ্য পদার্থ রক্তে জমতে থাকে। এ অবস্থায় প্রোটিন, সোডিয়াম, পটাশিয়াম এবং ফসফরাস নিয়ন্ত্রণের মাধ্যমে কিডনির ওপর থেকে অতিরিক্ত চাপ কমানো দরকার হয়। আমি প্রতিটি রোগীর রেনাল ফাংশন টেস্ট (যেমন ক্রিয়েটিনিন ও জিএফআর) দেখে নিরাপদ মাত্রার লো-প্রোটিন ডায়েট নির্ধারণ করি। এটি কিডনির কার্যকারিতা দীর্ঘস্থায়ী করতে এবং ডায়ালাইসিসের প্রয়োজনীয়তা পেছাতে সাহায্য করে।",
    },
    en: {
      title: "Low-Protein Diet for Kidney Patients",
      short: "Low-protein kidney diets tailored to test results to reduce burden on the kidneys.",
      why: "When the kidneys cannot filter blood properly, waste products from protein breakdown accumulate in the blood. In this state, it becomes necessary to reduce the burden on the kidneys by controlling protein, sodium, potassium, and phosphorus. I review each patient's renal function tests (such as creatinine and GFR) to determine a safe low-protein diet. This helps preserve kidney function over time and delay the need for dialysis.",
    },
  },
  {
    id: "heart",
    icon: "activity",
    bn: {
      title: "লো-ফ্যাট ডায়েট (হৃদরোগ ও ফ্যাটি লিভার)",
      short: "হৃদরোগ ও ফ্যাটি লিভার নিয়ন্ত্রণে লো-ফ্যাট ডায়েট পরিকল্পনা।",
      why: "রক্তে কোলেস্টেরল বৃদ্ধি এবং লিভারে চর্বি জমে যাওয়ার মূল কারণ অস্বাস্থ্যকর খাদ্যাভ্যাস ও অতিরিক্ত চর্বিযুক্ত খাবার। সঠিক ডায়েট ছাড়া এই চর্বি কমানো এবং হৃৎপিণ্ডকে সুরক্ষিত রাখা অসম্ভব। আমি স্যাচুরেটেড ফ্যাট ও ট্রান্স ফ্যাট বাদ দিয়ে উপকারী ওমেগা-৩ ফ্যাটি অ্যাসিড সমৃদ্ধ খাবার এবং ফাইবারযুক্ত ডায়েট চার্ট দিই। এটি লিভারের কোষ মেরামত করতে এবং হৃৎপিণ্ডের ব্লক বা হৃদরোগের ঝুঁকি কমাতে অত্যন্ত কার্যকর ভূমিকা পালন করে।",
    },
    en: {
      title: "Low-Fat Diet (Heart Disease & Fatty Liver)",
      short: "Low-fat cardiac diets to reduce cholesterol and protect liver health.",
      why: "High blood cholesterol and fat accumulation in the liver are primarily caused by unhealthy dietary habits and excessive fatty foods. Without the right diet, it is impossible to reduce this fat and protect the heart. I provide a diet chart rich in beneficial omega-3 fatty acids and fibre, excluding saturated and trans fats. This is highly effective at repairing liver cells and significantly reducing the risk of cardiac blockage and heart disease.",
    },
  },
  {
    id: "balance",
    icon: "zap",
    bn: {
      title: "শারীরিক দুর্বল রোগীদের জন্য ব্যালেন্স ডায়েট",
      short: "দীর্ঘমেয়াদী রোগ বা বার্ধক্যে শক্তি ফিরিয়ে আনতে সুষম ডায়েট।",
      why: "দীর্ঘমেয়াদি রোগ বা বার্ধক্যের কারণে শরীরে শক্তির ঘাটতি ও তীব্র দুর্বলতা দেখা দেয়। সাধারণ খাবারে শরীরের প্রয়োজনীয় ভিটামিন ও মিনারেলের চাহিদা সবসময় পূরণ হয় না। আমি রোগীর শক্তির চাহিদা বিশ্লেষণ করে সহজে হজম হয় এমন সুষম ও পুষ্টিঘন খাবারের তালিকা তৈরি করি। এটি শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়িয়ে দ্রুত শক্তি ফিরিয়ে আনতে এবং দুর্বলতা দূর করতে সাহায্য করে।",
    },
    en: {
      title: "Balanced Diet for Physically Weak Patients",
      short: "Nutrient-dense balanced diet to restore energy in chronic illness or old age.",
      why: "Chronic illness or ageing can cause significant energy depletion and severe weakness. Regular food alone often cannot meet the body's requirements for essential vitamins and minerals. I analyse the patient's energy needs and prepare a list of easily digestible, balanced, nutrient-rich foods. This boosts the body's immune system, rapidly restores strength, and helps eliminate weakness.",
    },
  },
  {
    id: "ng-feeding",
    icon: "flask",
    bn: {
      title: "NG ফিডিং (মুমূর্ষ রোগী)",
      short: "নল বা টিউবের মাধ্যমে খাওয়ানো মুমূর্ষ রোগীদের জন্য বিশেষ পুষ্টি পরিকল্পনা।",
      why: "যাঁরা মুখ দিয়ে স্বাভাবিক খাবার খেতে পারেন না, তাঁদের নাকের নল বা এনজি টিউবের মাধ্যমে তরল খাবার দিতে হয়। এই তরল খাবারের পুষ্টিগুণ সঠিক না হলে রোগীর অবস্থার অবনতি ঘটতে পারে। আমি রোগীর শারীরিক চাহিদা অনুযায়ী ক্যালোরি, প্রোটিন ও ভিটামিনসমৃদ্ধ বিশেষ তরল খাদ্যের অনুপাত ও রেসিপি প্রস্তুত করি। এটি মুমূর্ষু রোগীর পুষ্টির অভাব রোধ করে এবং দ্রুত সেরে উঠতে সাহায্য করে।",
    },
    en: {
      title: "NG Feeding (Critical Patients)",
      short: "Specialised liquid nutrition plans for patients who cannot eat orally.",
      why: "Patients who cannot eat normally by mouth must receive liquid nutrition through a nasogastric (NG) tube. If the nutritional content of this liquid food is not correct, the patient's condition can deteriorate. I prepare specific liquid food ratios and recipes rich in calories, protein, and vitamins according to the patient's physical needs. This prevents nutritional deficiency in critically ill patients and facilitates rapid recovery.",
    },
  },
  {
    id: "arthritis",
    icon: "brain",
    bn: {
      title: "বাত-ব্যাথা ডায়েট ও ব্যায়াম",
      short: "বাত ও হাড়ের ব্যথায় প্রদাহ কমাতে অ্যান্টি-ইনফ্লেমেটরি ডায়েট।",
      why: "বাত ও হাড়ের ব্যথায় প্রদাহ বা ইনফ্লেমেশন একটি বড় সমস্যা, যা কিছু নির্দিষ্ট খাবারের কারণে আরও বেড়ে যেতে পারে। সঠিক ডায়েট ও ব্যায়ামের সমন্বয়ে ইউরিক এসিড এবং প্রদাহ সৃষ্টিকারী উপাদান নিয়ন্ত্রণ করা যায়। আমি অ্যান্টি-ইনফ্লেমেটরি খাবার, ক্যালসিয়াম ও ভিটামিন ডি সমৃদ্ধ ডায়েট চার্ট তৈরি করি। এটি জয়েন্টের ব্যথা ও ফোলাভাব কমাতে এবং চলাফেরাকে সহজ করতে সাহায্য করে।",
    },
    en: {
      title: "Arthritis & Joint Pain Diet",
      short: "Anti-inflammatory diet and exercise guidance to reduce joint pain and swelling.",
      why: "Inflammation is a major issue in arthritis and bone pain, and certain foods can worsen it significantly. Controlling uric acid and pro-inflammatory factors is achievable through the right combination of diet and exercise. I create diet charts rich in anti-inflammatory foods, calcium, and vitamin D. This helps reduce joint pain and swelling and makes movement easier.",
    },
  },
  {
    id: "gastric",
    icon: "sun",
    bn: {
      title: "কোষ্ঠকাঠিন্য, আলসার ও গ্যাস্ট্রিক ডায়েট",
      short: "হজম সমস্যা, গ্যাস্ট্রিক ও আলসার নিরাময়ে সঠিক ডায়েট পরিকল্পনা।",
      why: "গ্যাস্ট্রিক, আলসার বা কোষ্ঠকাঠিন্যের সমস্যা মূলত অনিয়মিত খাদ্যাভ্যাস ও ভুল খাবার পছন্দের কারণে হয়। কোন খাবার এসিডিটি বাড়ায় এবং কোনগুলো পেটের স্বাস্থ্য ভালো রাখে তা জানা জরুরি। আমি ফাইবারযুক্ত খাবার, পর্যাপ্ত তরল এবং সহজে হজমযোগ্য মৃদু খাবারের একটি সুনির্দিষ্ট তালিকা তৈরি করি। এটি পরিপাকতন্ত্রের কার্যক্ষমতা উন্নত করে এবং পেটের অস্বস্তি থেকে স্থায়ী মুক্তি দেয়।",
    },
    en: {
      title: "Constipation, Ulcer & Gastric Diet",
      short: "Diet plans to heal digestive disorders, gastric issues, and chronic constipation.",
      why: "Gastric issues, ulcers, and constipation are primarily caused by irregular dietary habits and poor food choices. It is important to know which foods increase acidity and which promote gut health. I create a specific list of fibre-rich foods, adequate fluids, and easily digestible, mild foods. This improves digestive system function and provides lasting relief from abdominal discomfort.",
    },
  },
  {
    id: "infertility",
    icon: "users",
    bn: {
      title: "ইনফার্টিলিটি (বন্ধ্যাত্ব) রোগীর ডায়েট",
      short: "বন্ধ্যাত্ব সমস্যায় হরমোন ব্যালেন্স ও প্রজনন স্বাস্থ্য উন্নয়নে ডায়েট।",
      why: "হরমোনের ভারসাম্যহীনতা এবং পুষ্টির ঘাটতি পুরুষ ও নারী উভয়ের ক্ষেত্রেই উর্বরতা বা ফার্টিলিটিতে নেতিবাচক প্রভাব ফেলতে পারে। বিশেষ কিছু অ্যান্টিঅক্সিডেন্ট ও পুষ্টি উপাদান প্রজনন স্বাস্থ্য উন্নত করতে প্রমাণিত ভূমিকা রাখে। আমি হরমোন নিয়ন্ত্রণে সাহায্যকারী এবং ডিম্বাণু ও শুক্রাণুর গুণগত মান বৃদ্ধিকারী সুনির্দিষ্ট ডায়েট চার্ট প্রদান করি। এটি প্রজনন অঙ্গের কার্যকারিতা বাড়িয়ে গর্ভধারণের সম্ভাবনা বৃদ্ধিতে সহায়তা করে।",
    },
    en: {
      title: "Infertility Diet",
      short: "Dietary therapy to balance hormones and improve reproductive health for both men and women.",
      why: "Hormonal imbalance and nutritional deficiencies can negatively affect fertility in both men and women. Specific antioxidants and nutrients are proven to improve reproductive health. I provide targeted diet charts to help regulate hormones and improve egg and sperm quality. This enhances the function of reproductive organs and increases the chances of conception.",
    },
  },
  {
    id: "ramadan",
    icon: "sun",
    bn: {
      title: "রোজা থাকাকালীন ডায়েট",
      short: "রমজানে রোজা রেখেও শরীর সুস্থ ও সক্রিয় রাখতে বিশেষ ডায়েট।",
      why: "রোজায় দীর্ঘ সময় না খেয়ে থাকার ফলে শরীরে পানির ও শক্তির ভারসাম্য নষ্ট হতে পারে, যা গ্যাস্ট্রিক বা দুর্বলতার কারণ হয়। সাহরি ও ইফতারে সঠিক খাবার নির্বাচন না করলে ওজন বৃদ্ধি বা রক্তচাপের সমস্যা দেখা দিতে পারে। আমি সারাদিনের শক্তির চাহিদা পূরণের জন্য হাইড্রেটিং খাবার, কমপ্লেক্স কার্ব ও প্রোটিনসমৃদ্ধ ডায়েট প্ল্যান তৈরি করি। এটি রোজা রেখেও শরীর চাঙ্গা ও সুস্থ রাখতে সাহায্য করে।",
    },
    en: {
      title: "Ramadan Fasting Diet",
      short: "Special diet plan to stay healthy, energised, and active during Ramadan fasting.",
      why: "Prolonged fasting during Ramadan can disrupt the body's water and energy balance, causing gastric issues or weakness. Choosing the wrong foods for Suhoor and Iftar can lead to weight gain or blood pressure problems. I create diet plans rich in hydrating foods, complex carbohydrates, and protein to meet the body's energy demands throughout the day. This keeps the body healthy and energised even while fasting.",
    },
  },
  {
    id: "skin",
    icon: "sun",
    bn: {
      title: "ত্বকের সমস্যার ডায়েট",
      short: "ব্রণ, একজিমা ও ত্বকের সমস্যায় ভেতর থেকে ত্বক উজ্জ্বল করতে ডায়েট।",
      why: "ত্বকের বিভিন্ন সমস্যা যেমন ব্রণ, বলিরেখা বা একজিমা অনেক সময় অভ্যন্তরীণ পুষ্টির অভাব ও পেটের গণ্ডগোলের কারণে দেখা দেয়। প্রসাধন ব্যবহার করে সাময়িক সমাধান মিললেও ভেতর থেকে ত্বক সুস্থ রাখতে খাদ্যাভ্যাস বদলানো দরকার। আমি অ্যান্টিঅক্সিডেন্ট, ভিটামিন সি এবং স্বাস্থ্যকর ফ্যাটযুক্ত ডায়েট চার্ট দিই। এটি কোলাজেন উৎপাদনে সাহায্য করে এবং ত্বককে ভেতর থেকে উজ্জ্বল ও স্বাস্থ্যোজ্জ্বল করে তোলে।",
    },
    en: {
      title: "Skin Problem Diet",
      short: "Diet rich in antioxidants and vitamins to treat acne, eczema, and dull skin from within.",
      why: "Skin problems such as acne, wrinkles, or eczema often arise from internal nutritional deficiencies and digestive issues. While cosmetics provide temporary relief, changing dietary habits is essential for long-term skin health from within. I provide diet charts rich in antioxidants, vitamin C, and healthy fats. This supports collagen production and makes the skin radiant and healthy from the inside out.",
    },
  },
  {
    id: "pcos",
    icon: "users",
    bn: {
      title: "PCOS ডায়েট",
      short: "PCOS ও হরমোন ভারসাম্যহীনতায় ইনসুলিন নিয়ন্ত্রণে বিশেষ ডায়েট।",
      why: "পলিসিস্টিক ওভারিয়ান সিন্ড্রোম বা PCOS মূলত হরমোনজনিত সমস্যা, যা ইনসুলিন রেজিস্ট্যান্সের সাথে গভীরভাবে জড়িত। এই সমস্যায় ওজন নিয়ন্ত্রণ এবং কার্বোহাইড্রেট ম্যানেজমেন্ট করা অত্যন্ত জরুরি। আমি কম গ্লাইসেমিক ইনডেক্সযুক্ত খাবার ও হরমোন ব্যালেন্সিং ডায়েট চার্ট তৈরি করি। এটি ইনসুলিন লেভেল নিয়ন্ত্রণে রেখে মাসিক নিয়মিত করতে এবং ওজন কমাতে সাহায্য করে।",
    },
    en: {
      title: "PCOS Diet",
      short: "Low-GI hormone-balancing diet to manage PCOS, insulin resistance, and irregular cycles.",
      why: "Polycystic Ovarian Syndrome (PCOS) is primarily a hormonal condition deeply linked with insulin resistance. Weight management and carbohydrate control are critically important for this condition. I create low-glycaemic-index food plans and hormone-balancing diet charts. This keeps insulin levels controlled, helps regularise menstrual cycles, and assists in weight management.",
    },
  },
  {
    id: "icu",
    icon: "shield",
    bn: {
      title: "ICU ডায়েট",
      short: "আইসিইউতে ভর্তি রোগীদের জটিল পুষ্টি চাহিদায় বিশেষজ্ঞ পরামর্শ।",
      why: "আইসিইউতে চিকিৎসাধীন রোগীদের মেটাবলিক চাহিদা অত্যন্ত জটিল এবং তাঁদের শরীরের টিস্যু দ্রুত ভেঙে যায়। এ সময় রোগীর মেটাবলিজম অনুযায়ী নিখুঁত পুষ্টি সরবরাহ না করলে অঙ্গহানির ঝুঁকি বেড়ে যায়। আমি চিকিৎসকের সাথে পরামর্শ করে বিশেষায়িত এন্টারাল বা প্যারেন্টারাল পুষ্টির মাত্রা নির্ধারণ করি। এটি রোগীর শরীরের রোগ প্রতিরোধ ক্ষমতা টিকিয়ে রাখতে এবং দ্রুত আরোগ্যে সহায়তা করে।",
    },
    en: {
      title: "ICU Diet",
      short: "Specialised enteral/parenteral nutrition planning for critically ill ICU patients.",
      why: "ICU patients have extremely complex metabolic demands and their body tissues break down rapidly. Without precise nutritional support aligned to the patient's metabolism, the risk of organ failure increases. In consultation with the treating physician, I determine specialised enteral or parenteral nutrition levels. This helps maintain the patient's immune function and supports rapid recovery.",
    },
  },
  {
    id: "stroke",
    icon: "brain",
    bn: {
      title: "প্যারালাইসিস, স্ট্রোক রোগীর ডায়েট",
      short: "স্ট্রোক ও প্যারালাইসিস পরবর্তী পেশি পুনর্গঠন ও সুরক্ষায় ডায়েট।",
      why: "স্ট্রোক বা প্যারালাইসিসের পর রোগীর চলাফেরা বন্ধ থাকে এবং গিলতেও সমস্যা হতে পারে, ফলে পেশি ক্ষয় ও পুষ্টিহীনতা দেখা দেয়। এই রোগীদের জন্য ফাইবার, প্রোটিন ও হার্ট-হেলদি ফ্যাট অত্যন্ত প্রয়োজন। আমি রোগীর গিলবার ক্ষমতার ওপর ভিত্তি করে নরম বা তরল কিন্তু পুষ্টিকর ডায়েট চার্ট দিই। এটি শরীরের পেশি পুনর্গঠনে এবং দ্বিতীয়বার স্ট্রোকের ঝুঁকি কমাতে সাহায্য করে।",
    },
    en: {
      title: "Paralysis & Stroke Patient Diet",
      short: "Soft or liquid nutritious diet to rebuild muscles and prevent recurrent stroke.",
      why: "After a stroke or paralysis, the patient's mobility is restricted and there may be difficulty swallowing, leading to muscle wasting and malnutrition. Fibre, protein, and heart-healthy fats are essential for these patients. I provide soft or liquid but nutritious diet charts based on the patient's swallowing capacity. This helps rebuild muscle tissue and reduces the risk of a second stroke.",
    },
  },
  {
    id: "children",
    icon: "baby",
    bn: {
      title: "স্কুলগামী ছেলে-মেয়েদের বিশেষ ডায়েট",
      short: "বেড়ে ওঠার সময় শিশুদের শারীরিক ও মানসিক বিকাশে পুষ্টিকর ডায়েট।",
      why: "বেড়ে ওঠার এই সময়ে শিশুদের শারীরিক ও মানসিক বিকাশ দ্রুত ঘটে, যার জন্য পুষ্টিকর খাবারের বিকল্প নেই। জাংক ফুডের আসক্তি এবং পুষ্টির অভাব তাদের মেধা ও মনোযোগ কমিয়ে দিতে পারে। আমি মস্তিষ্কের বিকাশ এবং শক্তি জোগানোর জন্য আয়রন, ক্যালসিয়াম ও প্রোটিনসমৃদ্ধ আকর্ষণীয় ডায়েট প্ল্যান তৈরি করি। এটি তাদের পড়ালেখায় মনোযোগ বাড়াতে এবং রোগ প্রতিরোধ ক্ষমতা শক্তিশালী করতে সাহায্য করে।",
    },
    en: {
      title: "Special Diet for School-Going Children",
      short: "Iron, calcium, and protein-rich diet plans to support children's physical and cognitive growth.",
      why: "During the growing years, children undergo rapid physical and mental development for which nutritious food is indispensable. Junk food addiction and nutritional deficiencies can reduce their intelligence and concentration. I create appealing, iron, calcium, and protein-rich diet plans to support brain development and energy levels. This improves concentration in studies and strengthens their immune system.",
    },
  },
  {
    id: "sports",
    icon: "utensils",
    bn: {
      title: "জিম ও স্পোর্টস ডায়েট",
      short: "শারীরিক সক্ষমতা ও পারফরম্যান্স বাড়াতে অপ্টিমাইজড ডায়েট প্ল্যান।",
      why: "জিম বা খেলাধুলার সাথে যুক্ত ব্যক্তিদের সাধারণ মানুষের চেয়ে অনেক বেশি ক্যালোরি ও প্রোটিনের প্রয়োজন হয়। সঠিক ডায়েট ছাড়া মাসেল বিল্ড বা এনার্জি লেভেল ধরে রাখা সম্ভব নয়। আমি ওয়ার্কআউটের তীব্রতা ও লক্ষ্যের ওপর ভিত্তি করে প্রি-ওয়ার্কআউট ও পোস্ট-ওয়ার্কআউট মিল প্ল্যান তৈরি করি। এটি পেশি গঠনে, ক্লান্তি দূর করতে এবং শারীরিক স্ট্যামিনা বহুগুণ বাড়িয়ে দেয়।",
    },
    en: {
      title: "Gym & Sports Diet",
      short: "Optimised pre- and post-workout nutrition plans to boost performance and build muscle.",
      why: "Athletes and gym-goers require significantly more calories and protein than the average person. Without the right diet, it is impossible to build muscle or maintain energy levels. I create pre- and post-workout meal plans based on workout intensity and goals. This supports muscle building, eliminates fatigue, and greatly increases physical stamina.",
    },
  },
  {
    id: "diarrhoea",
    icon: "droplets",
    bn: {
      title: "ডায়রিয়া, জন্ডিস, টাইফয়েড রোগীর ডায়েট",
      short: "লিভার ও পরিপাকতন্ত্র সুরক্ষায় চর্বিমুক্ত সহজপাচ্য ডায়েট।",
      why: "এই রোগগুলোতে লিভার ও পরিপাকতন্ত্র অত্যন্ত দুর্বল থাকে, তাই যেকোনো খাবার সহজে হজম হয় না। ভুল খাবার খেলে লিভারের ওপর চাপ বাড়ে এবং রোগ দীর্ঘস্থায়ী হতে পারে। আমি তেল-মসলা ছাড়া ফ্যাট-ফ্রি, সহজপাচ্য এবং ইলেকট্রোলাইট ভারসাম্য রক্ষাকারী ডায়েট চার্ট প্রদান করি। এটি লিভারকে বিশ্রাম দিয়ে দ্রুত শক্তি ফিরিয়ে আনতে এবং পরিপাকতন্ত্র সুস্থ রাখতে সাহায্য করে।",
    },
    en: {
      title: "Diarrhoea, Jaundice & Typhoid Diet",
      short: "Fat-free, easily digestible diet with electrolyte balance for liver and gut recovery.",
      why: "In these illnesses, the liver and digestive system are extremely weak, making it difficult to digest most foods. Eating the wrong foods increases stress on the liver and can prolong the illness. I provide fat-free, easily digestible, electrolyte-balancing diet charts without oil or spices. This allows the liver to rest, rapidly restores energy, and keeps the digestive system healthy.",
    },
  },
  {
    id: "maternal",
    icon: "baby",
    bn: {
      title: "গর্ভবতী মা এবং শিশুর পুষ্টি ও মেধা বিকাশে ডায়েট",
      short: "গর্ভকালীন সময়ে মা ও শিশুর সুস্বাস্থ্য নিশ্চিতে পুষ্টিবিদের পরামর্শ।",
      why: "গর্ভকালে মায়ের পুষ্টির ওপর সরাসরি নির্ভর করে অনাগত সন্তানের শারীরিক ও বুদ্ধিবৃত্তিক বিকাশ। এ সময় ক্যালসিয়াম, আয়রন ও ফলিক এসিডের সঠিক মাত্রা নিশ্চিত না হলে মা ও শিশু উভয়ই ঝুঁকিতে পড়ে। আমি গর্ভাবস্থার ত্রৈমাসিক (trimester) অনুযায়ী নিরাপদ ও পুষ্টিকর খাবারের তালিকা তৈরি করি। এটি শিশুর জন্মগত ত্রুটি রোধ করে এবং মায়ের প্রসবকালীন শক্তি জোগায়।",
    },
    en: {
      title: "Maternal & Infant Nutrition Diet",
      short: "Trimester-specific nutrition plans for healthy mother and child during pregnancy.",
      why: "The physical and intellectual development of the unborn child directly depends on the mother's nutrition during pregnancy. Without adequate calcium, iron, and folic acid at this stage, both mother and child are at risk. I create safe and nutritious food lists according to each trimester of pregnancy. This helps prevent birth defects in the child and provides the mother with the energy needed during childbirth.",
    },
  },
  {
    id: "infant",
    icon: "baby",
    bn: {
      title: "৬ মাসের পর শিশুদের পরিপূরক সুষম ডায়েট",
      short: "৬ মাস পর শিশুদের পরিপূরক খাবারের সঠিক পরিকল্পনায় পুষ্টিবিদের সহায়তা।",
      why: "ছয় মাস বয়সের পর শুধু মায়ের দুধে শিশুর পুষ্টির চাহিদা পুরোপুরি মেটে না, তাই পরিপূরক খাবারের প্রয়োজন হয়। এই বয়সে ভুল খাবার দিলে শিশুর অ্যালার্জি বা বদহজম হতে পারে। আমি শিশুর বয়স উপযোগী নরম, সুষম এবং সহজে হজম হয় এমন খিচুড়ি বা ম্যাশড ফুডের তালিকা দিই। এটি শিশুর সঠিক ওজন বৃদ্ধি ও পুষ্টির চাহিদা পূরণে সাহায্য করে।",
    },
    en: {
      title: "Supplementary Diet for Infants (6+ months)",
      short: "Age-appropriate soft and balanced supplementary food plans for babies from 6 months.",
      why: "After six months, breast milk alone cannot fully meet the infant's nutritional needs, making supplementary food necessary. Introducing the wrong foods at this age can cause allergies or indigestion. I provide age-appropriate lists of soft, balanced, and easily digestible khichuri or mashed foods. This supports proper weight gain and meets the infant's nutritional requirements.",
    },
  },
  {
    id: "anaemia",
    icon: "droplets",
    bn: {
      title: "রক্ত স্বল্পতাজনিত সমস্যার ডায়েট",
      short: "আয়রনসমৃদ্ধ ডায়েটে হিমোগ্লোবিন বাড়িয়ে রক্তস্বল্পতা দূর করুন।",
      why: "রক্তস্বল্পতা বা অ্যানিমিয়া দূর করতে শরীরে পর্যাপ্ত আয়রন এবং তা শোষণের জন্য ভিটামিন সি প্রয়োজন। সাধারণ খাবারের অনিয়মের কারণে হিমোগ্লোবিনের মাত্রা আশঙ্কাজনকভাবে কমে যেতে পারে। আমি আয়রনসমৃদ্ধ খাবার এবং আয়রন শোষণে সাহায্যকারী উপাদানের সঠিক কম্বিনেশনের ডায়েট চার্ট তৈরি করি। এটি রক্তে হিমোগ্লোবিন বাড়িয়ে দুর্বলতা ও মাথা ঘোরার সমস্যা দূর করে।",
    },
    en: {
      title: "Anaemia Diet",
      short: "Iron and vitamin C rich diet to raise haemoglobin levels and overcome anaemia.",
      why: "To overcome anaemia, the body needs adequate iron along with vitamin C for absorption. Irregular eating habits can cause haemoglobin levels to drop dangerously. I create diet charts with the correct combination of iron-rich foods and iron-absorption enhancers. This raises haemoglobin in the blood and eliminates weakness and dizziness.",
    },
  },
  {
    id: "hypertension",
    icon: "heart",
    bn: {
      title: "উচ্চ রক্তচাপজনিত সমস্যার ডায়েট",
      short: "DASH ডায়েটের আদলে কম সোডিয়াম ও উচ্চ ফাইবারযুক্ত ডায়েট।",
      why: "উচ্চ রক্তচাপ নিয়ন্ত্রণের জন্য সোডিয়াম বা লবণ খাওয়ার পরিমাণ কমানো এবং পটাশিয়ামসমৃদ্ধ খাবার খাওয়া জরুরি। খাদ্যাভ্যাস পরিবর্তন না করলে স্ট্রোক বা হৃদরোগের ঝুঁকি বহুগুণ বেড়ে যায়। আমি ডিএএসএইচ (DASH) ডায়েটের আদলে কম সোডিয়াম ও উচ্চ ফাইবারযুক্ত ডায়েট চার্ট তৈরি করি। এটি রক্তনালীর চাপ কমিয়ে প্রাকৃতিকভাবে রক্তচাপ নিয়ন্ত্রণে রাখতে সাহায্য করে।",
    },
    en: {
      title: "Hypertension Diet",
      short: "DASH-model low-sodium, high-fibre diet to naturally control high blood pressure.",
      why: "To control high blood pressure, it is essential to reduce sodium (salt) intake and increase potassium-rich foods. Without changing dietary habits, the risk of stroke or heart disease increases manifold. I create low-sodium, high-fibre diet charts based on the DASH (Dietary Approaches to Stop Hypertension) model. This reduces vascular pressure and helps control blood pressure naturally.",
    },
  },
  {
    id: "uric-acid",
    icon: "zap",
    bn: {
      title: "ইউরিক এসিডজনিত সমস্যার ডায়েট",
      short: "গাউট ও ইউরিক এসিড কমাতে কম পিউরিনযুক্ত ডায়েট পরামর্শ।",
      why: "রক্তে ইউরিক এসিড বাড়লে জয়েন্টে ক্রিস্টাল জমে তীব্র ব্যথা বা গাউট বা গেঁটেবাত দেখা দেয়। পিউরিনসমৃদ্ধ খাবার (যেমন লাল মাংস, সামুদ্রিক মাছ) এর প্রধান কারণ। আমি কম পিউরিনযুক্ত খাবার এবং প্রচুর পানি ও ইউরিক এসিড দূরকারী খাবারের তালিকা দিই। এটি রক্তে ইউরিক এসিডের মাত্রা স্বাভাবিক রেখে ব্যথামুক্ত জীবন নিশ্চিত করে।",
    },
    en: {
      title: "Uric Acid Diet",
      short: "Low-purine diet to normalise uric acid levels and relieve gout pain.",
      why: "When uric acid levels in the blood rise, crystals form in the joints, causing intense pain known as gout. Purine-rich foods such as red meat and seafood are the primary culprits. I provide lists of low-purine foods, ample water intake, and uric-acid-reducing foods. This keeps uric acid levels normal in the blood and ensures a pain-free life.",
    },
  },
  {
    id: "other",
    icon: "leaf",
    bn: {
      title: "অন্যান্য শারীরিক সমস্যার ডায়েট পরামর্শ",
      short: "যেকোনো জটিল বা সাধারণ শারীরিক সমস্যায় ব্যক্তিগত ডায়েট গাইডলাইন।",
      why: "প্রতিটি মানুষের শারীরিক গঠন, জিনগত বৈশিষ্ট্য এবং মেটাবলিজম আলাদা হওয়ায় সাধারণ কোনো ডায়েট সবার জন্য কাজ করে না। যেকোনো জটিল বা সাধারণ শারীরিক সমস্যায় শরীরের অভ্যন্তরীণ চাহিদা মেটাতে বিশেষ পুষ্টি পরামর্শ প্রয়োজন। আমি সামগ্রিক স্বাস্থ্য পরীক্ষা করে একটি সুনির্দিষ্ট ও ব্যক্তিগত ডায়েট গাইডলাইন প্রদান করি। এটি দ্রুত রোগ নিরাময় এবং দীর্ঘমেয়াদি সুস্থতা বজায় রাখতে কার্যকরী ভূমিকা পালন করে।",
    },
    en: {
      title: "Diet Advice for Other Health Conditions",
      short: "Personalised diet guidelines for any complex or general health condition.",
      why: "Since each person's physique, genetic makeup, and metabolism differ, a generic diet does not work for everyone. Special nutritional advice is needed to meet the body's internal demands for any complex or general health problem. I provide a specific and personalised diet guideline after reviewing overall health. This plays an effective role in rapid disease recovery and long-term health maintenance.",
    },
  },
];
