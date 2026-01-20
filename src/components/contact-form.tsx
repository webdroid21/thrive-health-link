"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContactFormProps {
    type: string;
}

export function ContactForm({ type }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    type,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });

            // Reset success state after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
                <div className="relative mx-auto mb-4">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                        <svg
                            className="w-10 h-10 text-secondary"
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
                    <div className="absolute inset-0 bg-secondary/10 rounded-full blur-2xl opacity-60" />
                </div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Thank You!
                </h3>
                <p className="text-muted-foreground">
                    We'll get back to you as soon as possible.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" value={type} name="type" />

            <div className="group">
                <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-foreground"
                >
                    Name <span className="text-primary">*</span>
                </label>
                <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-input/50 rounded-lg bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                    placeholder="Your name"
                />
            </div>

            <div className="group">
                <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-foreground"
                >
                    Email <span className="text-primary">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-input/50 rounded-lg bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                    placeholder="your@email.com"
                />
            </div>

            <div className="group">
                <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground"
                >
                    Message <span className="text-primary">*</span>
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-input/50 rounded-lg bg-background focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none hover:border-primary/50"
                    placeholder="Tell us how you'd like to help..."
                />
            </div>

            {error && (
                <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                    <p className="text-sm font-medium">{error}</p>
                </div>
            )}

            <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-xl text-lg py-6 font-semibold transform hover:scale-[1.02] transition-all duration-300"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
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
            </Button>
        </form>
    );
}
