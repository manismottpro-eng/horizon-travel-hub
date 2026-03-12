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
        id: "bandra-east-mumbai",
        city: "Bandra East, Mumbai",
        name: "Smotvisa",
        address: "Tower A, Pinnacle Corporate Park, Bandra Kurla Complex, Kole Kalyan, Bandra East, Mumbai, Maharashtra 400051",
        phone: ["+91-8879822338"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sBandra%20East%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our Mumbai office in Bandra East serves as a key hub for visa processing and travel documentation in the financial capital of India.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "kandivali-mumbai",
        city: "Kandivali, Mumbai",
        name: "Smotvisa",
        address: "Room No. 5, 474, Sardar Chawl, Mahaderbhai Desai Road, Kandivali East, Mumbai Suburban Mumbai, Maharashtra 400101",
        phone: ["+91-94823 86529"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sKandivali%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Conveniently located in Kandivali, our Mumbai office provides expert visa services for residents of the western suburbs.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "shivaji-nagar-pune",
        city: "Shivaji Nagar, Pune",
        name: "Smotvisa",
        address: "1, Aparnali, SN 849/1, 184/4, Agarkar Rd, opp. BMCC Road, Shreeman Society, Shivaji Nagar, Deccan Gymkhana, Pune, Maharashtra 411004",
        phone: ["+91-7710988589"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sShivaji%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our Pune office in Shivaji Nagar caters to the vibrant student and professional community in Maharashtra's cultural capital.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018 —trusted by thousands, focused on real support every step."
    },
    {
        id: "yerwada-pune",
        city: "Yerwada, Pune",
        name: "Smotvisa",
        address: "Level 6, Wing 1, Tower A, Business Bay Survey No.103, Hissa No 2, Airport Road, Yerwada, Pune, Maharashtra 411006",
        phone: ["+91-94823 86529"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sYerwada%2C%20Pune!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Located in Yerwada, our Pune office provides comprehensive visa and travel services to residents of eastern Pune.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "delhi",
        city: "Delhi",
        name: "Smotvisa",
        address: "2nd floor, Regal Building, Connaught Place, Hanuman Road Area, New Delhi, Delhi 110001",
        phone: ["+91-94823 86529"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sConnaught%20Place%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our Delhi office in Connaught Place serves as a strategic hub for visa services in India's capital city.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "walter-visakhapatnam",
        city: "Walter, Visakhapatnam",
        name: "Smotvisa",
        address: "First Floor, Plot no 21, Beach Rd, Kirlampudi Layout, Chinna Waltair, Pedda Waltair, Visakhapatnam, Andhra Pradesh 530017",
        phone: ["+91-9108233560"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sVisakhapatnam!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our Visakhapatnam office in Walter area caters to the needs of travelers from Andhra Pradesh's coastal region.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "cv-raman-nagar-bangalore",
        city: "CV Raman Nagar, Bangalore",
        name: "Smotvisa",
        address: "80/1 Earthen latitudes, S.S.commercial estates, Nagavarapalya, C V Raman Nagar, Bengaluru, Karnataka 560093",
        phone: ["+91-9380957448"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9176880295147!2d77.6631855!3d12.977114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116e03886561%3A0x6b772b25114ccb4b!2sNagvarpalya%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our premier office in Bengaluru serves as a hub for visa processing and travel documentation. Located in the tech corridor, we provide expert guidance for international travel.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "ahmedabad",
        city: "Ahmedabad",
        name: "Smotvisa",
        address: "1st Floor, East Wing, Privilon, Ambli Road, Sarkhej, Gandhinagar Highway, Ahmedabad, Gujarat 380058",
        phone: ["+91-8951697588"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sAhmedabad!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our Ahmedabad office provides comprehensive visa services to the vibrant business community in Gujarat.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
    },
    {
        id: "jaipur",
        city: "Jaipur",
        name: "Smotvisa",
        address: "247/3, Vashisht Marg, near Jawahar Nagar, Raja Park, Jaipur, Rajasthan, 302004",
        phone: ["+91-7710988589"],
        email: "info@smotvisa.com",
        website: "www.smotvisa.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.739429860393!2d72.8543!3d19.0544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d8d8d8d8d8%3A0x1234567890abcdef!2sJaipur!5e0!3m2!1sen!2sin!4v1710000000000",
        description: "Our Jaipur office caters to the travel needs of residents in Rajasthan, providing expert visa and documentation services.",
        images: ["https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop"],
        features: ["Express Visa Processing", "Document Verification", "Consultation Hub", "24/7 Support Access"],
        aboutOrg: "Making passports and visas simple since 2018—trusted by thousands, focused on real support every step."
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