import React from 'react';
    import { Link } from 'react-router-dom';
    import { BookOpen, PenTool, Users, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const HeroSection = () => {
      return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Traditional books and manuscripts"
              className="w-full h-full object-cover"
              loading="eager"
              width="2070"
              height="1380"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-orange-900/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span style={{ fontFamily: 'Playfair Display' }}>Pravaasi</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-fuchsia-400" style={{ fontFamily: 'Playfair Display' }}>
                    Jaalakam
                  </span>
                </h1>
                <p className="text-2xl sm:text-3xl text-orange-300 font-medium" style={{ fontFamily: 'Manjari' }}>
                  പ്രവാസി ജാലകം
                </p>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed"
                style={{ fontFamily: 'Crimson Text' }}
              >
                A digital sanctuary for Malayalam literature in the UAE, where expatriate voices 
                find their home and cultural heritage lives on through stories, poems, and shared experiences.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
              >
                <Link
                  to="/explore"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-fuchsia-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  style={{ fontFamily: 'Amaranth' }}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Literature</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/join-author"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 flex items-center space-x-2"
                  style={{ fontFamily: 'Amaranth' }}
                >
                  <PenTool className="w-5 h-5" />
                  <span>Become an Author</span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-orange-400" style={{ fontFamily: 'Playfair Display' }}>
                    500+
                  </div>
                  <div className="text-slate-300 font-medium" style={{ fontFamily: 'Amaranth' }}>
                    Published Works
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-fuchsia-400" style={{ fontFamily: 'Playfair Display' }}>
                    150+
                  </div>
                  <div className="text-slate-300 font-medium" style={{ fontFamily: 'Amaranth' }}>
                    Active Authors
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-400" style={{ fontFamily: 'Playfair Display' }}>
                    2K+
                  </div>
                  <div className="text-slate-300 font-medium" style={{ fontFamily: 'Amaranth' }}>
                    Community Members
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </section>
      );
    };

    export default HeroSection;