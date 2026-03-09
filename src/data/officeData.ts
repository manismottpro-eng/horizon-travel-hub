export interface Office {
    id: string;
    city: string;
    name: string;
    address: string;
    phone: string[];
    email?: string;
    website?: string;
    mapUrl: string;
}

export const offices: Office[] = [
    {
        id: "bengaluru-nagvarpalya",
        city: "Bengaluru",
        name: "Smotpro Overseas LLP",
        address: "#80/1, 1st Floor, Earthern Latitude, SS Commercial Estate, Nagvarpalya, CV Raman Nagar, Bengaluru, Karnataka - 560093",
        phone: ["+91 9972600544"],
        website: "www.smotllp.com",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9176880295147!2d77.6631855!3d12.977114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae116e03886561%3A0x6b772b25114ccb4b!2sNagvarpalya%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000"
    },
    {
        id: "dubai",
        city: "Dubai",
        name: "Smotpro Overseas Co LLC",
        address: "On Central Level 3, The office 3, Dubai World Trade Centre, Sheik Syed Road, Dubai-9573",
        phone: ["+971 54 405 4436", "+971 55 285 7479"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.52553950669!2d55.2863483!3d25.2225389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f433939632833%3A0x7d00f6848035bc2b!2sDubai%20World%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1710000000000"
    },
    {
        id: "poland",
        city: "Poland",
        name: "Warsaw Office",
        address: "Aleja Solidanosci 117/712, (Floor 7) 00-140 Warsaw, Poland",
        phone: ["+48 531 737 254", "+48 537 002 346"],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.4374330680126!2d20.9984!3d52.2411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc66a2139829%3A0xe744e3e3b0b57ea3!2sAleja%20Solidarno%C5%9Bci%20117%2C%2000-140%20Warszawa%2C%20Poland!5e0!3m2!1sen!2sin!4v1710000000000"
    },
    {
        id: "bangalore-bellary",
        city: "Bangalore",
        name: "Corporate Office",
        address: "10th floor, RMZ Latitude Commercial Building, Bellary Rd, Vinayakanagar, Byatarayanapura, Bengaluru, Karnataka 560024",
        phone: ["+91 9355532707"],
        email: "info@smotprollp.in",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6322849553657!2d77.5891395!3d13.059039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1864f1d5300d%3A0x520a7b6863d09e7c!2sRMZ%20Latitude!5e0!3m2!1sen!2sin!4v1710000000000"
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
