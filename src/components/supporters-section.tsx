"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const supporters = [
    {
        name: "D-Prize",
        url: "https://d-prize.org/",
        description: "Supporting poverty alleviation through distributed entrepreneurship",
        image: "/partners/d-prize.jpeg",
    },
    {
        name: "FASI Uganda",
        url: "https://www.fasiuganda.org/",
        description: "Supporting Livelihoods through Innovation and Development",
        image: "/partners/fasi.jpeg",
    },
    {
        name: "Spoon Foundation",
        url: "https://www.spoonfoundation.org/",
        description: "Nourishing children with disabilities through evidence-based nutrition programs",
        image: "/partners/spoon.jpeg",
    },
];

export function SupportersSection() {
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
        <section ref={sectionRef} className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4">Our Partners</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Proudly Supported By
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Together with our partners, we're building a healthier future for
                        Uganda's most vulnerable communities
                    </p>
                </div>

                <div
                    className={`grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto ${isVisible ? "fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "0.2s" }}
                >
                    {supporters.map((supporter, index) => (
                        <a
                            key={supporter.name}
                            href={supporter.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-2xl transition-all hover:scale-105 duration-300 h-full">
                                <div className="absolute top-0 left-0 w-full h-1 bg-secondary" />
                                <CardContent className="p-10">
                                    {/* Logo Container */}
                                    <div className="relative h-32 mb-6 flex items-center justify-center bg-white rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                                        {supporter.image ? (
                                            <Image
                                                src={supporter.image}
                                                alt={`${supporter.name} logo`}
                                                fill
                                                className="object-contain p-4"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-3xl font-bold text-muted-foreground">
                                                    {supporter.name.split(" ").map((word) => word[0]).join("")}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Partner Info */}
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {supporter.name}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            {supporter.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold group-hover:gap-3 transition-all">
                                            Visit Website
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
