import type { Booking } from "@/types";

const bookings = new Map<string, Booking>();

function generateReference(): string {
  let ref: string;
  let attempts = 0;
  do {
    const num = Math.floor(1000 + Math.random() * 9000);
    ref = `CAM-${num}`;
    attempts++;
  } while (bookings.has(ref) && attempts < 100);
  return ref;
}

export function addBooking(
  data: Omit<Booking, "id" | "createdAt">
): Booking {
  const id = generateReference();
  const booking: Booking = {
    ...data,
    id,
    createdAt: new Date().toISOString(),
  };
  bookings.set(id, booking);
  return booking;
}

export function getBooking(id: string): Booking | undefined {
  return bookings.get(id);
}

export function getAllBookings(): Booking[] {
  return Array.from(bookings.values());
}
