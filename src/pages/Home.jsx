import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Story from '../components/Story';
import SOACourses from '../components/SOACourses';
import BlogSection from '../components/BlogSection';
import InstagramGrid from '../components/InstagramGrid';
import FAQ from '../components/FAQ';
import AsSeenOn from '../components/AsSeenOn';
import Expertise from '../components/Expertise';

const Home = () => {
  return (
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
      <Hero />
      <AsSeenOn />
      <ProductShowcase />
      <Expertise />
      <Story />
      <SOACourses />
      <BlogSection />
      <InstagramGrid />
      <FAQ />
    </div>
  );
};

export default Home;
