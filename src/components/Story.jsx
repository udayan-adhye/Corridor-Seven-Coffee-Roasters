import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = totalMiliseconds / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Story = () => {
  return (
    <section id="story" style={{ 
      backgroundColor: '#000', 
      color: 'white',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '40px',
          textAlign: 'center'
        }}>
          {/* Left Column: Portrait Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ 
              width: '100%',
              maxWidth: '450px',
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
            }}
          >
            <img 
              src="https://corridorseven.coffee/cdn/shop/files/Placeholder_Image_82897c1f-397e-4dd8-94b5-83c825670310.png?v=1742982840&width=1500" 
              alt="Mithilesh Vazalwar" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </motion.div>

          {/* Right Column: Accomplishments */}
          <div style={{ width: '100%' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span style={{ 
                color: 'var(--primary)', 
                fontWeight: 700, 
                letterSpacing: '0.4em', 
                textTransform: 'uppercase', 
                fontSize: '0.9rem',
                display: 'block',
                marginBottom: '20px'
              }}>Founder & CEO</span>
              
              <h2 style={{ 
                fontSize: 'max(2.8rem, 6vw)', 
                lineHeight: 1.1, 
                fontWeight: 800, 
                marginBottom: '30px',
                textTransform: 'uppercase'
              }}>
                Mithilesh Vazalwar
              </h2>

              <p style={{ 
                fontSize: '1.1rem', 
                color: 'rgba(255,255,255,0.7)', 
                lineHeight: 1.7, 
                marginBottom: '40px',
                fontStyle: 'italic',
                borderLeft: 'none',
                paddingLeft: '0'
              }}>
                Corridor Seven Coffee Roasters | Coffee Q-Grader <br className="desktop-only" /> | Roaster | Trainer
                <br/>
                Championing Indian specialty coffee, from farm to cup.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '4rem', color: 'var(--primary)', fontWeight: 800, lineHeight: 1 }}>
                    #<Counter value="1" />
                  </div>
                  <div style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.6 }}>
                    National Aeropress<br/>Champion 2017
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ fontSize: '4rem', color: 'var(--primary)', fontWeight: 800, lineHeight: 1 }}>
                    #<Counter value="1" />
                  </div>
                  <div style={{ color: 'white', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.6 }}>
                    National Barista<br/>Champion 2022
                  </div>
                </div>
              </div>

              <Link to="/about" className="btn-primary" style={{ padding: '20px 50px', fontSize: '1rem' }}>Our Story</Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
