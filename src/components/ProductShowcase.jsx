import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Salawara Estate',
    origin: 'Chikmagalur',
    roast: 'Medium Roast',
    notes: ['Chocolate', 'Hazelnut', 'Caramel'],
    price: '₹550'
  },
  {
    id: 2,
    name: 'Bison Blend',
    origin: 'Multiple Estates',
    roast: 'Dark Roast',
    notes: ['Molasses', 'Smoke', 'Dark Berry'],
    price: '₹480'
  },
  {
    id: 3,
    name: 'Riverdale Estate',
    origin: 'Shevaroy Hills',
    roast: 'Light Roast',
    notes: ['Floral', 'Pear', 'Honey'],
    price: '₹620'
  }
];

const ProductShowcase = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="shop" className="product-showcase">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h4 style={{ color: 'var(--primary)', letterSpacing: '0.2em', marginBottom: '15px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Coffee For You</h4>
          <h2 style={{ fontSize: 'max(2.2rem, 5vw)', color: 'var(--secondary)', lineHeight: 1.2 }}>The Season's Best Harvests</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '20px' 
          }}
        >
          {products.map((product) => (
            <motion.div 
              variants={itemVariants}
              key={product.id} 
              className="product-card"
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ 
                padding: '30px', 
                transition: 'box-shadow 0.4s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'white',
                borderRadius: '24px',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid rgba(0,0,0,0.03)'
              }}
              onHoverStart={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-dark)';
              }}
              onHoverEnd={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-premium)';
              }}
            >
              <div style={{ 
                height: '260px', 
                marginBottom: '25px', 
                borderRadius: '16px',
                backgroundImage: 'url(/images/beans.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.95) contrast(1.1)',
                transition: 'transform 0.5s ease',
              }}
              className="product-img-bg"
              />
              
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'var(--secondary)' }}>{product.name}</h3>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '20px', fontSize: '0.95rem' }}>{product.origin} <span style={{color: '#ccc'}}>|</span> {product.roast}</p>
              
              <div style={{ display: 'flex', gap: '8px', marginBottom: '30px', flexWrap: 'wrap' }}>
                {product.notes.map((note) => (
                  <span key={note} style={{ 
                    fontSize: '0.75rem', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    backgroundColor: '#F7F7F7',
                    color: 'var(--text-gray)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>{note}</span>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--secondary)' }}>{product.price}</span>
                <button 
                  className="btn-primary" 
                  style={{ padding: '12px 24px', fontSize: '0.8rem' }}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .product-card:hover .product-img-bg {
          transform: scale(1.05);
        }
      `}} />
    </section>
  );
};

export default ProductShowcase;
