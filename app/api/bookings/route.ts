import { NextRequest, NextResponse } from "next/server";
import { addBooking, getAllBookings } from "@/lib/booking-store";
import type { BookingResponse, BookingError } from "@/types";

export async function POST(
  req: NextRequest
): Promise<NextResponse<BookingResponse | BookingError>> {
  try {
    const body = await req.json();
    const { serviceId, barberId, date, timeSlot, name, phone, notes } = body;

    if (!serviceId || !barberId || !date || !timeSlot || !name || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!/^\d{2}:\d{2}$/.test(timeSlot)) {
      return NextResponse.json(
        { success: false, error: "Invalid time slot format." },
        { status: 400 }
      );
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { success: false, error: "Invalid date format." },
        { status: 400 }
      );
    }

    const booking = addBooking({
      serviceId,
      barberId,
      date,
      timeSlot,
      name: String(name).trim(),
      phone: String(phone).trim(),
      notes: notes ? String(notes).trim() : "",
    });

    return NextResponse.json(
      {
        success: true,
        bookingId: booking.id,
        reference: booking.id,
        message: `Booking confirmed! Your reference is ${booking.id}.`,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  const bookings = getAllBookings();
  return NextResponse.json({ bookings, count: bookings.length });
}
