import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

export default function GetInvolved() {
  const { actor } = useActor();
  const [fullName, setFullName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!fullName.trim()) {
      setError("Please enter your first and last name.");
      return;
    }
    if (!/^\d{5}$/.test(zipCode.trim())) {
      setError("Please enter a valid 5-digit zip code.");
      return;
    }
    if (!actor) {
      setError("Unable to connect. Please refresh and try again.");
      return;
    }

    setIsSubmitting(true);
    try {
      await actor.submitSignup(
        fullName.trim(),
        zipCode.trim(),
        cellPhone.trim(),
        smsOptIn,
      );
      setIsSuccess(true);
    } catch (_err) {
      setError(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-navy min-h-screen relative overflow-hidden">
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.97 0.008 80) 0, oklch(0.97 0.008 80) 1px, transparent 0, transparent 50%)",
          backgroundSize: "12px 12px",
        }}
      />
      {/* Gold top accent */}
      <div
        className="h-1 w-full bg-gold absolute top-0 left-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Page heading */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-8 bg-gold" />
            <span className="text-gold font-sans font-semibold text-sm uppercase tracking-widest">
              Join the Movement
            </span>
            <div className="h-0.5 w-8 bg-gold" />
          </div>
          <h1 className="font-heading font-bold text-cream text-4xl sm:text-5xl leading-tight mb-4">
            Get <span className="text-gold">Involved</span>
          </h1>
          <p className="text-cream-muted font-sans text-lg leading-relaxed">
            Empower Southwest is building a people-powered movement for working
            and middle class families in Chicago's Southwest suburbs. Sign up to
            stay connected and be part of the change.
          </p>
        </div>

        {/* Success state */}
        {isSuccess ? (
          <div
            data-ocid="get-involved.success_state"
            className="bg-navy-light border border-gold/40 rounded-sm px-6 py-8 text-center"
          >
            <CheckCircle2 className="mx-auto mb-4 text-gold" size={40} />
            <h2 className="font-heading text-cream text-2xl font-bold mb-2">
              Thank you for signing up!
            </h2>
            <p className="text-cream-muted font-sans">We'll be in touch.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-navy-light border border-navy-light/60 rounded-sm p-6 sm:p-8 space-y-6 shadow-md"
          >
            {/* Full Name */}
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="text-cream font-sans font-semibold text-sm uppercase tracking-wide"
              >
                First &amp; Last Name{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </Label>
              <Input
                id="fullName"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                data-ocid="get-involved.input"
                className="bg-navy border-navy-light text-cream placeholder:text-cream-muted/50 focus:border-gold focus:ring-gold font-sans text-base"
              />
            </div>

            {/* Zip Code */}
            <div className="space-y-2">
              <Label
                htmlFor="zipCode"
                className="text-cream font-sans font-semibold text-sm uppercase tracking-wide"
              >
                Zip Code{" "}
                <span className="text-gold" aria-hidden="true">
                  *
                </span>
              </Label>
              <Input
                id="zipCode"
                type="text"
                required
                autoComplete="postal-code"
                inputMode="numeric"
                maxLength={5}
                placeholder="60652"
                value={zipCode}
                onChange={(e) =>
                  setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))
                }
                data-ocid="get-involved.zip_input"
                className="bg-navy border-navy-light text-cream placeholder:text-cream-muted/50 focus:border-gold focus:ring-gold font-sans text-base max-w-[160px]"
              />
            </div>

            {/* Cell Phone */}
            <div className="space-y-2">
              <Label
                htmlFor="cellPhone"
                className="text-cream font-sans font-semibold text-sm uppercase tracking-wide"
              >
                Cell Phone{" "}
                <span className="text-cream-muted font-sans font-normal text-xs normal-case tracking-normal">
                  (optional)
                </span>
              </Label>
              <Input
                id="cellPhone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(555) 555-5555"
                value={cellPhone}
                onChange={(e) => setCellPhone(e.target.value)}
                data-ocid="get-involved.phone_input"
                className="bg-navy border-navy-light text-cream placeholder:text-cream-muted/50 focus:border-gold focus:ring-gold font-sans text-base"
              />
            </div>

            {/* SMS Opt-In */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="smsOptIn"
                  checked={smsOptIn}
                  onCheckedChange={(checked) => setSmsOptIn(checked === true)}
                  data-ocid="get-involved.checkbox"
                  className="mt-0.5 border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold data-[state=checked]:text-navy"
                />
                <Label
                  htmlFor="smsOptIn"
                  className="text-cream font-sans text-sm leading-relaxed cursor-pointer"
                >
                  I consent to receive text messages from Empower Southwest{" "}
                  <span className="text-cream-muted font-sans font-normal text-xs normal-case tracking-normal">
                    (optional)
                  </span>
                </Label>
              </div>

              {/* SMS Disclaimer */}
              <p className="text-cream-muted font-sans text-xs leading-relaxed pl-7">
                By submitting this form and signing up for texts, you consent to
                receive political messages from Empower Southwest. Donations
                will not be solicited. Message &amp; data rates may apply.
                Message frequency varies. Unsubscribe at any time by replying
                STOP. Reply HELP for help. Phone number will not be shared with
                third parties for marketing purposes.
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div
                data-ocid="get-involved.error_state"
                className="flex items-start gap-3 bg-destructive/10 border border-destructive/40 rounded-sm px-4 py-3"
                role="alert"
                aria-live="polite"
              >
                <AlertCircle
                  className="text-destructive mt-0.5 shrink-0"
                  size={16}
                />
                <p className="text-destructive font-sans text-sm">{error}</p>
              </div>
            )}

            {/* Submit */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                data-ocid="get-involved.submit_button"
                className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-navy font-heading font-bold text-base uppercase tracking-wider px-10 py-3 h-auto transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing Up…
                  </>
                ) : (
                  "Sign Up"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
        aria-hidden="true"
      />
    </section>
  );
}
