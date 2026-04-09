import React from 'react';

const Header = () => {
  return (
    <div style={{
      background: '#fff',
      padding: '15px 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid #e6e6e6'
    }}>
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search Cases, Users..." 
        style={{
          width: '45%',
          padding: '10px 18px',
          borderRadius: '25px',
          border: 'none',
          background: '#f1f3f6',
          outline: 'none',
          fontSize: '14px'
        }}
      />

      {/* Top Icons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        fontSize: '18px',
        color: '#555'
      }}>
        <i className="fa-regular fa-bell"></i>
        <i className="fa-solid fa-gear"></i>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'url(https://i.pravatar.cc/100) center/cover'
        }}></div>
      </div>
    </div>
  );
};

export default Header;
