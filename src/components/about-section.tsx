"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Target, Globe } from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "Community First",
        description: "Partnering with care givers and community health workers to build lasting health solutions.",
    },
    {
        icon: Users,
        title: "Youth-Led Impact",
        description: "Empowering young leaders to drive health innovation in their communities.",
    },
    {
        icon: Target,
        title: "Zero Dose Focus",
        description: "Reaching children who have never received their first vaccine dose.",
    },
    {
        icon: Globe,
        title: "Sustainable Change",
        description: "Building resilient systems that continue to serve for generations.",
    },
];

export function AboutSection() {
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
        <section id="about" ref={sectionRef} className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}>
                    <Badge className="mb-4">About Us</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Building Healthier Communities Together
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A youth-led community health system strengthening initiative
                        optimizing child health among underserved communities in Uganda.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div
                        className={`${isVisible ? "slide-up" : "opacity-0"}`}
                        style={{ animationDelay: "0.2s" }}
                    >
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/thrive-images/image5.jpeg"
                                alt="Community health workers"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div
                        className={`space-y-6 ${isVisible ? "slide-up" : "opacity-0"}`}
                        style={{ animationDelay: "0.3s" }}
                    >
                        <h3 className="text-3xl font-bold text-foreground">Who We Are</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Thrive Health Link is a youth-led community health system
                            strengthening initiative which aims to optimize child health among
                            underserved communities in Uganda's urban slums and impoverished
                            rural communities.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We boost uptake of immunization services and strengthen
                            community-facility linkages through targeted efforts reaching
                            zero-dose children, under-immunized children, and families
                            affected by vaccine misinformation.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our implementation is conducted in liaison with trained village
                            health teams (VHTs) and relevant community resource persons
                            (CRPs).
                        </p>
                    </div>
                </div>

                {/* Feature Cards - Modern Design */}
                <div
                    className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "fade-in" : "opacity-0"
                        }`}
                    style={{ animationDelay: "0.4s" }}
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={feature.title}
                                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-secondary" />
                                <CardHeader className="pb-3">
                                    <div className="relative mb-4">
                                        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-secondary" />
                                        </div>
                                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                                    </div>
                                    <CardTitle className="text-lg font-bold">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
