"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
    {
        letter: "C",
        title: "Collaboration",
        description:
            "We partner with families, community leaders, and healthcare providers to build a collective front against health disparities.",
    },
    {
        letter: "A",
        title: "Accessibility",
        description:
            "We are dedicated to dismantling the socioeconomic walls that prevent children from receiving care.",
    },
    {
        letter: "R",
        title: "Respect",
        description:
            "We honor the inherent worth and agency of every family, ensuring healthcare is delivered with cultural sensitivity.",
    },
    {
        letter: "E",
        title: "Empathy",
        description:
            "We lead with our hearts, rooting our work in a deep understanding of the lived experiences of the communities we serve.",
    },
    {
        letter: "S",
        title: "Sustainability",
        description:
            "We build lasting solutions and resilient systems to ensure that our impact on child health continues for generations to come.",
    },
];

export function MissionSection() {
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
        <section id="mission" ref={sectionRef} className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4">Mission & Values</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Guided by Purpose, Driven by Values
                    </h2>
                </div>

                {/* Vision and Mission - Modern Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card
                        className={`group relative overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${isVisible ? "slide-up" : "opacity-0"
                            }`}
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                Our Vision
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                "Ensuring universal access to care through an equitable health
                                system that honors every community and leaves no child behind."
                            </p>
                        </CardContent>
                    </Card>

                    <Card
                        className={`group relative overflow-hidden bg-gradient-to-br from-secondary/5 to-secondary/10 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${isVisible ? "slide-up" : "opacity-0"
                            }`}
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                        <CardHeader>
                            <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                Our Mission
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                Our mission is to break socioeconomic barriers to accessing and
                                utilizing child health services for marginalized communities.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Core Values: CARES */}
                <div
                    className={`${isVisible ? "fade-in" : "opacity-0"}`}
                    style={{ animationDelay: "0.4s" }}
                >
                    <h3 className="text-3xl font-bold text-center mb-2">
                        Core Values: <span className="text-primary">CARES</span>
                    </h3>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Our values spell out who we are and how we work
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {values.map((value, index) => (
                            <Card
                                key={value.letter}
                                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-secondary" />
                                <CardHeader className="text-center pb-3">
                                    <div className="relative mx-auto mb-4">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-4xl font-black text-primary">
                                                {value.letter}
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                                    </div>
                                    <CardTitle className="text-lg font-bold">{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
