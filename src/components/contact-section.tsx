"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { HandHeart, Users, Building, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { ContactForm } from "./contact-form";

const ways = [
    {
        icon: Building,
        title: "Partner with Us",
        description:
            "Collaborate with us on community health initiatives, research, or program expansion.",
    },
    {
        icon: Users,
        title: "Volunteer",
        description:
            "Lend your skills, time, or expertise, locally or remotely.",
    },
    {
        icon: HandHeart,
        title: "Donate",
        description:
            "Your contributions directly support vulnerable children and caregivers with health services and training.",
    },
];

export function ContactSection() {
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
            id="contact"
            ref={sectionRef}
            className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}
                >
                    <Badge className="mb-4">Get Involved</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Join Us in Making a Difference
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        At Thrive Health Link, we believe in the power of collective action.
                        There's a role for you in our mission.
                    </p>
                </div>

                {/* Ways to Get Involved */}
                <div
                    className={`grid md:grid-cols-3 gap-8 mb-16 ${isVisible ? "fade-in" : "opacity-0"
                        }`}
                    style={{ animationDelay: "0.2s" }}
                >
                    {ways.map((way) => {
                        const Icon = way.icon;
                        return (
                            <Card
                                key={way.title}
                                className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary" />
                                <CardHeader className="text-center pb-3">
                                    <div className="relative mx-auto mb-4">
                                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center relative z-10 shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-10 h-10 text-primary" />
                                        </div>
                                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{way.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                                        {way.description}
                                    </p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="w-full" variant="outline">
                                                Learn More
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md">
                                            <DialogHeader>
                                                <DialogTitle>{way.title}</DialogTitle>
                                                <DialogDescription>
                                                    {way.description}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <ContactForm type={way.title} />
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Contact Information */}
                <div
                    className={`max-w-4xl mx-auto ${isVisible ? "slide-up" : "opacity-0"}`}
                    style={{ animationDelay: "0.4s" }}
                >
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/20">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">
                                Reach Out to Us
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Head Office</h4>
                                            <p className="text-muted-foreground">
                                                Rubaga Road, Kampala, Uganda
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone</h4>
                                            <a
                                                href="tel:+256784267680"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                +256 784 267 680
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email</h4>
                                            <a
                                                href="mailto:thrivehealthlink@gmail.com"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                thrivehealthlink@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Linkedin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Connect Online</h4>
                                            <a
                                                href="https://www.linkedin.com/company/109986222/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                LinkedIn
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-4">Send Us a Message</h4>
                                    <ContactForm type="General Inquiry" />
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t text-center">
                                <p className="text-muted-foreground mb-4">
                                    Together, we can ensure that no vulnerable child is left
                                    behind.
                                </p>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-secondary"
                                >
                                    <a href="/donate">Make a Donation</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
