"use client";

import type { Theme } from "@/lib/themes";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

interface ContactProps {
  theme: Theme;
}

export function Contact({ theme }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Visit Our Workshop",
      value: "1234 Craftsman Lane\nGardnerville, NV 89410",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "(775) 555-0123",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@thorntonandsons.com",
    },
    {
      icon: Clock,
      label: "Workshop Hours",
      value: "Mon-Fri: 8am-5pm\nSat: By Appointment",
    },
  ];

  return (
    <section
      id="contact"
      className={theme.styles.sectionPadding}
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${theme.styles.headingStyle}`}
            style={{
              fontFamily: theme.fonts.heading,
              color: theme.colors.primary,
            }}
          >
            Start Your Project
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: theme.fonts.body,
              color: theme.colors.muted,
            }}
          >
            Ready to bring your vision to life? Contact us to discuss your
            custom furniture project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="p-8 transition-all duration-300"
            style={{
              backgroundColor: theme.colors.secondary,
              borderRadius: theme.styles.borderRadius,
            }}
          >
            {isSubmitted ? (
              <div className="text-center py-16 animate-fadeIn">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 animate-scaleIn"
                  style={{
                    backgroundColor: theme.colors.accent + "20",
                    color: theme.colors.accent,
                  }}
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{
                    fontFamily: theme.fonts.heading,
                    color: theme.colors.primary,
                  }}
                >
                  Thank You!
                </h3>
                <p
                  style={{
                    fontFamily: theme.fonts.body,
                    color: theme.colors.muted,
                  }}
                >
                  We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.foreground,
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.01]"
                    style={{
                      borderColor: theme.colors.muted + "40",
                      fontFamily: theme.fonts.body,
                      borderRadius: theme.styles.borderRadius,
                      color: theme.colors.foreground,
                      backgroundColor: theme.colors.background,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.colors.accent;
                      e.target.style.boxShadow = `0 0 0 3px ${theme.colors.accent}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.colors.muted + "40";
                      e.target.style.boxShadow = "none";
                    }}
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                      style={{
                        fontFamily: theme.fonts.body,
                        color: theme.colors.foreground,
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.01]"
                      style={{
                        borderColor: theme.colors.muted + "40",
                        fontFamily: theme.fonts.body,
                        borderRadius: theme.styles.borderRadius,
                        color: theme.colors.foreground,
                        backgroundColor: theme.colors.background,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = theme.colors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${theme.colors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = theme.colors.muted + "40";
                        e.target.style.boxShadow = "none";
                      }}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium"
                      style={{
                        fontFamily: theme.fonts.body,
                        color: theme.colors.foreground,
                      }}
                    >
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.01]"
                      style={{
                        borderColor: theme.colors.muted + "40",
                        fontFamily: theme.fonts.body,
                        borderRadius: theme.styles.borderRadius,
                        color: theme.colors.foreground,
                        backgroundColor: theme.colors.background,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = theme.colors.accent;
                        e.target.style.boxShadow = `0 0 0 3px ${theme.colors.accent}20`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = theme.colors.muted + "40";
                        e.target.style.boxShadow = "none";
                      }}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.foreground,
                    }}
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border transition-all duration-200 focus:outline-none focus:ring-2 focus:scale-[1.01] resize-none"
                    style={{
                      borderColor: theme.colors.muted + "40",
                      fontFamily: theme.fonts.body,
                      borderRadius: theme.styles.borderRadius,
                      color: theme.colors.foreground,
                      backgroundColor: theme.colors.background,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = theme.colors.accent;
                      e.target.style.boxShadow = `0 0 0 3px ${theme.colors.accent}20`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme.colors.muted + "40";
                      e.target.style.boxShadow = "none";
                    }}
                    placeholder="Describe the furniture piece you have in mind..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] ${theme.styles.buttonPrimary}`}
                  style={{
                    fontFamily: theme.fonts.body,
                    borderRadius: theme.styles.borderRadius,
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="flex gap-4 group animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: theme.colors.primary + "15",
                    borderRadius: theme.styles.borderRadius,
                  }}
                >
                  <info.icon
                    size={24}
                    style={{ color: theme.colors.primary }}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h4
                    className="font-semibold mb-1"
                    style={{
                      fontFamily: theme.fonts.heading,
                      color: theme.colors.foreground,
                    }}
                  >
                    {info.label}
                  </h4>
                  <p
                    className="whitespace-pre-line"
                    style={{
                      fontFamily: theme.fonts.body,
                      color: theme.colors.muted,
                    }}
                  >
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Workshop Preview */}
            <div
              className="aspect-video bg-cover bg-center overflow-hidden group animate-fadeInUp"
              style={{
                backgroundImage: `url('/images/blue-custom-kitchen.jpg')`,
                borderRadius: theme.styles.borderRadius,
                animationDelay: "400ms",
              }}
            >
              <div
                className="w-full h-full transition-all duration-500 group-hover:scale-110 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/images/blue-custom-kitchen.jpg')`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}
