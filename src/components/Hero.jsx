import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { scrollY } = useScroll();
  // Parallax effects
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityBg = useTransform(scrollY, [0, 500], [0.6, 0.2]);
  const scaleBg = useTransform(scrollY, [0, 1000], [1.1, 1.3]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: custom * 0.15,
      }
    })
  };

  return (
    <section className="hero" style={{ 
      minHeight: '100vh', 
      height: 'auto',
      display: 'flex', 
      paddingTop: '80px',
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--secondary)'
    }}>
      <motion.div className="hero-bg" 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '120%',
          height: '120%',
          backgroundImage: 'url(/images/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: opacityBg,
          y: yBg,
          scale: scaleBg,
          filter: 'brightness(0.8) contrast(1.1)'
        }}
      />
      
      {/* Subtle overlay gradient for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to top, var(--secondary) 0%, transparent 100%)',
        opacity: 0.3,
        zIndex: 1
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <motion.h4 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{ 
              color: 'var(--primary)', 
              marginBottom: '25px', 
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              fontWeight: 700
            }}
          >
            An Ode To Indian Coffee
          </motion.h4>
          
          <motion.h1 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{ 
              fontSize: 'max(3rem, 7vw)', 
              color: 'var(--text-light)', 
              lineHeight: 1.1, 
              marginBottom: '35px',
              maxWidth: '1000px',
              letterSpacing: '-0.03em'
            }}
          >
            Experience the <br/> 
            <span className="text-gradient">Original Soul</span>
          </motion.h1>
          
          <motion.p 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ 
              color: 'rgba(253, 251, 250, 0.85)', 
              fontSize: '1.25rem', 
              maxWidth: '600px', 
              marginBottom: '45px',
              fontWeight: 400,
              lineHeight: 1.8
            }}
          >
            From the mystical hills to your morning cup. 
            Discover the incredible diversity and quality of Indian specialty coffee, roasted to order.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}
          >
            <a href="#shop" className="btn-primary">Shop Now</a>
            <Link to="/academy" style={{ 
              color: 'var(--text-light)', 
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'var(--transition-smooth)',
              opacity: 0.9,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '0.9';
              e.currentTarget.style.color = 'var(--text-light)';
            }}
            >
              Learn More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
