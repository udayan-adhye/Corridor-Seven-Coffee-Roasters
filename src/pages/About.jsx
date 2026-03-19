import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', backgroundColor: '#0D0D0D', color: 'white', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1 style={{ fontSize: 'max(4rem, 6vw)', marginBottom: '20px' }}>Our Story</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            Celebrating and elevating Indian specialty coffee culture.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Born from a Passion</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px', lineHeight: 1.8 }}>
              Corridor Seven Coffee Roasters was born from a simple desire: to bring the incredible diversity and quality of Indian specialty coffee to the forefront.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              We partner directly with farmers across the Western Ghats, ensuring sustainable practices and exceptional bean quality. Every batch is roasted with precision in our Nagpur roastery.
            </p>
          </div>
          <div className="glass-morphism" style={{ height: '500px', overflow: 'hidden' }}>
            <img src="/images/roastery.png" alt="Our Roastery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
