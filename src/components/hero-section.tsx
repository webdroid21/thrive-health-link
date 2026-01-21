"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Award, TrendingUp } from "lucide-react";

const stats = [
    { icon: Users, value: "2,000+", label: "Children connected to care since 2024", color: "text-primary" },
    { icon: Heart, value: "98%", label: "Follow-up success on immunization referrals", color: "text-secondary" },
    { icon: Award, value: "50+", label: "Communities reached", color: "text-accent" },
    { icon: TrendingUp, value: "85%", label: "Impact Growth", color: "text-primary" },
];

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-secondary/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,115,230,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(22,163,74,0.15),transparent_50%)]" />

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div
                        className={`space-y-8 ${isVisible ? "animate-in slide-in-from-left duration-1000" : "opacity-0"}`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
                            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-xs font-light md:font-medium text-primary">
                                Youth-Led Health Innovation to close the zero-dose gap
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1]">
                            <span className="block text-foreground mb-2">
                                Linking Vulnerable Children
                            </span>
                            <span className="block text-secondary">
                                To Life-Saving Immunization
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-light">
                            We use{" "}
                            <span className="text-primary font-semibold">digital tools and coordinated partnerships</span>
                            {" "}to ensure that no child is missed.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:shadow-2xl text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
                            >
                                <a href="#contact" className="flex items-center gap-2">
                                    Discover Our Impact
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>

                        {/* Mobile: Single Featured Image (appears before stats on mobile) */}
                        <div
                            className={`lg:hidden relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group ${isVisible ? "animate-in slide-in-from-bottom duration-1000" : "opacity-0"}`}
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Image
                                src="/thrive-images/image4.jpeg"
                                alt="Community health worker"
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                            {stats.map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className={`${isVisible ? "animate-in fade-in slide-in-from-bottom-4" : "opacity-0"}`}
                                        style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                    >
                                        <div className="text-center">
                                            <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                                            <div className="text-2xl font-bold text-foreground">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Featured Image (all screen sizes) */}
                    <div
                        className={`hidden lg:block relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group ${isVisible ? "animate-in slide-in-from-right duration-1000" : "opacity-0"}`}
                        style={{ animationDelay: "0.2s" }}
                    >
                        <Image
                            src="/thrive-images/image4.jpeg"
                            alt="Community health worker"
                            fill
                            className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
