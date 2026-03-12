export interface VisaInfo {
    id: string;
    name: string;
    flag: string;
    title: string;
    description: string;
    processingTime: string;
    validity: string;
    entryType: string;
    price: string;
    requirements: string[];
    steps: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export const visaData: Record<string, VisaInfo> = {
    us: {
        id: "us",
        name: "United States",
        flag: "🇺🇸",
        title: "USA Visa for Indians",
        description: "Get your USA visa approval within days of applying. Our service ensures you get your visa on time through helping you in the application process and reliable support.",
        processingTime: "Varies (Appointment Based)",
        validity: "Up to 10 Years",
        entryType: "Multiple Entry",
        price: "$249",
        requirements: [
            "Valid Indian passport (with at least 6 months validity beyond your intended stay)",
            "Completed DS-160 application form",
            "Visa application fee payment receipt",
            "Recent U.S.-specification photograph",
            "Appointment confirmation page",
            "Supporting documents such as proof of employment, financial statements, travel itinerary, or an invitation letter (if applicable)"
        ],
        steps: [
            { title: "Form DS-160", description: "Complete the online Nonimmigrant Visa Electronic Application." },
            { title: "Fee Payment", description: "Pay the non-refundable visa application processing fee." },
            { title: "Schedule Appointment", description: "Book your interview appointment at the nearest US Embassy or Consulate." },
            { title: "Attend Interview", description: "Present your documents and answer questions from the consular officer." }
        ],
        faqs: [
            { question: "What is a USA B1/B2 visa?", answer: "The B1/B2 is a temporary, non-immigrant visa for Indians who wish to travel to the United States for short-term purposes such as business meetings, conferences, tourism, family visits, or medical treatment." },
            { question: "Do I need a B1/B2 visa before traveling to the U.S.?", answer: "Yes. Indian citizens must obtain a valid B1/B2 visa from a U.S. Embassy or Consulate before traveling, as there is no visa-on-arrival facility for Indians in the U.S." },
            { question: "How long is a B1/B2 visa valid for Indian citizens?", answer: "Most Indian applicants receive a 10-year multiple entry visa, allowing them to visit the U.S. multiple times. However, each stay is generally limited to a maximum of 6 months per visit, as determined by U.S. immigration officers at the port of entry." },
            { question: "What documents are required for a B1/B2 visa application?", answer: "Valid Indian passport (with at least 6 months validity beyond your intended stay), completed DS-160 application form, visa application fee payment receipt, recent U.S.-specification photograph, appointment confirmation page, and supporting documents such as proof of employment, financial statements, travel itinerary, or an invitation letter (if applicable)." },
            { question: "Is an interview mandatory for B1/B2 visa applicants?", answer: "Yes, most Indian applicants must attend a personal interview at the U.S. Embassy or Consulate. However, some may qualify for an interview waiver / dropbox if they are renewing a recently expired visa and meet eligibility criteria." },
            { question: "How long does the B1/B2 visa process take?", answer: "Appointment wait times vary by location and season. After your interview, visa processing usually takes a few business days, but in some cases it may take longer. We recommend applying at least 2–3 months before your planned travel date." },
            { question: "Can I extend my stay in the U.S. on a B1/B2 visa?", answer: "Yes, extensions are possible by applying to U.S. Citizenship and Immigration Services (USCIS) before your authorized stay expires. However, approvals are not guaranteed, so it’s best to plan your trip within the allowed period." },
            { question: "Can I work in the U.S. on a B1/B2 visa?", answer: "No. The B1/B2 visa strictly prohibits employment or long-term study. It is only for business visits, tourism, medical treatment, or family visits." },
            { question: "If my B1/B2 visa is refused, can I reapply?", answer: "Yes. You can reapply after correcting the issues that led to your refusal. A new DS-160 and visa fee payment are required for each fresh application." },
            { question: "What are common reasons for U.S. B1/B2 visa rejection?", answer: "Insufficient proof of ties to India (family, job, property, etc.), weak financial evidence of being able to afford the trip, inconsistent or unclear purpose of travel, past immigration violations in the U.S. or other countries." },
            { question: "Do I need confirmed flight tickets or hotel bookings before applying?", answer: "No, it is not mandatory to book flights or hotels before your visa is approved. A tentative travel plan or itinerary is usually sufficient." },
            { question: "Can I travel to the U.S. if my old passport has a valid visa?", answer: "Yes. If your B1/B2 visa is still valid in your old passport, you can travel with both the old and new passports together." },
            { question: "How can SmotVisa help me with my B1/B2 visa application?", answer: "At SmotVisa, we assist Indian applicants with DS-160 form filling, document preparation, visa fee and appointment scheduling, mock interviews for confidence-building, and step-by-step support until your visa decision." }
        ]
    },
    uk: {
        id: "uk",
        name: "United Kingdom",
        flag: "🇬🇧",
        title: "UK Visa for Indians – Tourist & Business Visitor Visa Assistance",
        description: "Planning a UK holiday or a business trip to London, Manchester, Birmingham, or anywhere in the United Kingdom? Smotvisa makes your UK Tourist Visa and UK Business Visitor Visa process smooth, simple, and stress-free. We assist Indian travelers with complete document preparation, online application filing, biometrics support, and full guidance until your visa decision. With multiple branches across India, our experts ensure fast and error-free applications.",
        processingTime: "Standard: 15–30 working days; Priority: 5–7 days; Super Priority: 24 hours",
        validity: "6 months / 2 years / 5 years / 10 years",
        entryType: "Multiple Entry",
        price: "$199",
        requirements: [
            "Valid passport (minimum 6 months validity)",
            "Passport-size photos",
            "Completed UK visa forms",
            "Travel itinerary & purpose letter",
            "6-month bank statements",
            "Salary slips / ITR / business financials",
            "Proof of funds for travel & stay",
            "Accommodation planning",
            "Travel history (previous visas)",
            "Invitation letter from UK company (for business visa)",
            "Company registration proofs (India) (for business visa)",
            "Business relationship documents (for business visa)",
            "Employer NOC or self-business letter (for business visa)"
        ],
        steps: [
            { title: "Profile Assessment", description: "We review your travel plan, eligibility, and purpose." },
            { title: "Customized Document Checklist", description: "A simple, structured list based on Tourist or Business Visitor category." },
            { title: "Document Preparation", description: "We help format, verify, and organize your entire file to avoid errors." },
            { title: "Online Filing & Appointment Guidance", description: "We submit your application and schedule your VFS biometrics slot." },
            { title: "Biometrics Support", description: "We guide you through the VFS steps, including documents, scans & procedure." },
            { title: "Tracking & Updates", description: "We monitor your file and keep you updated until your visa decision." }
        ],
        faqs: [
            { question: "Do I need confirmed flights and hotels before applying?", answer: "No — we guide you on safe itinerary planning without early bookings." },
            { question: "Is the UK visa multiple-entry?", answer: "Yes, all Standard Visitor Visas are multiple-entry." },
            { question: "Can I stay longer than 6 months?", answer: "No, the maximum stay allowed is 6 months per visit." },
            { question: "Do Indians need biometrics?", answer: "Yes, biometrics is mandatory at VFS." },
            { question: "Can I work on a Visitor Visa?", answer: "No. Working, paid activities, and long-term study are not allowed." }
        ]
    },
    uae: {
        id: "uae",
        name: "UAE",
        flag: "🇦🇪",
        title: "UAE Tourist Visa",
        description: "Explore the vibrant cities of Dubai, Abu Dhabi and beyond with a UAE tourist visa.",
        processingTime: "3-5 Working Days",
        validity: "30 Days / 60 Days",
        entryType: "Single / Multiple Entry",
        price: "$89",
        requirements: [
            "Clear passport copy",
            "Passport-sized photograph",
            "Flight ticket (optional for some nationalities)",
            "National ID copy"
        ],
        steps: [
            { title: "Submit Docs", description: "Send your passport details and photo to our team." },
            { title: "Application Proof", description: "We process your application through licensed partners." },
            { title: "Approval", description: "Receive your E-Visa via email within 3-5 days." }
        ],
        faqs: [
            { question: "Is insurance mandatory for UAE visa?", answer: "Yes, travel insurance with COVID-19 coverage is currently mandatory." }
        ]
    },
    canada: {
        id: "canada",
        name: "Canada",
        flag: "🇨🇦",
        title: "Canada Visa for Indians – Tourist & Business Visitor Visa Assistance",
        description: "Planning a holiday in Canada or traveling for business? Smotvisa helps Indian travellers get their Canada Tourist Visa (Visitor Visa) and Business Visitor Visa with ease. With multiple branches across India and years of experience, we prepare your documents professionally, guide you through biometrics, and ensure a smooth, error-free application process. Whether you want to explore Toronto, Vancouver, Niagara Falls, or attend a business meeting, Smotvisa makes your Canada journey simple and stress-free.",
        processingTime: "15-30 Working Days",
        validity: "Up to 10 Years (or passport expiry)",
        entryType: "Single or Multiple Entry",
        price: "$189",
        requirements: [
            "Valid passport (minimum 6 months validity)",
            "Passport-size photographs",
            "Completed Canada Visa application forms",
            "Travel history (previous visas, stamps)",
            "6-month bank statements",
            "Income proof (ITR, salary slips, business proof)",
            "Proof of funds to cover stay and travel",
            "Travel itinerary",
            "Flight & accommodation planning",
            "Invitation letter (for family visit or business meeting)",
            "Letter of purpose of travel",
            "Invitation letter from Canadian company (for business visa)",
            "Business registration documents (India) (for business visa)",
            "Employer letter / self business letter (for business visa)",
            "Proof of business relations or trade (for business visa)"
        ],
        steps: [
            { title: "Free Eligibility Check", description: "We analyse your purpose, profile, and travel plan." },
            { title: "Personalised Document Checklist", description: "A customised checklist for Tourist or Business Visitor applications." },
            { title: "Professional Document Preparation", description: "We arrange, format and review your entire application to avoid mistakes." },
            { title: "Online Application Filing", description: "We assist with your IRCC portal submission and complete required forms." },
            { title: "Biometrics Appointment Guidance", description: "We help you schedule biometrics at the closest VFS centre and prepare you for it." },
            { title: "Visa Tracking & Updates", description: "We monitor your application and inform you of every update." }
        ],
        faqs: [
            { question: "Do I need confirmed tickets before applying?", answer: "Not required — we guide you to plan safely without early bookings." },
            { question: "Is biometrics compulsory?", answer: "Yes, all Indian applicants must complete biometrics at VFS." },
            { question: "Can I get multiple-entry?", answer: "Most Indian applicants receive multiple-entry visas valid up to 10 years." },
            { question: "Can I work on a Visitor Visa?", answer: "No. The Visitor Visa only allows tourism or short business visits." }
        ]
    },
    australia: {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        title: "Australia Visa for Indians – Tourist & Business Visa Assistance",
        description: "Planning a holiday in Australia or traveling for a business meeting? Smotvisa makes your Australia Tourist Visa and Business Visa process fast, simple and stress-free. With multiple branches across India, our visa experts help you prepare the right documents, avoid errors, and submit a complete application for the best chance of approval.",
        processingTime: "10-25 Working Days",
        validity: "3 Months to 12 Months",
        entryType: "Single / Multiple Entry",
        price: "$219",
        requirements: [
            "Valid passport (at least 6 months validity)",
            "Passport-size photos",
            "Completed visa application form",
            "Travel itinerary (plan & dates)",
            "Bank statements",
            "Income proof (ITR / salary slips / business proof)",
            "Sponsorship letter (if someone else funds your trip)",
            "Invitation letter from Australian company (for business visa)",
            "Company registration / business proof in India (for business visa)",
            "Travel purpose letter from employer or self-declaration (for business visa)",
            "Accommodation confirmations",
            "Travel insurance (optional but recommended)"
        ],
        steps: [
            { title: "Free assessment", description: "We check your travel purpose & eligibility." },
            { title: "Tailored document checklist", description: "You get a simplified list specific to Tourist or Business Visa." },
            { title: "Document preparation", description: "We help arrange, format, and review your financial, travel, and supporting documents." },
            { title: "Visa application filing", description: "We help you with your ImmiAccount submission & VFS steps." },
            { title: "Biometrics guidance", description: "We schedule your biometrics at the nearest VFS center." },
            { title: "Application tracking", description: "We track the file & update you on every movement." }
        ],
        faqs: [
            { question: "Do I need confirmed flight tickets before applying?", answer: "No, we guide you on safe travel planning without losing money." },
            { question: "Is biometrics mandatory for Indian applicants?", answer: "Yes, biometrics is generally required at VFS India." },
            { question: "Can I get multiple-entry?", answer: "Yes, many applicants receive multiple-entry visas depending on eligibility and history." }
        ]
    },
    schengen: {
        id: "schengen",
        name: "Schengen",
        flag: "🇪🇺",
        title: "Schengen Visa from India | Apply Schengen Visa with Expert Assistance – Smotvisa",
        description: "Planning a trip to Europe? Smotvisa helps travellers with end-to-end Schengen visa assistance from document checks and application preparation to appointment booking and post-submission tracking. Our team specialises in B2C visa support for short-stay (up to 90 days) Schengen visas, tailored for tourists, business travellers, students on short courses, and transit passengers.",
        processingTime: "15 Calendar Days",
        validity: "Up to 90 Days in any 180-day period",
        entryType: "Single / Double / Multiple Entry",
        price: "$179",
        requirements: [
            "Valid passport (minimum three months validity after return and at least two blank pages)",
            "Completed and signed visa application form",
            "Two recent biometric photographs meeting Schengen specifications",
            "Proof of travel arrangements (flight itinerary, accommodation)",
            "Proof of financial means (bank statements, salary slips, sponsorship letter)",
            "Proof of travel medical insurance with minimum €30,000 coverage",
            "Proof of civil status (marriage certificate, birth certificate if applicable)",
            "Cover letter explaining purpose and duration of visit",
            "For minors: Birth certificate, consent letter from parents or legal guardians, copies of parents' passports and visas, school NOC"
        ],
        steps: [
            { title: "Personalised visa checklist", description: "Get a custom checklist for your purpose of travel (tourist, business, student, or transit)." },
            { title: "Document verification and review", description: "We verify and review all your documents to ensure compliance with consular standards." },
            { title: "Cover letter and invitation drafting", description: "Our experts draft professional cover letters and help with invitation letters." },
            { title: "Appointment booking", description: "We book your appointment at VFS or consulate for submission." },
            { title: "Photo and travel insurance guidance", description: "We provide guidance on photo specifications and recommend trusted insurance providers." },
            { title: "Application tracking", description: "We track your application until a decision is made." }
        ],
        faqs: [
            { question: "Is Schengen Visa available on arrival for Indian citizens?", answer: "No. There is no visa-on-arrival option for Indian passport holders in Schengen countries. Indians must obtain a valid Schengen visa prior to travelling." },
            { question: "What are the benefits of applying for a Schengen visa?", answer: "A Schengen visa allows non-EU nationals to travel to and move freely between 29 Schengen member countries for short stays (up to 90 days in any 180-day period) for tourism, business, study, or transit purposes." },
            { question: "Can I apply Schengen visa online?", answer: "Yes. Schengen visa applications can be made online through the official portal of the relevant embassy or consulate. Smotvisa assists with the entire online application process." },
            { question: "Where do I submit a Schengen visa application in India?", answer: "Applications must be made at the relevant embassy or authorised application centre (such as VFS Global or BLS International) in India. Smotvisa guides you through the correct mission selection." },
            { question: "How long can I stay with a Schengen Visa?", answer: "Schengen short-stay visas allow up to 90 days in any 180-day period. The exact duration is determined by the consulate based on your travel plans." },
            { question: "Is it possible to extend the Schengen Visa?", answer: "Extensions are rare and granted only in exceptional situations like serious illness, force majeure, or humanitarian reasons. Applications must be made to local immigration authorities in the Schengen country where you are staying." },
            { question: "Can I travel to more than one country with a Schengen Visa?", answer: "Yes. A single Schengen visa allows you to travel to and move freely between all Schengen member countries. However, you must apply to the embassy or consulate of the main destination or the country of first entry." },
            { question: "Who doesn't need to pay for a Schengen visa?", answer: "Children under 6 years of age, students and researchers, and certain other categories may be eligible for free or reduced-fee visas. Smotvisa can help you determine if you qualify for any fee exemptions." },
            { question: "Can a minor apply for a Schengen visa application?", answer: "Yes. Minors can apply for a Schengen visa. Additional documents are required, including birth certificate, consent letter from parents or legal guardians, copies of parents' passports and visas, and school NOC if travelling during academic term." },
            { question: "Who can apply for a Schengen visa in India?", answer: "Indian passport holders and foreign residents in India can apply for a Schengen visa from India. Applications must be made at least 15 calendar days before the intended travel date." },
            { question: "If my application for a Schengen visa is rejected, will I get a refund?", answer: "No. Schengen visa fees are non-refundable, even if your application is rejected. The fee covers the processing of your application, not the issuance of the visa." },
            { question: "What will happen if I extend my stay beyond my visa's validity?", answer: "Overstaying your Schengen visa is a serious offense that can result in fines, deportation, and future visa restrictions. If you need to extend your stay, you must apply for an extension before your current visa expires." },
            { question: "How many months prior to the trip should I apply for a Schengen visa?", answer: "Applications should be made between 6 months and 15 calendar days before the intended travel date. We recommend applying at least 4-6 weeks in advance to ensure enough processing time." },
            { question: "Is it mandatory for Indians to get travel insurance for a Schengen visa?", answer: "Yes. Travel medical insurance is a mandatory part of every Schengen visa application. The insurance must cover at least €30,000 for medical emergencies and repatriation, be valid throughout the Schengen Area, and be active for the entire duration of your trip." }
        ]
    }
};
