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
      <img 
        src="/images/expertise.png" 
        alt="Expertise - Cuppers, Brewers, Q Graders" 
        style={{ 
          width: '100%', 
          height: 'auto', 
          display: 'block',
          objectFit: 'cover'
        }} 
      />
    </section>
  );
};

export default Expertise;
