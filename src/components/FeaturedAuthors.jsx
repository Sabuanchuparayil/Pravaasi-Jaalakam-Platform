import React from 'react';
    import { Link } from 'react-router-dom';
    import { BookOpen, Award, MapPin, ArrowRight } from 'lucide-react';
    import { motion } from 'framer-motion';

    const FeaturedAuthors = () => {
      const authors = [
        {
          id: 1,
          name: "രാജേഷ് കുമാർ",
          nameEn: "Rajesh Kumar",
          bio: "Dubai-based engineer turned storyteller, weaving tales of expatriate life with profound emotional depth.",
          bioMl: "ദുബായ് ആസ്ഥാനമായുള്ള എഞ്ചിനീർ, പ്രവാസ ജീവിതത്തിന്റെ കഥകൾ ആഴത്തിലുള്ള വികാരങ്ങളോടെ പറയുന്നു.",
          location: "Dubai, UAE",
          worksCount: 24,
          specialization: "Short Stories",
          awards: ["Best Expatriate Story 2023", "Reader's Choice Award"],
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          joinedYear: 2022
        },
        {
          id: 2,
          name: "സുമിത്ര നായർ",
          nameEn: "Sumitra Nair",
          bio: "Poet and cultural preservationist, capturing the essence of Malayalam heritage in contemporary verse.",
          bioMl: "കവയിത്രിയും സാംസ്കാരിക സംരക്ഷകയും, സമകാലിക കവിതകളിൽ മലയാളി പൈതൃകത്തിന്റെ സാരം പകർത്തുന്നു.",
          location: "Abu Dhabi, UAE",
          worksCount: 18,
          specialization: "Poetry",
          awards: ["Excellence in Poetry 2023"],
          image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          joinedYear: 2021
        },
        {
          id: 3,
          name: "അനിൽ വർമ്മ",
          nameEn: "Anil Varma",
          bio: "Cultural analyst and essayist, exploring the intersection of tradition and modernity in expatriate communities.",
          bioMl: "സാംസ്കാരിക വിശകലകനും ലേഖകനും, പ്രവാസി സമൂഹങ്ങളിലെ പാരമ്പര്യവും ആധുനികതയും തമ്മിലുള്ള കവലകൾ പര്യവേക്ഷണം ചെയ്യുന്നു.",
          location: "Sharjah, UAE",
          worksCount: 31,
          specialization: "Essays & Articles",
          awards: ["Cultural Bridge Award 2023", "Community Impact Award"],
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          joinedYear: 2020
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
        <section className="py-20 bg-white">
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
                Featured Authors
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto" style={{ fontFamily: 'Crimson Text' }}>
                Meet the talented voices shaping Malayalam literature in the UAE, 
                each bringing unique perspectives and stories from their expatriate journey.
              </p>
            </motion.div>

            {/* Authors Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {authors.map((author) => (
                <motion.div
                  key={author.id}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
                >
                  {/* Author Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={author.image}
                      alt={author.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Specialization Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-fuchsia-500 text-white text-sm font-medium rounded-full" style={{ fontFamily: 'Amaranth' }}>
                        {author.specialization}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-medium" style={{ fontFamily: 'Amaranth' }}>
                        {author.location}
                      </span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="p-6 space-y-4">
                    {/* Name */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1" style={{ fontFamily: 'Manjari' }}>
                        {author.name}
                      </h3>
                      <p className="text-orange-600 font-medium" style={{ fontFamily: 'Amaranth' }}>
                        {author.nameEn}
                      </p>
                    </div>

                    {/* Bio */}
                    <div className="space-y-2">
                      <p className="text-slate-700 text-sm leading-relaxed" style={{ fontFamily: 'Crimson Text' }}>
                        {author.bio}
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed" style={{ fontFamily: 'Manjari' }}>
                        {author.bioMl}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between py-3 border-t border-slate-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600" style={{ fontFamily: 'Playfair Display' }}>
                          {author.worksCount}
                        </div>
                        <div className="text-xs text-slate-500 font-medium" style={{ fontFamily: 'Amaranth' }}>
                          Published Works
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-fuchsia-500" style={{ fontFamily: 'Playfair Display' }}>
                          {author.awards.length}
                        </div>
                        <div className="text-xs text-slate-500 font-medium" style={{ fontFamily: 'Amaranth' }}>
                          Awards
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-500" style={{ fontFamily: 'Playfair Display' }}>
                          {new Date().getFullYear() - author.joinedYear}
                        </div>
                        <div className="text-xs text-slate-500 font-medium" style={{ fontFamily: 'Amaranth' }}>
                          Years Active
                        </div>
                      </div>
                    </div>

                    {/* Awards */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-slate-700">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium" style={{ fontFamily: 'Amaranth' }}>
                          Recent Awards
                        </span>
                      </div>
                      <div className="space-y-1">
                        {author.awards.map((award, index) => (
                          <div key={index} className="text-sm text-slate-600 pl-6" style={{ fontFamily: 'Crimson Text' }}>
                            • {award}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* View Profile Button */}
                    <Link
                      to={`/author/${author.id}`}
                      className="group/btn inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200 pt-2"
                      style={{ fontFamily: 'Amaranth' }}
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>View Profile & Works</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Authors Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/authors"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Amaranth' }}
              >
                <Award className="w-5 h-5" />
                <span>Discover All Authors</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      );
    };

    export default FeaturedAuthors;