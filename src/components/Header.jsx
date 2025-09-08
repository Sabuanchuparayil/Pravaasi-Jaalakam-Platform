import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import { Menu, X, BookOpen, User, PenTool, Settings } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';

    const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

      const navItems = [
        { name: 'Home', path: '/', icon: BookOpen },
        { name: 'Stories', path: '/stories', icon: BookOpen },
        { name: 'Poems', path: '/poems', icon: PenTool },
        { name: 'Authors', path: '/authors', icon: User },
        { name: 'Dashboard', path: '/dashboard', icon: Settings }
      ];

      return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-fuchsia-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display' }}>
                    Pravaasi Jaalakam
                  </h1>
                  <p className="text-xs text-orange-600 -mt-1">പ്രവാസി ജാലകം</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="flex items-center space-x-2 text-slate-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                    style={{ fontFamily: 'Amaranth' }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
                  style={{ fontFamily: 'Amaranth' }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-orange-600 to-fuchsia-500 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
                  style={{ fontFamily: 'Amaranth' }}
                >
                  Join Us
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden border-t border-orange-100 bg-white/95 backdrop-blur-sm"
                >
                  <div className="py-4 space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 rounded-lg mx-2"
                        style={{ fontFamily: 'Amaranth' }}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    ))}
                    <div className="border-t border-orange-100 pt-4 px-4 space-y-2">
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-center py-2 text-orange-600 font-medium"
                        style={{ fontFamily: 'Amaranth' }}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-center py-3 bg-gradient-to-r from-orange-600 to-fuchsia-500 text-white rounded-full font-medium"
                        style={{ fontFamily: 'Amaranth' }}
                      >
                        Join Us
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      );
    };

    export default Header;