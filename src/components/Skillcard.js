import React from "react";

const Skillcard = ({ title, imageSrc, isCentered, rotateContinuously }) => {
  const containerStyle = {
    display: isCentered ? 'flex' : '', // Apply flex display if centered
    flexWrap: 'wrap', // Ensure content wraps if necessary
    justifyContent: isCentered ? 'center' : '', // Center content if specified
  };

  const imageStyle = {
    height: '120px',
    width: '150px',
    animation: rotateContinuously ? 'spin 3s linear infinite' : 'none', // Apply animation if specified
  };

  return (
    <div style={containerStyle}>
      <img 
        src={imageSrc}
        alt={title} // Adding alt attribute for accessibility
        style={imageStyle}
      />
      <section      
        style={{  
          textAlign: 'center',  
          marginTop: '20px'
        }}
      >
        <strong>{title}</strong>
      </section>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Skillcard;
