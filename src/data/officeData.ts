export interface Office {
    id: string;
    city: string;
    name: string;
    address: string;
    phone: string[];
    email?: string;
    website?: string;
    mapUrl: string;
    description: string;
    images: string[];
    features: string[];
    aboutOrg: string;
}

export const offices: Office[] = [
    {
        id: "bengaluru-nagvarpalya",
        city: "Bengaluru",
        name: "Smotpro Overseas LLP",
        address: "#80/1, 1st Floor, Earthern Latitude, SS Commercial Estate, Nagvarpalya, CV Raman Nagar, Bengaluru, Karnataka - 560093",
        phone: ["+91 9972600544"],
        website: "www.smotllp.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9176880295147!2d77.6631855!3d12.977114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116e03886561%3A0x6b772b25114ccb4b!2sNagvarpalya%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our premier office in Bengaluru serves as a hub for visa processing and travel documentation. Located in the tech corridor, we provide expert guidance for international travel.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Smotpro Overseas LLP is a leading travel consultancy specializing in visa services, documentation, and international tour planning. With years of experience, we ensure a seamless journey for our clients."
    },
    {
        id: "dubai",
        city: "Dubai",
        name: "Smotpro Overseas Co LLC",
        address: "On Central Level 3, The office 3, Dubai World Trade Centre, Sheik Syed Road, Dubai-9573",
        phone: ["+971 54 405 4436", "+971 55 285 7479"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.52553950669!2d55.2863483!3d25.2225389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433939632833%3A0x7d00f6848035bc2b!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Strategically located in the Dubai World Trade Centre, our Middle East headquarters specializes in GCC visas, business travel, and luxury tour packages.",
        images: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"],
        features: ["GCC Visa Expertise", "Business Travel Concierge", "Multi-lingual Staff", "VIP Lounge Access"],
        aboutOrg: "Smotpro Overseas Co LLC extends our global reach into the UAE, offering world-class travel solutions tailored to the unique needs of the Middle Eastern market."
    },
    {
        id: "poland",
        city: "Poland",
        name: "Warsaw Office",
        address: "Aleja Solidanosci 117/712, (Floor 7) 00-140 Warsaw, Poland",
        phone: ["+48 531 737 254", "+48 537 002 346"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4374330680126!2d20.9984!3d52.2411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc66a2139829%3A0xe744e3e3b0b57ea3!2sAleja%20Solidarno%C5%9Bci%20117%2C%2000-140%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our European gateway in Warsaw provides specialized services for Schengen visas, work permits, and European residency documentation.",
        images: ["https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=800&auto=format&fit=crop"],
        features: ["Schengen Visa Center", "Work Permit Assistance", "EU Residency Advisory", "Local Expertise"],
        aboutOrg: "Our Warsaw office is dedicated to bridging the gap between Europe and the rest of the world, providing reliable documentation services for travelers and professionals alike."
    },
    {
        id: "bangalore-bellary",
        city: "Bangalore",
        name: "Corporate Office",
        address: "10th floor, RMZ Latitude Commercial Building, Bellary Rd, Vinayakanagar, Byatarayanapura, Bengaluru, Karnataka 560024",
        phone: ["+91 9355532707"],
        email: "info@smotprollp.in",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6322849553657!2d77.5891395!3d13.059039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1864f1d5300d%3A0x520a7b6863d09e7c!2sRMZ%20Latitude!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our global corporate headquarters manages our worldwide operations and ensures the highest standards of service across all branches.",
        images: ["https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"],
        features: ["Global Operations Hub", "Executive Consultation", "Strategic Partnerships", "Bulk Visa Solutions"],
        aboutOrg: "Smotpro Overseas LLP is committed to making international travel accessible and hassle-free for everyone. Our corporate office drives our mission of excellence and innovation in the travel industry."
    }
];

export const seoLocations = [
    "HSR Layout",
    "Indiranagar",
    "KR Puram",
    "Koramangala",
    "Whitefield",
    "Jayanagar",
    "Marathahalli",
    "Electronic City"
];
