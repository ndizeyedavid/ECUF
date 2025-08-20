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
                src="/lovable-uploads/2caa450f-2479-4b74-bf8e-0ca927f7b98a.png" 
                alt="ESSA Logo" 
                className="h-12 w-auto mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">ESSA Christian Unity Fellowship</h3>
                <p className="text-white/80 text-sm">ECUF</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              Building a community where faith meets education, creating an environment 
              where students, families, and faculty grow together in Christ's love and wisdom.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#events" className="text-white/80 hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Alumni</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/70 mt-0.5 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>123 Unity Drive</p>
                  <p>Abuja, FCT 900001</p>
                  <p>Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/70 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>+234 9 123 4567</p>
                  <p>+234 8 098 7654</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/70 flex-shrink-0" />
                <div className="text-white/80 text-sm">
                  <p>info@ecuf.edu.ng</p>
                  <p>admin@ecuf.edu.ng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2024 ESSA Christian Unity Fellowship. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;