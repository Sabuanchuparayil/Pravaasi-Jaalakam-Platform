import React from 'react';
    import { Link } from 'react-router-dom';
    import { BookOpen, Heart, Eye, Calendar, User, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const FeaturedContent = () => {
      const featuredStories = [
        {
          id: 1,
          title: "വിദേശ മണ്ണിലെ മലയാളി മനസ്സ്",
          titleEn: "The Malayali Heart in Foreign Soil",
          author: "രാജേഷ് കുമാർ",
          authorEn: "Rajesh Kumar",
          excerpt: "ദുബായിലെ അംബരചുംബികളുടെ നിഴലിൽ, ഒരു മലയാളി തൊഴിലാളിയുടെ ഹൃദയത്തിൽ കേരളത്തിന്റെ ഓർമ്മകൾ...",
          category: "Short Story",
          readTime: "8 min read",
          views: 1250,
          likes: 89,
          publishedAt: "2024-01-15",
          image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 2,
          title: "പ്രവാസ കാവ്യം",
          titleEn: "Expatriate Poetry",
          author: "സുമിത്ര നായർ",
          authorEn: "Sumitra Nair",
          excerpt: "അന്യദേശത്തെ സൂര്യാസ്തമയത്തിൽ, മാതൃഭൂമിയുടെ സ്മരണകൾ കവിതയായി മാറുന്നു...",
          category: "Poetry",
          readTime: "3 min read",
          views: 890,
          likes: 156,
          publishedAt: "2024-01-12",
          image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          id: 3,
          title: "സാംസ്കാരിക പാലം",
          titleEn: "Cultural Bridge",
          author: "അനിൽ വർമ്മ",
          authorEn: "Anil Varma",
          excerpt: "രണ്ട് സംസ്കാരങ്ങൾക്കിടയിൽ പാലമായി നിൽക്കുന്ന പ്രവാസി കുടുംബത്തിന്റെ കഥ...",
          category: "Article",
          readTime: "12 min read",
          views: 2100,
          likes: 203,
          publishedAt: "2024-01-10",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ];

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        }
      };

      return (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
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
                Editor's Choice
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Crimson Text' }}>
                Discover the finest works from our community of talented Malayalam writers, 
                carefully curated to showcase the depth and beauty of expatriate literature.
              </p>
            </motion.div>

            {/* Featured Content Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {featuredStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  variants={itemVariants}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className={`relative ${index === 0 ? 'h-80' : 'h-48'} overflow-hidden`}>
                    <img
                      src={story.image}
                      alt={story.titleEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full" style={{ fontFamily: 'Amaranth' }}>
                        {story.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className={`text-white font-bold mb-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`} style={{ fontFamily: 'Manjari' }}>
                        {story.title}
                      </h3>
                      <p className="text-orange-200 text-sm" style={{ fontFamily: 'Amaranth' }}>
                        {story.titleEn}
                      </p>
                    </div>
                  </div>

                  <div className={`p-6 ${index === 0 ? 'space-y-6' : 'space-y-4'}`}>
                    {/* Author Info */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-fuchsia-400 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900" style={{ fontFamily: 'Manjari' }}>
                          {story.author}
                        </p>
                        <p className="text-sm text-slate-600" style={{ fontFamily: 'Amaranth' }}>
                          {story.authorEn}
                        </p>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className={`text-slate-700 leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`} style={{ fontFamily: 'Manjari' }}>
                      {story.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{story.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{story.likes}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(story.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Link
                      to={`/story/${story.id}`}
                      className="group/btn inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
                      style={{ fontFamily: 'Amaranth' }}
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/featured"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-fuchsia-500 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Amaranth' }}
              >
                <BookOpen className="w-5 h-5" />
                <span>View All Featured Content</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      );
    };

    export default FeaturedContent;