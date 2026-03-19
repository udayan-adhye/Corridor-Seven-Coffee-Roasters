import React from 'react';

const Expertise = () => {
  return (
    <section id="expertise" style={{ 
      position: 'relative', 
      width: '100%', 
      height: 'auto', 
      minHeight: '600px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '40px 0' }}>
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '400px' }}>
          <img src="/images/cuppers_stock.png" alt="Cuppers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontWeight: 800, fontSize: '1.5rem', textTransform: 'uppercase' }}>Cuppers</div>
        </div>
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '400px' }}>
          <img src="/images/brewers_stock.png" alt="Brewers" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontWeight: 800, fontSize: '1.5rem', textTransform: 'uppercase' }}>Brewers</div>
        </div>
        <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '400px' }}>
          <img src="/images/graders_stock.png" alt="Q Graders" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontWeight: 800, fontSize: '1.5rem', textTransform: 'uppercase' }}>Graders</div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
