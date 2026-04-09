import React from 'react';

const Sidebar = ({ showMain }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '90px',
      height: '100vh',
      background: '#f3caca',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px'
    }}>
      {/* Logo */}
      <img 
        src="/logo.png" 
        alt="Logo" 
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          marginBottom: '20px',
          objectFit: 'cover'
        }}
      />

      {/* Back Button */}
      <button 
        onClick={showMain}
        style={{
          width: '100%',
          background: '#ff2d2d',
          color: '#fff',
          textAlign: 'center',
          padding: '12px 0',
          fontSize: '14px',
          cursor: 'pointer',
          marginTop: '20px',
          fontWeight: '500',
          border: 'none'
        }}
      >
        ← Back
      </button>
    </div>
  );
};

export default Sidebar;
