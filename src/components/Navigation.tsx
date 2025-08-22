import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeSection = useActiveSection();

    const navItems = [
        { name: "Home", href: "/#", section: "hero" },
        { name: "About", href: "/#about", section: "about" },
        { name: "Services", href: "/#services", section: "services" },
        { name: "Events", href: "/#events", section: "events" },
        { name: "Gallery", href: "/#gallery", section: "gallery" },
        { name: "Videos", href: "/#videos", section: "videos" },
        { name: "Contact", href: "/#contact", section: "contact" },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (href === "/#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const target = document.querySelector(href.split("/")[1]);
            if (target) {
                const offsetTop =
                    target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/logo.jpg"
                            alt="ESSA Logo"
                            className="h-10 w-auto mr-3"
                        />
                        <span className="text-xl font-bold text-primary">ECUF</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleSmoothScroll(e, item.href)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                                        activeSection === item.section
                                            ? "text-primary bg-primary/10 font-semibold"
                                            : "text-foreground hover:text-primary hover:bg-primary/5"
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleSmoothScroll(e, item.href)}
                                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                                    activeSection === item.section
                                        ? "text-primary bg-primary/10 font-semibold"
                                        : "text-foreground hover:text-primary hover:bg-primary/5"
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
