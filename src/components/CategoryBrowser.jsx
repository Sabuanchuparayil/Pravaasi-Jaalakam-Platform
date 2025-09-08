import React from 'react';
    import { Link } from 'react-router-dom';
    import { BookOpen, PenTool, FileText, Heart, Globe, Users, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const CategoryBrowser = () => {
      const categories = [
        {
          id: 'stories',
          name: 'കഥകൾ',
          nameEn: 'Short Stories',
          description: 'Compelling narratives from expatriate life',
          descriptionMl: 'പ്രവാസ ജീവിതത്തിന്റെ ആകർഷകമായ കഥകൾ',
          icon: BookOpen,
          count: 156,
          color: 'from-orange-500 to-red-500',
          bgColor: 'bg-orange-50',
          textColor: 'text-orange-600',
          image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'poems',
          name: 'കവിതകൾ',
          nameEn: 'Poetry',
          description: 'Verses that capture the soul of diaspora',
          descriptionMl: 'പ്രവാസത്തിന്റെ ആത്മാവിനെ പകർത്തുന്ന കവിതകൾ',
          icon: PenTool,
          count: 89,
          color: 'from-fuchsia-500 to-pink-500',
          bgColor: 'bg-fuchsia-50',
          textColor: 'text-fuchsia-600',
          image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'articles',
          name: 'ലേഖനങ്ങൾ',
          nameEn: 'Articles & Essays',
          description: 'Thoughtful analysis of culture and society',
          descriptionMl: 'സംസ്കാരത്തിന്റെയും സമൂഹത്തിന്റെയും ചിന്താപൂർവ്വമായ വിശകലനം',
          icon: FileText,
          count: 67,
          color: 'from-purple-500 to-indigo-500',
          bgColor: 'bg-purple-50',
          textColor: 'text-purple-600',
          image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'memoirs',
          name: 'ഓർമ്മക്കുറിപ്പുകൾ',
          nameEn: 'Memoirs',
          description: 'Personal journeys and life experiences',
          descriptionMl: 'വ്യക്തിഗത യാത്രകളും ജീവിത അനുഭവങ്ങളും',
          icon: Heart,
          count: 43,
          color: 'from-rose-500 to-pink-500',
          bgColor: 'bg-rose-50',
          textColor: 'text-rose-600',
          image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'cultural',
          name: 'സാംസ്കാരിക പഠനങ്ങൾ',
          nameEn: 'Cultural Studies',
          description: 'Exploring heritage in modern contexts',
          descriptionMl: 'ആധുനിക സന്ദർഭങ്ങളിൽ പൈതൃകത്തെ പര്യവേക്ഷണം ചെയ്യുന്നു',
          icon: Globe,
          count: 34,
          color: 'from-emerald-500 to-teal-500',
          bgColor: 'bg-emerald-50',
          textColor: 'text-emerald-600',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        },
        {
          id: 'community',
          name: 'സമൂഹ കഥകൾ',
          nameEn: 'Community Stories',
          description: 'Collective experiences and shared narratives',
          descriptionMl: 'കൂട്ടായ അനുഭവങ്ങളും പങ്കിട്ട കഥകളും',
          icon: Users,
          count: 52,
          color: 'from-blue-500 to-cyan-500',
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-600',
          image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
        }
      ];

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        }
      };

      return (
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Explore by Category
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Crimson Text' }}>
                Dive into diverse genres of Malayalam literature, each offering unique perspectives 
                on the expatriate experience and cultural preservation.
              </p>
            </motion.div>

            {/* Categories Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    className="group"
                  >
                    <Link
                      to={`/category/${category.id}`}
                      className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 group-hover:border-slate-200"
                    >
                      {/* Category Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.nameEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          width="600"
                          height="400"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`} />
                        
                        {/* Icon */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>

                        {/* Count Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-bold rounded-full">
                            {category.count} works
                          </div>
                        </div>

                        {/* Category Name Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Manjari' }}>
                            {category.name}
                          </h3>
                          <p className="text-white/90 font-medium" style={{ fontFamily: 'Amaranth' }}>
                            {category.nameEn}
                          </p>
                        </div>
                      </div>

                      {/* Category Info */}
                      <div className="p-6 space-y-4">
                        {/* Description */}
                        <div className="space-y-2">
                          <p className="text-slate-700 leading-relaxed" style={{ fontFamily: 'Crimson Text' }}>
                            {category.description}
                          </p>
                          <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'Manjari' }}>
                            {category.descriptionMl}
                          </p>
                        </div>

                        {/* Stats and CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                            <span className={`font-semibold ${category.textColor}`} style={{ fontFamily: 'Amaranth' }}>
                              {category.count} Published
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 text-slate-400 group-hover:text-slate-600 transition-colors duration-200">
                            <span className="text-sm font-medium" style={{ fontFamily: 'Amaranth' }}>
                              Explore
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Browse All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/browse"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Amaranth' }}
              >
                <Globe className="w-5 h-5" />
                <span>Browse All Categories</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      );
    };

    export default CategoryBrowser;