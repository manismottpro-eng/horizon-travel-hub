import dubaiImg from "@/assets/dubai.jpg";
import londonImg from "@/assets/london.jpg";
import visaImg from "@/assets/visa-services.jpg";

export interface BlogPost {
    id: string;
    image: string;
    category: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    readTime: string;
}

export const blogs: BlogPost[] = [
    {
        id: "us-visa-guide",
        image: visaImg,
        category: "Visa Tips",
        title: "Complete Guide to US Tourist Visa Application in 2026",
        excerpt: "Everything you need to know about applying for a B1/B2 visa, from documents to interview tips.",
        content: `
            Applying for a US Tourist Visa (B1/B2) can be a daunting process, but with the right preparation, it becomes much more manageable. In 2026, the process remains rigorous, focusing on your intent to return to your home country and your financial stability.

            ### Key Requirements
            1. **Valid Passport:** Must be valid for at least six months beyond your stay.
            2. **DS-160 Form:** The online non-immigrant visa application.
            3. **Application Fee:** Payment receipt for the visa processing fee.
            4. **Photo:** Digital photo following specific US visa requirements.

            ### The Interview Process
            The interview is the most critical part. You must demonstrate strong ties to your home country. Be prepared to discuss your job, family, and property ownership. Honesty is paramount—never provide misleading information.

            ### Tips for Success
            *   Prepare all documents in an organized folder.
            *   Be concise and direct in your answers during the interview.
            *   Explain your travel plans clearly.
            *   Provide evidence of financial means to cover your trip.
        `,
        author: "Smart Pro Team",
        date: "Mar 5, 2026",
        readTime: "6 min read"
    },
    {
        id: "dubai-visit-tips",
        image: dubaiImg,
        category: "Destinations",
        title: "Top 10 Things to Do in Dubai on Your First Visit",
        excerpt: "From the Burj Khalifa to desert safaris, discover the best experiences Dubai has to offer.",
        content: `
            Dubai is a city of superlatives—home to the world's tallest building, the largest shopping mall, and some of the most luxurious hotels. If it's your first time, the variety of options can be overwhelming.

            ### Must-Visit Landmarks
            1. **Burj Khalifa:** Witness the breathtaking views from the 124th and 148th floors.
            2. **The Dubai Mall:** More than just shopping; it's an entertainment hub with an aquarium and ice rink.
            3. **Palm Jumeirah:** The iconic man-made island offers luxury resorts and beach clubs.
            4. **Old Dubai (Al Fahidi):** Experience the traditional side of the city with its heritage area and gold souks.

            ### Adventures and Experiences
            *   **Desert Safari:** A quintessential Dubai experience featuring dune bashing, camel rides, and dinner under the stars.
            *   **Dubai Marina:** Perfect for an evening stroll or a yacht cruise.
            *   **Museum of the Future:** A glimpse into what lies ahead through innovative technology and design.

            ### Planning Your Trip
            The best time to visit is from November to March when the weather is pleasant for outdoor activities. Respect local customs and dress modestly in public areas.
        `,
        author: "Travel Desk",
        date: "Feb 28, 2026",
        readTime: "5 min read"
    },
    {
        id: "uk-visa-updates",
        image: londonImg,
        category: "Travel Guide",
        title: "UK Visa Requirements: What Changed in 2026",
        excerpt: "Updated requirements and processing times for UK Standard Visitor Visa applications.",
        content: `
            The UK immigration landscape has seen several updates heading into 2026. Whether you're visiting for tourism, business, or family, staying informed about these changes is crucial for a successful application.

            ### Standard Visitor Visa Updates
            The Standard Visitor Visa remains the primary route for short-term stays. However, processing times and financial thresholds have been adjusted to reflect current economic conditions.

            ### Essential Documentation
            *   **Financial Evidence:** 6 months of bank statements are now strictly required.
            *   **Accommodation Proof:** Confirmed bookings or a letter from your host.
            *   **Ties to Home:** Employment letters must specifically mention approved leave dates.

            ### Digitalization of the Process
            The UK is moving towards a fully digital immigration system. Many applicants can now use the 'UK Immigration: ID Check' app, reducing the need for physical biometrics appointments in certain regions.

            ### Processing Times
            Standard processing is currently averaging 3 weeks, but we recommend applying at least 2 months in advance to account for seasonal peaks.
        `,
        author: "Visa Expert",
        date: "Feb 20, 2026",
        readTime: "4 min read"
    },
];
