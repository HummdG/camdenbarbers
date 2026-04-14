"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type {
  BookingStep,
  BookingFormState,
  Booking,
  Service,
  Barber,
} from "@/types";
import { SERVICES, BARBERS } from "@/lib/data";
import StepIndicator from "./StepIndicator";
import StepService from "./steps/StepService";
import StepBarber from "./steps/StepBarber";
import StepDate from "./steps/StepDate";
import StepTime from "./steps/StepTime";
import StepContact from "./steps/StepContact";
import StepConfirmation from "./steps/StepConfirmation";

const STEP_ORDER: BookingStep[] = [
  "service",
  "barber",
  "date",
  "time",
  "contact",
  "confirmation",
];

const initialForm: BookingFormState = {
  serviceId: null,
  barberId: null,
  date: null,
  timeSlot: null,
  name: "",
  phone: "",
  notes: "",
};

interface BookingFlowProps {
  initialServiceId?: string | null;
}

export default function BookingFlow({ initialServiceId }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<BookingStep>(
    initialServiceId ? "barber" : "service"
  );
  const [form, setForm] = useState<BookingFormState>({
    ...initialForm,
    serviceId: initialServiceId ?? null,
  });
  const [completedSteps, setCompletedSteps] = useState<BookingStep[]>(
    initialServiceId ? ["service"] : []
  );
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function updateForm(patch: Partial<BookingFormState>) {
    setForm((prev) => ({ ...prev, ...patch }));
  }

  function advanceStep(completingStep: BookingStep) {
    setCompletedSteps((prev) =>
      prev.includes(completingStep) ? prev : [...prev, completingStep]
    );
    const idx = STEP_ORDER.indexOf(completingStep);
    if (idx < STEP_ORDER.length - 1) {
      setCurrentStep(STEP_ORDER[idx + 1]);
    }
  }

  function goBack() {
    const idx = STEP_ORDER.indexOf(currentStep);
    if (idx > 0) {
      setCurrentStep(STEP_ORDER[idx - 1]);
    }
  }

  async function submitBooking() {
    if (!form.serviceId || !form.barberId || !form.date || !form.timeSlot) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setSubmitError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      // Build a Booking object from form + response
      const booking: Booking = {
        id: data.reference,
        serviceId: form.serviceId!,
        barberId: form.barberId!,
        date: form.date!,
        timeSlot: form.timeSlot!,
        name: form.name,
        phone: form.phone,
        notes: form.notes,
        createdAt: new Date().toISOString(),
      };
      setConfirmedBooking(booking);
      advanceStep("contact");
    } finally {
      setIsSubmitting(false);
    }
  }

  function reset() {
    setForm(initialForm);
    setCompletedSteps([]);
    setConfirmedBooking(null);
    setSubmitError(null);
    setCurrentStep("service");
  }

  const selectedService = SERVICES.find((s) => s.id === form.serviceId) ?? null;
  const selectedBarber = BARBERS.find((b) => b.id === form.barberId) ?? null;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator — hidden on confirmation */}
      {currentStep !== "confirmation" && (
        <div className="mb-10">
          <StepIndicator
            currentStep={currentStep}
            completedSteps={completedSteps}
          />
        </div>
      )}

      {/* Summary bar when service is selected */}
      {currentStep !== "service" &&
        currentStep !== "confirmation" &&
        selectedService && (
          <div className="mb-6 flex items-center justify-between gap-3 px-4 py-3 bg-navy-800/80 border border-navy-600/40 rounded-sm">
            <div className="min-w-0">
              <p className="text-xs text-cream-100/40 font-sans uppercase tracking-wide">
                Your service
              </p>
              <p className="text-sm text-cream-50 font-sans font-medium truncate">
                {selectedService.name}
              </p>
            </div>
            <span className="flex-shrink-0 text-gold-400 font-sans font-semibold">
              {selectedService.priceDisplay}
            </span>
          </div>
        )}

      {/* Step content */}
      <div>
        {currentStep === "service" && (
          <StepService
            selectedServiceId={form.serviceId}
            onSelect={(service: Service) => {
              updateForm({ serviceId: service.id });
              advanceStep("service");
            }}
          />
        )}

        {currentStep === "barber" && (
          <StepBarber
            selectedBarberId={form.barberId}
            onSelect={(barber: Barber) => {
              updateForm({ barberId: barber.id });
              advanceStep("barber");
            }}
            onBack={goBack}
          />
        )}

        {currentStep === "date" && (
          <StepDate
            selectedDate={form.date}
            onSelect={(date: string) => {
              updateForm({ date, timeSlot: null });
              advanceStep("date");
            }}
            onBack={goBack}
          />
        )}

        {currentStep === "time" && form.barberId && form.date && (
          <StepTime
            barberId={form.barberId}
            date={form.date}
            selectedTime={form.timeSlot}
            onSelect={(time: string) => {
              updateForm({ timeSlot: time });
              advanceStep("time");
            }}
            onBack={goBack}
          />
        )}

        {currentStep === "contact" && (
          <StepContact
            name={form.name}
            phone={form.phone}
            notes={form.notes}
            onChange={updateForm}
            onSubmit={submitBooking}
            onBack={goBack}
            isSubmitting={isSubmitting}
            error={submitError}
          />
        )}

        {currentStep === "confirmation" &&
          confirmedBooking &&
          selectedService &&
          selectedBarber && (
            <StepConfirmation
              booking={confirmedBooking}
              service={selectedService}
              barber={selectedBarber}
              onReset={reset}
            />
          )}
      </div>
    </div>
  );
}
