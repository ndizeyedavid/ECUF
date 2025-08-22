import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Highlighter } from "./highlighter";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={"/gallery/hero.jpg"}
                    alt="ECUF Church Building"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-hero-gradient opacity-75"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    ESSA Christian Unity Fellowship
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Strengthening faith, building community, and nurturing minds through
                    <Highlighter action="underline" color="#FF9800">
                        Christ's love
                    </Highlighter>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8 py-6 shadow-gold"
                    >
                        Join Our Community
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-6 border-white hover:bg-white hover:text-primary"
                    >
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <ChevronDown className="h-8 w-8 text-white/70" />
            </div>
        </motion.section>
    );
};

export default Hero;
