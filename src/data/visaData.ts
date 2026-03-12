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
        title: "UK Standard Visitor Visa",
        description: "Visit the UK for leisure, business, or other reasons for up to 6 months.",
        processingTime: "15-20 Working Days",
        validity: "6 Months / 2 Years / 5 Years",
        entryType: "Multiple Entry",
        price: "$199",
        requirements: [
            "Valid passport",
            "Proof of financial support",
            "Travel itinerary",
            "Employment details",
            "Accommodation details"
        ],
        steps: [
            { title: "Apply Online", description: "Fill out the online application form on the official GOV.UK website." },
            { title: "Pay Fees", description: "Pay the visa fee and healthcare surcharge (if applicable)." },
            { title: "Biometrics", description: "Visit a visa application center to provide your fingerprints and photograph." },
            { title: "Decision", description: "Wait for your application to be processed and collect your passport." }
        ],
        faqs: [
            { question: "Can I work on a standard visitor visa?", answer: "No, you cannot take up paid or unpaid work in the UK on this visa." }
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
        title: "Canada Visitor Visa (TRV)",
        description: "Whether visiting family or exploring the great outdoors, Canada welcomes you with a Temporary Resident Visa.",
        processingTime: "25-45 Working Days",
        validity: "Up to 10 Years (or passport expiry)",
        entryType: "Multiple Entry",
        price: "$189",
        requirements: [
            "Valid passport",
            "Bank statements (past 6 months)",
            "Employment/Business documents",
            "Travel history",
            "Purpose of visit letter"
        ],
        steps: [
            { title: "Online Application", description: "Submit your application through the IRCC portal." },
            { title: "Biometrics", description: "Give your fingerprints and photo at a VAC." },
            { title: "Passport Request", description: "If approved, you'll be asked to send your passport for stamping." }
        ],
        faqs: [
            { question: "Do I need an eTA or a Visa?", answer: "This depends on your citizenship. Some countries only need an Electronic Travel Authorization." }
        ]
    },
    australia: {
        id: "australia",
        name: "Australia",
        flag: "🇦🇺",
        title: "Australia Visitor Visa (Subclass 600)",
        description: "The visitor visa allows you to visit Australia for tourism, business, or to see family.",
        processingTime: "20-30 Working Days",
        validity: "3 Months / 6 Months / 12 Months",
        entryType: "Single / Multiple Entry",
        price: "$219",
        requirements: [
            "Passport copy",
            "National ID",
            "Financial capacity evidence",
            "Employment evidence",
            "Travel plan"
        ],
        steps: [
            { title: "ImmiAccount", description: "Submit application via the Home Affairs ImmiAccount." },
            { title: "Biometrics", description: "Attend a biometrics collection point if required." },
            { title: "Visa Grant", description: "Receive your visa grant notification via email." }
        ],
        faqs: [
            { question: "Can I extend my stay in Australia?", answer: "You must apply for a new visa before your current one expires if you wish to stay longer." }
        ]
    },
    schengen: {
        id: "schengen",
        name: "Schengen",
        flag: "🇪🇺",
        title: "Schengen Short-Stay Visa",
        description: "Visit 27 European countries in the Schengen area with a single visa.",
        processingTime: "15-30 Working Days",
        validity: "Up to 90 Days in any 180-day period",
        entryType: "Single / Multiple Entry",
        price: "$179",
        requirements: [
            "Passport (valid 3 months beyond stay)",
            "Schengen Travel Insurance",
            "Flight reservation",
            "Proof of accommodation",
            "Proof of financial means"
        ],
        steps: [
            { title: "Determine Jurisdiction", description: "Apply to the embassy of your main destination country." },
            { title: "Book Appointment", description: "Schedule an interview time." },
            { title: "Attend & Biometrics", description: "Submit documents and give biometrics at the center." }
        ],
        faqs: [
            { question: "Which country should I apply to?", answer: "Apply to the country where you will spend the most time, or your first point of entry if time is equal." }
        ]
    }
};
