import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Play, Layers } from 'lucide-react';

const InstagramGrid = () => {
  const posts = [
    { type: 'image', url: '/images/insta1.png', label: 'Minimalist Branding' },
    { type: 'reel', url: '/images/insta2.png', label: 'Coffee Making' },
    { type: 'reel', url: '/images/insta3.png', label: 'Lifestyle' },
    { type: 'reel', url: '/images/insta4.png', label: 'New Day Companion' },
    { type: 'reel', url: '/images/insta5.png', label: 'New Menu' },
    { type: 'album', url: '/images/insta6.png', label: 'Album Culture' }
  ];

  return (
    <section id="instagram" style={{ 
      backgroundColor: '#fff', 
      padding: '60px 0',
      minHeight: '600px'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <Instagram size={24} color="var(--primary)" />
            <h4 style={{ color: 'var(--primary)', letterSpacing: '0.25em', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Socials</h4>
          </div>
          <h2 style={{ fontSize: 'max(2.5rem, 3.5vw)', marginBottom: '15px', color: '#000', fontWeight: 800 }}>FOLLOW OUR JOURNEY</h2>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>@corridorseven — Indian Specialty Coffee Experience</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              style={{ 
                aspectRatio: '1/1', 
                borderRadius: '20px', 
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundColor: '#eee',
                position: 'relative'
              }}
            >
              <img src={post.url} alt={post.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', opacity: 0.8 }}>
                {post.type === 'reel' && <Play size={20} fill="white" />}
                {post.type === 'album' && <Layers size={20} fill="white" />}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
           <a href="https://instagram.com/corridorsevencoffee" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '16px 40px', fontSize: '1rem' }}>Visit Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
