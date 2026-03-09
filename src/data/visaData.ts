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
        title: "US B1/B2 Visitor Visa",
        description: "The B1/B2 visa is for people who want to visit the United States temporarily for business (B1), tourism, or medical treatment (B2).",
        processingTime: "Varies (Appointment Based)",
        validity: "Up to 10 Years",
        entryType: "Multiple Entry",
        price: "$249",
        requirements: [
            "Valid passport (at least 6 months validity)",
            "Digital photograph meeting US visa requirements",
            "Form DS-160 confirmation page",
            "Visa fee payment receipt",
            "Evidence of funds for the trip",
            "Proof of ties to home country"
        ],
        steps: [
            { title: "Form DS-160", description: "Complete the online Nonimmigrant Visa Electronic Application." },
            { title: "Fee Payment", description: "Pay the non-refundable visa application processing fee." },
            { title: "Schedule Appointment", description: "Book your interview appointment at the nearest US Embassy or Consulate." },
            { title: "Attend Interview", description: "Present your documents and answer questions from the consular officer." }
        ],
        faqs: [
            { question: "How long can I stay on a B1/B2 visa?", answer: "The period of stay is determined by the immigration officer at the port of entry, typically up to 6 months." },
            { question: "Can I renew my US visa without an interview?", answer: "Many applicants qualify for an interview waiver (dropbox) if their previous visa expired recently." }
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
