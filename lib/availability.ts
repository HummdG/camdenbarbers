import type { TimeSlot } from "@/types";

function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getAvailableSlots(date: string, barberId: string): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const seed = simpleHash(date + barberId);

  // Generate slots from 09:00 to 18:00 in 30-min intervals
  for (let hour = 9; hour < 18; hour++) {
    for (const mins of [0, 30]) {
      const timeStr = `${String(hour).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
      slots.push({ time: timeStr, available: true });
    }
  }

  // Deterministically mark ~4 slots as unavailable using seed
  // Never mark the first slot (09:00) unavailable
  const unavailableCount = 4;
  const marked = new Set<number>();

  for (let i = 0; i < unavailableCount; i++) {
    // Start from index 1 to always keep 09:00 available
    const idx = ((seed * (i + 7) * 31337) % (slots.length - 1)) + 1;
    marked.add(idx);
  }

  return slots.map((slot, idx) => ({
    ...slot,
    available: !marked.has(idx),
  }));
}
