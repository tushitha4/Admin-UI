import React from 'react';

const MainPage = ({ showEdit, openModal }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px' }}>
      {/* Header Card */}
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '25px',
        textAlign: 'center',
        marginBottom: '25px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ fontWeight: '600', marginBottom: '5px' }}>Admin Settings</h2>
        <p style={{ color: '#7a7a7a', fontSize: '14px' }}>
          Manage your account credentials and security preferences.
        </p>
      </div>

      {/* Profile Section */}
      <div style={{
        background: '#f3caca',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '25px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          Profile Section
          <span 
            onClick={showEdit}
            style={{
              color: '#ff2d2d',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Edit Profile
          </span>
        </div>
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'url(https://i.pravatar.cc/150) center/cover',
              position: 'relative'
            }}>
              <div style={{
                content: '',
                position: 'absolute',
                bottom: '4px',
                right: '4px',
                width: '12px',
                height: '12px',
                background: '#ff2d2d',
                borderRadius: '50%',
                border: '2px solid #fff'
              }}></div>
            </div>
            <div>
              <strong style={{ fontSize: '16px' }}>
                Alex Johnson 
                <span style={{
                  background: '#ff2d2d',
                  color: '#fff',
                  fontSize: '11px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginLeft: '10px',
                  fontWeight: '600'
                }}>
                  SUPER ADMIN
                </span>
              </strong>
              <div style={{ color: '#777', fontSize: '14px', marginTop: '4px' }}>
                alex.j@company.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div style={{
        background: '#f3caca',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '25px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: '600',
          marginBottom: '15px'
        }}>
          Security Settings
        </div>
        <div style={{
          background: '#fff',
          borderRadius: '12px',
          padding: '20px'
        }}>
          {/* Password Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0',
            borderBottom: '1px solid #f0f0f0'
          }}>
            <div>
              <strong>Password</strong>
              <div style={{ color: '#777', fontSize: '14px' }}>
                Last changed 3 months ago
              </div>
            </div>
            <button 
              onClick={openModal}
              style={{
                background: '#ff2d2d',
                color: '#fff',
                border: 'none',
                padding: '9px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '500'
              }}
            >
              Change Password
            </button>
          </div>

          {/* Last Login Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0',
            borderBottom: '1px solid #f0f0f0'
          }}>
            <div>
              <strong>Last Login</strong>
              <div style={{ color: '#777', fontSize: '14px' }}>
                October 24, 2023 at 10:15 AM
              </div>
            </div>
            <div style={{
              textAlign: 'right',
              fontSize: '12px',
              color: '#888'
            }}>
              IP: 192.168.1.104<br/>
              San Francisco, US
            </div>
          </div>

          {/* Two-Factor Authentication Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0'
          }}>
            <div>
              <strong>Two-Factor Authentication</strong>
              <div style={{ color: '#777', fontSize: '14px' }}>
                Highly recommended for administrators
              </div>
            </div>
            <span style={{
              background: '#d4edda',
              color: '#1a7f37',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              Inactive
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
