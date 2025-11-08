// src/components/Header.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  const cloudinaryLogo =
    "https://res.cloudinary.com/deci4v6zv/image/upload/v1762617272/the-serenity-place-logo-2026-removebg_ze7l7v.png";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex items-center justify-center">
              <img
                src={cloudinaryLogo}
                alt="The Serenity Place Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900 block">
                The Serenity Place
              </span>
              <span className="block text-sm text-primary-600">
                Rehabilitation Center Nairobi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === item.href
                    ? "text-primary-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+254722970951"
              className="flex items-center text-gray-600 hover:text-primary-600 whitespace-nowrap"
            >
              <Phone className="w-4 h-4 mr-2" />
              (+254) 722 970 951-HELP
            </a>
            <Link to="/#contact" className="btn-primary whitespace-nowrap">
              Get Help
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50 flex-shrink-0"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+254722970951"
                  className="flex items-center px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (+254) 722 970 951-HELP
                </a>
                <Link
                  to="/#contact"
                  className="block px-3 py-2 mt-2 btn-primary text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Help
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
