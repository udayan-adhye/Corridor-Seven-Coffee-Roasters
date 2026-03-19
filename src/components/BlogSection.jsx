import React from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const blogs = [
    {
      title: "The Art of Roasting: From Green Bean to Cup",
      category: "Coffee Roasting",
      date: "Oct 12, 2025",
      image: "/images/blog1.png"
    },
    {
      title: "Brewing Perfection: The Ultimate AeroPress Guide",
      category: "Brewing",
      date: "Nov 05, 2025",
      image: "/images/blog2.png"
    },
    {
      title: "Exploring the Western Ghats: A Visit to Blue Tokai Estates",
      category: "Coffee Estates",
      date: "Dec 18, 2025",
      image: "/images/blog3.png"
    }
  ];

  return (
    <section id="blogs" style={{ backgroundColor: '#000', color: 'white', padding: '20px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h4 style={{ color: 'var(--primary)', letterSpacing: '0.25em', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 700 }}>Our Journal</h4>
          <h2 style={{ fontSize: 'max(3rem, 4vw)', marginBottom: '20px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Corridor Seven Blogs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto' }}>
            Deep dives into specialty coffee culture, roasting techniques, and our journey to the source.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', justifyContent: 'center' }}>
          {blogs.map((blog, i) => (
            <motion.div 
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ cursor: 'pointer' }}
            >
              <div style={{ 
                borderRadius: '24px', 
                overflow: 'hidden', 
                height: '250px', 
                marginBottom: '25px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="blog-img" />
              </div>
              <span style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{blog.category}</span>
              <h3 style={{ fontSize: '1.4rem', margin: '15px 0', lineHeight: 1.4 }}>{blog.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>{blog.date}</p>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <button className="btn-outline">Read All Articles</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
