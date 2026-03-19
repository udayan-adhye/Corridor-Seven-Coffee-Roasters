import React from 'react';
import { motion } from 'framer-motion';

const Spaces = () => {
  return (
    <div className="page-container" style={{ paddingTop: '120px', backgroundColor: '#0D0D0D', color: 'white', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1 style={{ fontSize: 'max(4rem, 6vw)', marginBottom: '20px' }}>Spaces</h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            Discover our Roastery, Bakery, and community events.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {['Roastery', 'In-house Bakery', 'Faith in Humanity', 'Coffee Rave'].map((space, i) => (
            <motion.div 
              key={space}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-morphism" 
              style={{ padding: '40px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
              <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{space}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>Details about {space} experience.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spaces;
