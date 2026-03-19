import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '100px 0 50px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '60px',
          marginBottom: '80px'
        }}>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '30px', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.1em' }}>CORRIDOR SEVEN</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '25px' }}>
              An Ode to Indian Coffee. Roasting the finest specialty beans from the heart of India directly to your doorstep.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Instagram size={20} style={{ cursor: 'pointer', opacity: 0.7 }} />
              <Facebook size={20} style={{ cursor: 'pointer', opacity: 0.7 }} />
              <Twitter size={20} style={{ cursor: 'pointer', opacity: 0.7 }} />
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: 700 }}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Shop All', 'Subscriptions', 'Brewing Gear', 'Wholesale', 'Spaces'].map(item => (
                <li key={item} style={{ marginBottom: '15px' }}>
                  <a href={`/${item.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.3s' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: 700 }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center', color: 'rgba(255,255,255,0.5)' }}>
                <Mail size={16} /> info@corridorseven.coffee
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center', color: 'rgba(255,255,255,0.5)' }}>
                <Phone size={16} /> +91 950 386 2467
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'rgba(255,255,255,0.5)' }}>
                <MapPin size={16} style={{ marginTop: '5px', flexShrink: 0 }} /> 
                <span>Headquarters: Plot No. 7, Beside Ashish Tower, Nagpur, Maharashtra 440010</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: 700 }}>Newsletter</h4>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '25px' }}>Join our community for brewing tips and first access to microlots.</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="email" placeholder="Your email" style={{ 
                padding: '12px 20px', 
                borderRadius: '50px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                backgroundColor: 'rgba(255,255,255,0.05)',
                color: 'white',
                flex: 1,
                fontSize: '0.9rem'
              }} />
              <button className="btn-primary" style={{ padding: '12px 25px', fontSize: '0.8rem' }}>Join</button>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', letterSpacing: '0.05em' }}>
          &copy; {new Date().getFullYear()} Corridor Seven Coffee Roasters. All Coffee, No Clutter.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
