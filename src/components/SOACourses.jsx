import React from 'react';
import { motion } from 'framer-motion';

const SOACourses = () => {
  return (
    <section id="academy" style={{ 
      padding: '20px 0', 
      backgroundColor: '#111', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* High-Contrast Background Image */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(https://corridorseven.coffee/cdn/shop/collections/Courses.jpg?v=1614334333&width=1500)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ 
            color: 'var(--primary)', 
            fontWeight: 700, 
            letterSpacing: '0.4em', 
            textTransform: 'uppercase', 
            fontSize: '0.85rem',
            display: 'block',
            marginBottom: '20px'
          }}>Professional Academy</span>
          
          <h2 style={{ 
            fontSize: 'max(3.5rem, 5vw)', 
            fontWeight: 800, 
            marginBottom: '30px',
            lineHeight: 1.1,
            textTransform: 'uppercase'
          }}>
            SOA COURSES BY A<br/>
            <span style={{ color: 'var(--primary)' }}>CHAMPIONSHIP WINNING TEAM</span>
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: '700px', 
            margin: '0 auto 50px', 
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.7
          }}>
            Elevate your coffee skills with our certified SOA programs. From brewing fundamentals to advanced roasting techniques, learn from the best in the industry.
          </p>

          <a href="/academy" className="btn-primary" style={{ padding: '18px 50px' }}>Explore Courses</a>
        </motion.div>
      </div>
    </section>
  );
};

export default SOACourses;
