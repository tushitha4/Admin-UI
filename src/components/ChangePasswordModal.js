import React, { useState, useEffect } from 'react';

const ChangePasswordModal = ({ closeModal, onUpdatePassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState(0);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const [rules, setRules] = useState({
    length: false,
    uppercase: false,
    number: false
  });

  useEffect(() => {
    const password = newPassword;
    let newStrength = 0;
    const newRules = { length: false, uppercase: false, number: false };

    if (password.length >= 8) {
      newStrength++;
      newRules.length = true;
    }

    if (/[A-Z]/.test(password)) {
      newStrength++;
      newRules.uppercase = true;
    }

    if (/[0-9]/.test(password)) {
      newStrength++;
      newRules.number = true;
    }

    if (/[!@#$%^&*]/.test(password)) {
      newStrength++;
    }

    setStrength(newStrength);
    setRules(newRules);
  }, [newPassword]);

  const togglePassword = (field) => {
    if (field === 'current') setShowCurrentPassword(!showCurrentPassword);
    if (field === 'new') setShowNewPassword(!showNewPassword);
    if (field === 'confirm') setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div 
      onClick={closeModal}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        backdropFilter: 'blur(6px)',
        background: 'rgba(0, 0, 0, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '420px',
          background: '#f7f7f7',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          animation: 'pop 0.3s ease'
        }}
      >
        {/* Popup Header */}
        <div style={{
          background: '#ff1f1f',
          color: '#fff',
          textAlign: 'center',
          padding: '16px'
        }}>
          <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>Change Password</h2>
          <p style={{ fontSize: '12px', opacity: '0.9' }}>
            Update your password to keep your account secure.
          </p>
        </div>

        {/* Popup Body */}
        <div style={{ padding: '20px' }}>
          {/* Current Password */}
          <label style={{ fontSize: '13px', margin: '10px 0 5px', display: 'block', fontWeight: '500' }}>
            Current Password
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#eee',
            borderRadius: '6px',
            padding: '8px 10px',
            marginBottom: '10px'
          }}>
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              style={{
                border: 'none',
                background: 'transparent',
                flex: 1,
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <span 
              onClick={() => togglePassword('current')}
              style={{ cursor: 'pointer', color: '#777' }}
            >
              <i className={`fa-regular ${showCurrentPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>

          {/* New Password */}
          <label style={{ fontSize: '13px', margin: '10px 0 5px', display: 'block', fontWeight: '500' }}>
            New Password
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: newPassword ? '#fff' : '#eee',
            borderRadius: '6px',
            padding: '8px 10px',
            marginBottom: '10px',
            border: newPassword ? '2px solid #ff1f1f' : 'none'
          }}>
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              style={{
                border: 'none',
                background: 'transparent',
                flex: 1,
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <span 
              onClick={() => togglePassword('new')}
              style={{ cursor: 'pointer', color: '#777' }}
            >
              <i className={`fa-regular ${showNewPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>

          {/* Password Strength */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '11px',
            marginTop: '10px',
            fontWeight: '600'
          }}>
            <span>PASSWORD STRENGTH</span>
            <span>{strengthLabels[strength - 1] || 'Weak'}</span>
          </div>
          <div style={{ display: 'flex', gap: '5px', margin: '6px 0' }}>
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                style={{
                  height: '4px',
                  flex: 1,
                  background: bar <= strength ? '#ff1f1f' : '#ddd',
                  borderRadius: '3px'
                }}
              />
            ))}
          </div>

          {/* Password Rules */}
          <div style={{
            background: '#eee',
            padding: '10px',
            borderRadius: '6px',
            fontSize: '12px',
            color: '#ff1f1f',
            marginTop: '8px'
          }}>
            <p style={{ color: rules.length ? 'green' : '#ff1f1f' }}>
              {rules.length ? '×' : '·'} At least 8 characters
            </p>
            <p style={{ color: rules.uppercase ? 'green' : '#ff1f1f' }}>
              {rules.uppercase ? '×' : '·'} At least one uppercase letter
            </p>
            <p style={{ color: rules.number ? 'green' : '#ff1f1f' }}>
              {rules.number ? '×' : '·'} At least one number
            </p>
          </div>

          {/* Confirm Password */}
          <label style={{ fontSize: '13px', margin: '10px 0 5px', display: 'block', fontWeight: '500' }}>
            Confirm New Password
          </label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#eee',
            borderRadius: '6px',
            padding: '8px 10px',
            marginBottom: '10px'
          }}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type new password"
              style={{
                border: 'none',
                background: 'transparent',
                flex: 1,
                outline: 'none',
                fontSize: '14px'
              }}
            />
            <span 
              onClick={() => togglePassword('confirm')}
              style={{ cursor: 'pointer', color: '#777' }}
            >
              <i className={`fa-regular ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </span>
          </div>
        </div>

        {/* Popup Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px',
          background: '#fff'
        }}>
          <button 
            onClick={closeModal}
            style={{
              background: '#e5e5e5',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Cancel
          </button>
          <button 
            onClick={onUpdatePassword}
            style={{
              background: '#ff1f1f',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            <i className="fa-solid fa-circle-check"></i> Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
