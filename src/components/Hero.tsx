import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Highlighter } from "./highlighter";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const heroImages = [
    { src: "/hero/hero-1.jpg", alt: "ECUF Church Building 1" },
    { src: "/hero/hero-2.jpg", alt: "ECUF Church Building 2" },
    { src: "/hero/hero-3.jpg", alt: "ECUF Church Building 3" },
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            id="hero"
            className="relative min-h-screen flex items-center bg-black justify-center overflow-hidden"
        >
            {/* Background Image Slideshow */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <img
                        src={heroImages[currentImageIndex].src}
                        alt={heroImages[currentImageIndex].alt}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-hero-gradient opacity-75"></div>
                </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex === index
                                ? "bg-white w-6"
                                : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.h1
                    className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    ESSA Christian Unity Fellowship
                </motion.h1>
                <p className="text-md md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Strengthening faith, building community, and nurturing minds through{" "}
                    <Highlighter action="underline" color="#FF9800">
                        Christ's love
                    </Highlighter>
                </p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <Button
                        variant="secondary"
                        className="md:text-lg px-8 py-6 shadow-gold"
                    >
                        Join Our Community
                    </Button>
                    <Button
                        variant="outline"
                        className="md:text-lg px-8 py-6 border-white hover:bg-white hover:text-primary"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <ChevronDown className="h-8 w-8 text-white/70 animate-bounce" />
            </motion.div>
        </motion.section>
    );
};

export default Hero;
