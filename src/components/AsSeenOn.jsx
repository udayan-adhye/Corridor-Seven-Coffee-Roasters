import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'OZY', url: 'https://corridorseven.coffee/cdn/shop/files/ozy.png?v=1614334333&width=300' },
  { name: 'GRAZIA', url: 'https://corridorseven.coffee/cdn/shop/files/grazia.png?v=1614334333&width=300' },
  { name: 'livemint', url: 'https://corridorseven.coffee/cdn/shop/files/livemint.png?v=1614334333&width=300' },
  { name: 'TEDx', url: 'https://corridorseven.coffee/cdn/shop/files/tedx.png?v=1614334333&width=300' },
  { name: 'The Hindu', url: 'https://corridorseven.coffee/cdn/shop/files/the_hindu.png?v=1614334333&width=300' },
  { name: 'VOGUE', url: 'https://corridorseven.coffee/cdn/shop/files/vogue.png?v=1614334333&width=300' },
];

const AsSeenOn = () => {
  return (
    <section style={{ 
      padding: '40px 0', 
      backgroundColor: '#f9f9f9', 
      borderBottom: '1px solid #eee',
      overflow: 'hidden'
    }}>
      <div className="container">
        <h4 style={{ 
          textAlign: 'center', 
          fontSize: '0.8rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em', 
          color: '#999',
          marginBottom: '30px',
          fontWeight: 700
        }}>As Seen On</h4>
        
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '100px',
              width: 'fit-content'
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img 
                key={index} 
                src={logo.url} 
                alt={logo.name}
                style={{ 
                  height: '35px', 
                  width: 'auto', 
                  opacity: 0.6, 
                  filter: 'grayscale(100%) brightness(0.5)',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.6'}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOn;
