
import { Section3Image, Feature1Image2,Feature1image1,adminImage,customerImage,bookingImage ,ProductImage1,
  ProductImage2,ProductImage3,} from "../assets";
  

  export const features = [
    {
      id: "feature-1",
      title: "Easy Turf Booking",
      description: "Reserve your turf slot effortlessly with a user-friendly interface.",
      icon: "fas fa-calendar-check",
      link: "/feature/easy-turf-booking",
      color: "#FF6B35",
    },
    {
      id: "feature-2",
      title: "Real-Time Availability",
      description: "Check live turf availability and secure your slot instantly.",
      icon: "fas fa-clock",
      link: "/feature/real-time-availability",
      color: "#4ECDC4",
    },
    {
      id: "feature-3",
      title: "Team Management",
      description: "Organize teams, invite players, and manage matches seamlessly.",
      icon: "fas fa-users",
      link: "/feature/team-management",
      color: "#FF9F1C",
    },
    {
      id: "feature-4",
      title: "Instant Notifications",
      description: "Receive immediate booking confirmations and reminders.",
      icon: "fas fa-bell",
      link: "/feature/instant-notifications",
      color: "#7B68EE",
    },
    {
      id: "feature-5",
      title: "Multiple Turf Options",
      description: "Choose from various turfs tailored to your sport and location.",
      icon: "fas fa-map-marker-alt",
      link: "/feature/multiple-turf-options",
      color: "#3A86FF",
    },
    {
      id: "feature-6",
      title: "Secure Payments",
      description: "Pay safely with multiple payment options and deposit support.",
      icon: "fas fa-credit-card",
      link: "/feature/secure-payments",
      color: "#8AC926",
    },
    {
      id: "feature-7",
      title: "Tournament Organizer",
      description: "Plan and manage tournaments with automated brackets.",
      icon: "fas fa-trophy",
      link: "/feature/tournament-organizer",
      color: "#FF6B35",
    },
    {
      id: "feature-8",
      title: "Custom Reminders",
      description: "Set personalized reminders for players and organizers.",
      icon: "fas fa-envelope",
      link: "/feature/custom-reminders",
      color: "#4ECDC4",
    },
    {
      id: "feature-9",
      title: "Group Bookings",
      description: "Book slots for multiple players or teams in one session.",
      icon: "fas fa-user-friends",
      link: "/feature/group-bookings",
      color: "#FF9F1C",
    },
    {
      id: "feature-10",
      title: "Multi-Location Management",
      description: "Manage all turf locations from a single dashboard.",
      icon: "fas fa-globe",
      link: "/feature/multi-location-management",
      color: "#7B68EE",
    },
    {
      id: "feature-11",
      title: "Player Profiles",
      description: "Track player stats and preferences in detailed profiles.",
      icon: "fas fa-user",
      link: "/feature/player-profiles",
      color: "#3A86FF",
    },
    {
      id: "feature-12",
      title: "Virtual Translator",
      description: "Translate the booking panel into multiple languages.",
      icon: "fas fa-language",
      link: "/feature/virtual-translator",
      color: "#8AC926",
    },
    {
      id: "feature-13",
      title: "Google reCAPTCHA",
      description: "Protect your platform from bots with secure verification.",
      icon: "fas fa-shield-alt",
      link: "/feature/google-recaptcha",
      color: "#FF6B35",
    },
    {
      id: "feature-14",
      title: "Manageable Calendar",
      description: "Track staff and turf schedules with flexible filters.",
      icon: "fas fa-calendar-alt",
      link: "/feature/manageable-calendar",
      color: "#4ECDC4",
    },
    {
      id: "feature-15",
      title: "Social Login",
      description: "Simplify sign-ups with Google and Facebook integration.",
      icon: "fas fa-sign-in-alt",
      link: "/feature/social-login",
      color: "#FF9F1C",
    },
  ];
// Mock data for sports grounds
export const sportsGroundsData = [
  {
    id: 1,
    name: "Old Trafford",
    category: "Football",
    location: "Manchester, UK",
    image: "/images/old_trafford.jpg",
    link: "https://turfvi.com/ignite?iframe=1",
  },
  {
    id: 2,
    name: "MCG",
    category: "Cricket",
    location: "Melbourne, Australia",
    image: "/images/mcg.jpg",
    link: "https://turfvi.com/mcg?iframe=1",
  },
  {
    id: 3,
    name: "Eden Gardens",
    category: "Cricket",
    location: "Kolkata, India",
    image: "/images/eden_gardens.jpg",
    link: "https://turfvi.com/eden?iframe=1",
  },
  {
    id: 4,
    name: "Wembley Stadium",
    category: "Football",
    location: "London, UK",
    image: "/images/wembley.jpg",
    link: "https://turfvi.com/wembley?iframe=1",
  },
  {
    id: 5,
    name: "Chidambaram Stadium",
    category: "Cricket",
    location: "Chennai, India",
    image: "/images/chidambaram.jpg",
    link: "https://turfvi.com/chidambaram?iframe=1",
  },
  {
    id: 6,
    name: "Maracanã",
    category: "Football",
    location: "Rio de Janeiro, Brazil",
    image: "/images/maracana.jpg",
    link: "https://turfvi.com/maracana?iframe=1",
  },
];

// Country list - Demo Form

export const countryList = [
  "Sri Lanka",
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "Germany",
  "France",
  "Japan",
  "China",
];

// About Section Data For Feature 3 Component 

export const featureData = [
  {
    title: "WHY TURF VI?",
    content: [
      "Turf VI provides the best sports grounds equipped with world-class facilities and services.",
      "We focus on delivering top-notch sports infrastructure for every kind of game.",
      "Our venues are available for a wide range of sports, including football, cricket, and more.",
    ],
    list: [
      "High-quality turf and grass fields",
      "Professional-grade equipment",
      "Flexible booking options",
    ],
    image: Section3Image,
  },
];


// tabs data for Featuresection2 

export const tabsData = [
  {
    id: 1,
    title: "Admin Panel",
    imageUrl: adminImage,
    content: "Discover beautiful natural landscapes from around the world.",
  },
  {
    id: 2,
    title: "Customer Pannel",
    imageUrl: customerImage,
    content: "Experience the vibrant energy of cities across the globe.",
  },
  {
    id: 3,
    title: "Booking panel",
    imageUrl: bookingImage,
    content: "See the latest advancements in technology and gadgets.",
  },
];


// Product List for product component 

export const products = [
  {
    id: 1,
    name: "Football",
    category: "Sports",
    image: ProductImage1,
    description: "High-quality football for professional matches.",
    price: 29.99,
  },
  {
    id: 2,
    name: "Cricket Bat",
    category: "Sports",
    image: ProductImage2,
    description: "Premium wooden cricket bat for all levels.",
    price: 49.99,
  },
  {
    id: 3,
    name: "Basketball",
    category: "Sports",
    image: ProductImage3,
    description: "Durable basketball for indoor and outdoor play.",
    price: 19.99,
  },
  {
    id: 4,
    name: "Tennis Racket",
    category: "Sports",
    image: ProductImage1,
    description: "Lightweight and strong tennis racket for professionals.",
    price: 59.99,
  },
];


// Testimonials data for the testimonial component

export const testimonials = [
  {
    text: "This sports ground is amazing! The facilities are top-notch and well-maintained.",
    name: "John Doe",
    rating: 5,
  },
  {
    text: "I love playing here! The environment is perfect for competitive matches.",
    name: "Jane Smith",
    rating: 4,
  },
  {
    text: "Best ground in town! Highly recommended for all sports enthusiasts.",
    name: "Michael Brown",
    rating: 5,
  },
];



