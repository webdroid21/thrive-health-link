"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Download, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const galleryImages = [
    {
        src: "/thrive/Community Health worker.jpeg",
        title: "Community Health Worker",
        description: "Dedicated health workers serving vulnerable communities",
    },
    {
        src: "/thrive/Educating caregivers who prioritise work over health seeking.jpeg",
        title: "Educating Caregivers",
        description: "Engaging caregivers who prioritize work over health-seeking behavior",
    },
    {
        src: "/thrive/Field Operations.jpeg",
        title: "Field Operations",
        description: "VHTs conducting door-to-door health visits across communities",
    },
    {
        src: "/thrive/Health education.jpeg",
        title: "Health Education",
        description: "Empowering caregivers with essential health knowledge",
    },
    {
        src: "/thrive/Healthcare Outreach.jpeg",
        title: "Healthcare Outreach",
        description: "Reaching families in urban slums and underserved rural areas",
    },
    {
        src: "/thrive/Incentive Distribution.jpg",
        title: "Incentive Distribution",
        description: "Rewarding community health workers for their dedicated service",
    },
    {
        src: "/thrive/Information verification and documentation.jpeg",
        title: "Information Verification & Documentation",
        description: "Ensuring accurate data collection and record-keeping in the field",
    },
    {
        src: "/thrive/Last mile client identification.jpeg",
        title: "Last Mile Client Identification",
        description: "Locating and registering hard-to-reach children in remote communities",
    },
    {
        src: "/thrive/One-on-one (tailored) sensitisation.jpeg",
        title: "One-on-One Sensitization",
        description: "Providing personalized health education tailored to each caregiver's needs",
    },
    {
        src: "/thrive/Previously zero-dose child receiving her vaccines.jpeg",
        title: "Zero-Dose Child Vaccination",
        description: "A previously unvaccinated child receiving her first life-saving vaccines",
    },
    {
        src: "/thrive/Team Collaboration.jpg",
        title: "Team Collaboration",
        description: "Youth-led initiative driving community health transformation",
    },
    {
        src: "/thrive/Vaxclue SMS Reminders.jpeg",
        title: "Vaxclue SMS Reminders",
        description: "Digital vaccination reminders keeping caregivers informed and engaged",
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(
                (selectedImage - 1 + galleryImages.length) % galleryImages.length
            );
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 mb-16">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,115,230,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(22,163,74,0.15),transparent_50%)]" />

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Badge className="mb-4 bg-primary text-white">Our Impact</Badge>
                    <h1 className="text-5xl md:text-6xl font-black mb-6">
                        <span className="block text-foreground mb-2">Moments That</span>
                        <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Matter Most
                        </span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Explore our journey of transforming child health outcomes across
                        Uganda's most vulnerable communities.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-semibold text-lg mb-1">
                                        {image.title}
                                    </h3>
                                    <p className="text-white/80 text-sm line-clamp-2">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all z-10"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                        className="absolute left-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all z-10"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                        className="absolute right-4 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all z-10"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-6xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative aspect-video w-full h-full">
                            <Image
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Image Info */}
                        <div className="mt-6 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                {galleryImages[selectedImage].title}
                            </h2>
                            <p className="text-white/80 mb-4">
                                {galleryImages[selectedImage].description}
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                                >
                                    <Share2 className="w-4 h-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                            <p className="text-white/60 text-sm mt-4">
                                {selectedImage + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
