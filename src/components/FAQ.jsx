import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '25px 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer',
          padding: 0,
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000' }}>{question}</span>
        {isOpen ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--primary)" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: '#666', marginTop: '15px', lineHeight: 1.8, fontSize: '1rem' }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Who is the founder of Corridor Seven?",
      answer: "Mithilesh Vazalwar is the founder and CEO of Corridor Seven Coffee Roasters. He is a National Aeropress and Barista Champion who is passionate about elevating Indian specialty coffee."
    },
    {
      question: "Where is Corridor Seven based?",
      answer: "Our headquarters and roastery are located in Nagpur, Maharashtra. We also have experience centers and cafes in selected cities."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship our freshly roasted beans globally. Shipping rates and times vary depending on the destination."
    },
    {
      question: "What makes your coffee 'specialty'?",
      answer: "We source beans that score 80+ on the SCA scale, ensuring exceptional quality. Our direct trade relationships and precision roasting further enhance the unique flavor profiles of Indian estates."
    }
  ];

  return (
    <section id="faq" style={{ backgroundColor: '#fff', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h4 style={{ color: 'var(--primary)', letterSpacing: '0.25em', marginBottom: '20px', fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 700 }}>Questions</h4>
          <h2 style={{ fontSize: 'max(2.5rem, 3.5vw)', marginBottom: '15px', color: '#000' }}>Common Inquiries</h2>
        </div>
        
        <div style={{ marginTop: '40px' }}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
