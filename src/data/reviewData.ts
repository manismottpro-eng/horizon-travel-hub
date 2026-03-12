// Review Type
export interface Review {
  id: string;
  name: string;
  avatar: string;
  role: string;
  rating: number;
  comment: string;
  location: string;
}

// Sample review data (can be expanded or fetched from API later)
export const fetchReviews = async (): Promise<Review[]> => {
  // For now, return static data. This can be replaced with API call if needed.
  return [
    {
      id: "1",
      name: "Priya Sharma",
      avatar: "https://picsum.photos/seed/priya/100/100",
      role: "Business Traveler",
      rating: 5,
      comment: "Smot Visa made my business visa process seamless and stress-free. Their team guided me through every step, and my visa was approved in record time!",
      location: "Mumbai, India"
    },
    {
      id: "2",
      name: "Rajesh Patel",
      avatar: "https://picsum.photos/seed/rajesh/100/100",
      role: "Family Vacationer",
      rating: 5,
      comment: "We planned our dream family vacation to Europe with Smot Visa. Their personalized itinerary and attention to detail made our trip unforgettable.",
      location: "Ahmedabad, India"
    },
    {
      id: "3",
      name: "Anita Desai",
      avatar: "https://picsum.photos/seed/anita/100/100",
      role: "Student Abroad",
      rating: 4,
      comment: "As an international student, Smot Visa helped me navigate the complex student visa process. Their experts provided valuable insights and support.",
      location: "Bangalore, India"
    },
    {
      id: "4",
      name: "Vikram Singh",
      avatar: "https://picsum.photos/seed/vikram/100/100",
      role: "Adventure Traveler",
      rating: 5,
      comment: "Smot Visa organized an amazing adventure trip to the Himalayas. From permits to accommodation, everything was perfectly arranged.",
      location: "New Delhi, India"
    }
  ];
};
