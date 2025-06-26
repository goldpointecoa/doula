import { Facebook, Instagram, Heart } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";

export default function Footer() {
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-ebony-800 text-white py-12 nature-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-lora text-2xl font-semibold mb-4 text-white leaf-decoration">Knit & Known</div>
            <p className="text-ash-gray-300 leading-relaxed">
              Evidence-based care, Christ at the center. <br />Compassionate, evidence-based support through pregnancy and birth.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-dun-300">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-ash-gray-300 hover:text-copper-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-dun-300">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="bg-ebony-700 hover:bg-copper-400 p-3 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-ebony-700 hover:bg-copper-400 p-3 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-ebony-700 hover:bg-copper-400 p-3 rounded-full transition-colors duration-200"
                aria-label="Pinterest"
              >
                <Heart className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-ebony-700 pt-8 text-center">
          <p className="text-ash-gray-300">
            © 2025 Knit & Known. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
