import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "#home", isRoute: false },
    { label: "About", href: "#about", isRoute: false },
    { label: "Services", href: "#services", isRoute: false },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "Testimonials", href: "#testimonials", isRoute: false },
    { label: "Contact", href: "#contact", isRoute: false },
  ];

  const handleNavClick = (href: string, isRoute: boolean) => {
    if (!isRoute) {
      scrollToSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logo/baby-logo-alt.png"
              alt="Baby Logo"
              className="h-8 w-8 object-contain"
            />
            <div className="font-lora text-2xl font-semibold text-copper-400 leaf-decoration">
              Knit & Known
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link key={item.label} href={item.href} className="nav-item text-ebony-700 hover:text-copper-400 font-medium transition-colors duration-200">
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="nav-item text-ebony-700 hover:text-copper-400 font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.label} href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-ebony-700 hover:text-copper-400 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                    className="text-left text-ebony-700 hover:text-copper-400 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
