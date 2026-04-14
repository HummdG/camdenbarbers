import type { Service, Barber, Testimonial } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "mens-wash-cut-finish",
    name: "Men — Wash, Haircut & Finish",
    price: 27,
    priceDisplay: "£27",
    durationMins: 30,
    durationDisplay: "30 mins",
    description:
      "A thorough wash followed by a precision cut and professional finish. Your barber consults on style before picking up the scissors.",
    category: "haircut",
  },
  {
    id: "mens-beard-trim",
    name: "Men — Beard Trim & Shape (With Line-Up)",
    price: 15,
    priceDisplay: "£15",
    durationMins: 20,
    durationDisplay: "20 mins",
    description:
      "Sculpted beard shaping with a defined line-up for clean edges. Keeps your beard looking sharp between full grooming visits.",
    category: "beard",
  },
  {
    id: "mens-skin-fade",
    name: "Men — Skin Fade",
    price: 27,
    priceDisplay: "£27",
    durationMins: 30,
    durationDisplay: "30 mins",
    description:
      "A seamless fade from skin to length, tailored to your head shape. One of our most requested cuts — clean, sharp, and timeless.",
    category: "haircut",
  },
  {
    id: "mens-hot-towel-shave",
    name: "Men — Hot Towel Shave",
    price: 23,
    priceDisplay: "£23",
    durationMins: 30,
    durationDisplay: "30 mins",
    description:
      "A traditional wet shave with hot towels, pre-shave oil, and a straight razor. The definitive close shave.",
    category: "shave",
  },
  {
    id: "mens-full-package",
    name: "Men — Full Barbering Package",
    price: 50,
    priceDisplay: "£50",
    durationMins: 90,
    durationDisplay: "1 hr 30 mins",
    description:
      "Our complete grooming experience: wash, cut, style, beard trim, and hot towel finish. Arrive as you are, leave at your best.",
    category: "package",
  },
];

export const BARBERS: Barber[] = [
  {
    id: "mo",
    name: "Mo",
    bio: "A Camden institution with a reputation for precision and creativity. Mo's attention to detail and ability to execute any style — from clean fades to intricate designs — has made him one of North London's most sought-after barbers.",
    speciality: "Skin Fades & Creative Designs",
    isAny: false,
  },
  {
    id: "kamal",
    name: "Kamal",
    bio: "Kamal brings calm expertise and a craftsman's eye to every cut. Known for his patience and consistent results, he takes the time to understand exactly what you want — and delivers it every time.",
    speciality: "Classic Cuts & Beard Work",
    isAny: false,
  },
  {
    id: "any",
    name: "Any Available",
    bio: "Let us match you with the first available barber. All our team members deliver the same standard of quality and care.",
    speciality: "All Services",
    isAny: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    reviewer: "Google Review",
    text: "Mo at Camden Barbers cut a snowflake design into my undercut. He understood the explanation and used a photo as a guide but made it even better to fit perfectly. He was lovely and efficient. Would highly recommend and I will be going back.",
    rating: 5,
  },
  {
    id: "2",
    reviewer: "Cee Chapman",
    text: "Top tier service. I got a low taper fade done in under half an hour. Very friendly and accommodating. Definitely going again.",
    rating: 5,
  },
  {
    id: "3",
    reviewer: "Ian Stanton",
    text: "Best barbers in North London. Very reasonable, highly skilled and experienced barbers, and very friendly.",
    rating: 5,
  },
  {
    id: "4",
    reviewer: "Michael Preston",
    text: "Mo is an incredibly skilled and professional barber. Great attention to detail and consistently excellent results.",
    rating: 5,
  },
  {
    id: "5",
    reviewer: "David Martinez",
    text: "I've been coming here for almost 10 years and never switched to another barber.",
    rating: 5,
  },
  {
    id: "6",
    reviewer: "Uri Barak",
    text: "Full package experience was amazing. Professional, precise, and a great atmosphere. Highly recommend.",
    rating: 5,
  },
  {
    id: "7",
    reviewer: "Mohammad Qadirpur",
    text: "Clean shop, welcoming atmosphere, runs on time, and delivers exactly what you ask for.",
    rating: 5,
  },
  {
    id: "8",
    reviewer: "Francisco Brewer",
    text: "Mo is my go-to barber. Always delivers with care and attention.",
    rating: 5,
  },
  {
    id: "9",
    reviewer: "Simon Dawson",
    text: "Great barber, excellent cut, very friendly. Will definitely return.",
    rating: 5,
  },
  {
    id: "10",
    reviewer: "Rhubarber",
    text: "Walked in and had a great experience. Friendly service and very attentive.",
    rating: 5,
  },
  {
    id: "11",
    reviewer: "Syed Muhammad Ali Mustafa",
    text: "Best place for a haircut in London. Friendly staff and fair prices.",
    rating: 5,
  },
  {
    id: "12",
    reviewer: "O",
    text: "Amazing haircut and very friendly. Made me feel comfortable.",
    rating: 5,
  },
  {
    id: "13",
    reviewer: "Nancy Fricker",
    text: "Great with children and very professional. My son loves coming here.",
    rating: 5,
  },
  {
    id: "14",
    reviewer: "James Baxter",
    text: "Great barbers. Never disappointed and always a friendly atmosphere.",
    rating: 5,
  },
  {
    id: "15",
    reviewer: "Xhino Hysaj",
    text: "Best haircut I've ever had. Will definitely go back.",
    rating: 5,
  },
  {
    id: "16",
    reviewer: "Hena Begum",
    text: "Very friendly, professional and kind. Great with special needs customers.",
    rating: 5,
  },
  {
    id: "17",
    reviewer: "EverythingArsenal",
    text: "Quality haircuts, great atmosphere, very reasonable prices.",
    rating: 5,
  },
  {
    id: "18",
    reviewer: "Mazhar Jabakhanji",
    text: "Very kind staff, even accommodated a walk-in. Great haircut and experience.",
    rating: 5,
  },
  {
    id: "19",
    reviewer: "Soph",
    text: "Amazing attention to detail. Very happy with the service.",
    rating: 5,
  },
  {
    id: "20",
    reviewer: "Rees Goodman-Smith",
    text: "Great haircut and really nice team. Highly recommend.",
    rating: 5,
  },
  {
    id: "21",
    reviewer: "Ciarán Flynn",
    text: "Great haircut and atmosphere. Highly recommend.",
    rating: 5,
  },
  {
    id: "22",
    reviewer: "Sven F",
    text: "Friendly team, clean environment, and very satisfying result.",
    rating: 5,
  },
  {
    id: "23",
    reviewer: "Luong Me",
    text: "Mo is one of the best barbers in London. Very passionate and skilled.",
    rating: 5,
  },
  {
    id: "24",
    reviewer: "Jeff Greezman",
    text: "Very professional full treatment. Highly recommended.",
    rating: 5,
  },
  {
    id: "25",
    reviewer: "Ali Ahmad",
    text: "Great experience for visitors. Highly recommend trying this shop.",
    rating: 5,
  },
  {
    id: "26",
    reviewer: "63R",
    text: "One of the best haircuts I've ever had.",
    rating: 5,
  },
  {
    id: "27",
    reviewer: "W J",
    text: "One of the best barbers in London. Great quality and fair pricing.",
    rating: 5,
  },
  {
    id: "28",
    reviewer: "Ahmed Imon",
    text: "Best barbers ever. Highly recommend.",
    rating: 5,
  },
  {
    id: "29",
    reviewer: "Patrick Gibbons",
    text: "Always a warm welcome and a great haircut.",
    rating: 5,
  },
  {
    id: "30",
    reviewer: "Kawan Mustafa",
    text: "Best haircut. Would recommend to everyone.",
    rating: 5,
  },
  {
    id: "31",
    reviewer: "Shahimul Hussain",
    text: "Fast service, great care, and excellent results.",
    rating: 5,
  },
  {
    id: "32",
    reviewer: "Ahmed Abbas",
    text: "After trying many barbers, this is the only one I trust. Amazing service.",
    rating: 5,
  },
  {
    id: "33",
    reviewer: "Vladimir Fabregues",
    text: "Very welcoming and professional. Never been disappointed.",
    rating: 5,
  },
];

export const BUSINESS = {
  name: "Camden Barbers",
  address: "22 Camden Rd, London NW1 9DP",
  phone: "020 3662 5328",
  phoneHref: "tel:02036625328",
  whatsapp: "https://wa.me/442036625328",
  instagram: "https://instagram.com/camdenbarbers",
  hours: [
    { day: "Monday", open: "09:00", close: "19:00" },
    { day: "Tuesday", open: "09:00", close: "19:00" },
    { day: "Wednesday", open: "09:00", close: "19:00" },
    { day: "Thursday", open: "09:00", close: "19:00" },
    { day: "Friday", open: "09:00", close: "19:00" },
    { day: "Saturday", open: "09:00", close: "19:00" },
    { day: "Sunday", open: null, close: null },
  ],
  hoursDisplay: "Mon – Sat: 9:00am – 7:00pm",
  googleMaps:
    "https://maps.google.com/?q=22+Camden+Rd,+London+NW1+9DP",
} as const;
