"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, MessageSquare, Bell, Zap } from "lucide-react";

export function InnovationSection() {
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
            id="innovation"
            ref={sectionRef}
            className="py-24 bg-secondary/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4">Latest Innovation</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Introducing Vaxclue
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Our last-mile digital platform revolutionizing community health
                        outreach
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div
                        className={`space-y-6 ${isVisible ? "slide-up" : "opacity-0"}`}
                        style={{ animationDelay: "0.2s" }}
                    >
                        <h3 className="text-3xl font-bold text-foreground">
                            What We're Working On
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are developing a last-mile digital platform to ease VHT
                            follow-up efforts, serve a detailed up-to-date electronic job aide
                            and automated follow-up reminder system benefitting even those
                            without smartphones.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Vaxclue is our way of scaling what already works on the ground:
                            reminding caregivers through basic SMS and addressing
                            misinformation through trusted community health workers.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                            <p className="text-lg font-semibold text-primary mb-2">
                                Impact Goal
                            </p>
                            <p className="text-muted-foreground">
                                By leveraging technology while maintaining the human touch,
                                Vaxclue will enable us to reach more families, track outcomes
                                better, and ensure no child slips through the cracks.
                            </p>
                            <p className="text-muted-foreground mt-3">
                                <span className="font-semibold text-primary">Cost-Effective at Scale:</span>{" "}
                                This approach enables us to reach more families at very low cost,
                                maximizing our impact while maintaining sustainability and accessibility.
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${isVisible ? "fade-in" : "opacity-0"}`}
                        style={{ animationDelay: "0.3s" }}
                    >
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/thrive-images/image10.jpeg"
                                alt="Healthcare technology"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-20">
                    <div
                        className={`text-center mb-12 ${isVisible ? "slide-up" : "opacity-0"}`}
                        style={{ animationDelay: "0.4s" }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Platform Capabilities
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Smart features designed to empower health workers and reach every family
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div
                        className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "fade-in" : "opacity-0"}`}
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                            <CardHeader className="pb-3">
                                <div className="relative mb-2">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <Smartphone className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                                </div>
                                <CardTitle className="text-base font-bold">SMS Reminders</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Basic phone accessibility for all caregivers
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-secondary" />
                            <CardHeader className="pb-3">
                                <div className="relative mb-2">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <MessageSquare className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                                </div>
                                <CardTitle className="text-base font-bold">Digital Job Aide</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Up-to-date guidance for health workers
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                            <CardHeader className="pb-3">
                                <div className="relative mb-2">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <Bell className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                                </div>
                                <CardTitle className="text-base font-bold">Automated Follow-up</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Smart scheduling and tracking system
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-secondary" />
                            <CardHeader className="pb-3">
                                <div className="relative mb-2">
                                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <Zap className="w-7 h-7 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                                </div>
                                <CardTitle className="text-base font-bold">Scalable Impact</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Reaching more families efficiently
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
