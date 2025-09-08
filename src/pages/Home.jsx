import React from 'react';
    import Header from '../components/Header';
    import Footer from '../components/Footer';
    import HeroSection from '../components/HeroSection';
    import FeaturedContent from '../components/FeaturedContent';
    import FeaturedAuthors from '../components/FeaturedAuthors';
    import CategoryBrowser from '../components/CategoryBrowser';

    export default function Home() {
      return (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <HeroSection />
            <FeaturedContent />
            <FeaturedAuthors />
            <CategoryBrowser />
          </main>
          <Footer />
        </div>
      );
    }