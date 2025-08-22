import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-hero-gradient text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-8 sm:py-12 lg:py-16">
                    {/* Logo and About */}
                    <div className="sm:col-span-2">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                            <img
                                src="/logo.jpg"
                                alt="ESSA Logo"
                                className="md:size-16 size-28 object-cover rounded-sm mb-3 mr-4"
                            />
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">
                                    ESSA Christian Unity Fellowship
                                </h3>
                                <p className="text-white/80 text-xs sm:text-sm">ECUF</p>
                            </div>
                        </div>
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                            Building a community where faith meets education, creating an
                            environment where students, families, and faculty grow
                            together in Christ's love and wisdom.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a
                                href="https://youtube.com/@ecufchurch"
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/calendar"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    Calendar
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#gallery"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/#videos"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    Videos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                                <div className="text-white/80 text-sm">
                                    <p>259G+7R7, Kigali</p>
                                    <p>Kanombe, Kwa Dodo</p>
                                    <p>Rwanda</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-white/70 flex-shrink-0" />
                                <div className="text-white/80 text-sm">
                                    <p>+250 788 312 231</p>
                                    <p>+250 788 312 232</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-white/70 flex-shrink-0" />
                                <div className="text-white/80 text-sm">
                                    <p>ecuf@gmail.com</p>
                                    <p>essanyarugunga@yahoo.fr</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/70 text-sm">
                        © 2025 ESSA Christian Unity Fellowship. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
                        <a
                            href="#"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            Support
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
