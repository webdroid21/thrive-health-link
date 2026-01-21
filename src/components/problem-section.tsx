"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

export function ProblemSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,115,230,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(22,163,74,0.08),transparent_50%)]" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div
                    className={`text-center ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4 inline-flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        The Challenge We Address
                    </Badge>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                        Understanding the Problem
                    </h2>

                    <div className="relative">
                        {/* Decorative Quote Mark */}
                        <div className="absolute -top-8 -left-4 md:-left-8 text-8xl text-primary/10 font-serif leading-none">
                            "
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed relative z-10">
                            Thrive Health Link works with the{" "}
                            <span className="text-foreground font-semibold">
                                poorest caregivers in Uganda's slums and rural communities
                            </span>
                            … families who miss vaccines{" "}
                            <span className="text-foreground font-semibold">not because they don't care</span>,
                            but because{" "}
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">
                                access, time, misinformation, and cash constraints
                            </span>
                            {" "}make follow-through impossible.
                        </p>

                        {/* Decorative Quote Mark */}
                        <div className="absolute -bottom-8 -right-4 md:-right-8 text-8xl text-secondary/10 font-serif leading-none">
                            "
                        </div>
                    </div>

                    {/* Visual Separator */}
                    <div className="mt-16 flex items-center justify-center gap-4">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-secondary" />
                    </div>
                </div>
            </div>
        </section>
    );
}
