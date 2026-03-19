import React from 'react';
import { motion } from 'framer-motion';

const Wholesale = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', backgroundColor: '#0D0D0D', color: 'white', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1 style={{ fontSize: 'max(4rem, 6vw)', marginBottom: '20px' }}>Wholesale</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            Elevate your coffee experience with Corridor Seven. From cafes to offices, we provide the finest specialty beans roasted to order.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-morphism" 
            style={{ padding: '40px', textAlign: 'center' }}
          >
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '10px' }}>33+</h2>
            <h3>Tonnes / Year</h3>
            <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.6)' }}>Our roast volume continues to grow, serving partners globally.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-morphism" 
            style={{ padding: '40px', textAlign: 'center' }}
          >
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '10px' }}>500+</h2>
            <h3>Cafe Partners</h3>
            <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.6)' }}>Trusting us for their daily brew and consistent quality.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass-morphism" 
            style={{ padding: '40px', textAlign: 'center' }}
          >
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '10px' }}>Global</h2>
            <h3>Shipping</h3>
            <p style={{ marginTop: '15px', color: 'rgba(255,255,255,0.6)' }}>Delivering the heart of Indian coffee to every corner of the world.</p>
          </motion.div>
        </div>

        {/* Placeholder for form */}
        <div style={{ marginTop: '100px', textAlign: 'center' }}>
          <button className="btn-primary">Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
