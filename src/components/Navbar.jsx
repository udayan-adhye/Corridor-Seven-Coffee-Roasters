import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5, ease: 'easeOut' }
    })
  };

  const navLinks = [
    { name: 'Shop', path: '/' },
    { name: 'Academy', path: '/' },
    { name: 'Story', path: '/about' },
    { name: 'Wholesale', path: '/wholesale' },
    { name: 'Spaces', path: '/spaces' },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        zIndex: 1000, 
        padding: scrolled ? '15px 5vw' : '25px 5vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.4s ease'
      }} 
      className={scrolled ? "glass-nav" : ""}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div 
          className="logo" 
          style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.15em', cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          CORRIDOR SEVEN
        </motion.div>
      </Link>
      
      <div className="nav-links" style={{ display: 'flex', gap: '40px' }}>
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            custom={i + 1}
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
          >
            <Link 
              to={link.path}
              style={{ 
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-light)', 
                textDecoration: 'none', 
                fontWeight: 600,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                position: 'relative',
                opacity: location.pathname === link.path ? 1 : 0.9,
                transition: 'var(--transition-smooth)'
              }}
              className="nav-link-hover"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="nav-actions" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <motion.button 
          whileHover={{ scale: 1.1, color: 'var(--primary)' }}
          whileTap={{ scale: 0.9 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', transition: 'color 0.3s' }}
        >
          <Search size={22} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, color: 'var(--primary)' }}
          whileTap={{ scale: 0.9 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', transition: 'color 0.3s' }}
        >
          <User size={22} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, color: 'var(--primary)' }}
          whileTap={{ scale: 0.9 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-light)', transition: 'color 0.3s' }}
        >
          <ShoppingCart size={22} />
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
