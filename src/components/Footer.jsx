import React from 'react';
    import { Link } from 'react-router-dom';
    import { BookOpen, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-fuchsia-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display' }}>
                      Pravaasi Jaalakam
                    </h3>
                    <p className="text-sm text-orange-400">പ്രവാസി ജാലകം</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed" style={{ fontFamily: 'Crimson Text' }}>
                  A digital platform preserving and celebrating Malayalam literature in the UAE, 
                  connecting expatriate writers and readers through cultural heritage.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-200">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-200">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-orange-400" style={{ fontFamily: 'Amaranth' }}>
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {['Stories', 'Poems', 'Authors', 'Categories', 'Featured'].map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.toLowerCase()}`}
                        className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                        style={{ fontFamily: 'Amaranth' }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-fuchsia-400" style={{ fontFamily: 'Amaranth' }}>
                  Community
                </h4>
                <ul className="space-y-2">
                  {['Join as Author', 'Guidelines', 'Support', 'FAQ', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="text-slate-300 hover:text-fuchsia-400 transition-colors duration-200 text-sm"
                        style={{ fontFamily: 'Amaranth' }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-400" style={{ fontFamily: 'Amaranth' }}>
                  Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                    <p className="text-slate-300 text-sm" style={{ fontFamily: 'Crimson Text' }}>
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <a
                      href="mailto:info@pravaasijaalakam.com"
                      className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                      style={{ fontFamily: 'Crimson Text' }}
                    >
                      info@pravaasijaalakam.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <a
                      href="tel:+971501234567"
                      className="text-slate-300 hover:text-purple-400 transition-colors duration-200 text-sm"
                      style={{ fontFamily: 'Crimson Text' }}
                    >
                      +971 50 123 4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-800 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex flex-wrap items-center space-x-6 text-sm text-slate-400">
                  <Link to="/privacy" className="hover:text-orange-400 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/terms" className="hover:text-orange-400 transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/cookies" className="hover:text-orange-400 transition-colors duration-200">
                    Cookie Policy
                  </Link>
                </div>
                <div className="text-sm text-slate-400 text-center md:text-right">
                  <p>© {currentYear} Pravaasi Jaalakam. All rights reserved.</p>
                  <p className="mt-1">
                    Built with ❤️ by{' '}
                    <a
                      rel="nofollow"
                      target="_blank"
                      href="https://meku.dev"
                      className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                    >
                      Meku.dev
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;