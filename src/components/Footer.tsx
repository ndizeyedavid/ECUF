import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-hero-gradient text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <img
                                src="/logo.jpg"
                                alt="ESSA Logo"
                                className="h-12 w-auto mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-bold">
                                    ESSA Christian Unity Fellowship
                                </h3>
                                <p className="text-white/80 text-sm">ECUF</p>
                            </div>
                        </div>
                        <p className="text-white/90 leading-relaxed mb-6">
                            Building a community where faith meets education, creating an
                            environment where students, families, and faculty grow
                            together in Christ's love and wisdom.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <Youtube className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/calendar"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    Calendar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#videos"
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    Videos
                                </a>
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
