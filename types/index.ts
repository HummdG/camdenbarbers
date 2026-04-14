export interface Service {
  id: string;
  name: string;
  price: number;
  priceDisplay: string;
  durationMins: number;
  durationDisplay: string;
  description: string;
  category: "haircut" | "beard" | "package" | "shave";
}

export interface Barber {
  id: string;
  name: string;
  bio: string;
  speciality: string;
  isAny: boolean;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface BookingFormState {
  serviceId: string | null;
  barberId: string | null;
  date: string | null;
  timeSlot: string | null;
  name: string;
  phone: string;
  notes: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  barberId: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  notes: string;
  createdAt: string;
}

export interface BookingResponse {
  success: true;
  bookingId: string;
  reference: string;
  message: string;
}

export interface BookingError {
  success: false;
  error: string;
}

export type BookingStep =
  | "service"
  | "barber"
  | "date"
  | "time"
  | "contact"
  | "confirmation";

export interface Testimonial {
  id: string;
  reviewer: string;
  text: string;
  rating: number;
}
