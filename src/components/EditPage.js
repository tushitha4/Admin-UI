import React from 'react';

const EditPage = ({ showMain, onSaveChanges }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '30px auto', padding: '0 20px' }}>
      {/* Pink Banner */}
      <div style={{
        background: '#f3caca',
        borderRadius: '12px',
        padding: '15px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h2>Edit Profile</h2>
        <p>Manage your account information and preferences.</p>
      </div>

      {/* Edit Form Card */}
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '20px'
      }}>
        {/* Form Rows */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value="Alex" 
            placeholder="First Name"
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
          <input 
            type="text" 
            value="Johnson" 
            placeholder="Last Name"
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <input 
            type="email" 
            value="alex.j@company.com" 
            placeholder="Email Address"
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value="Super Admin" 
            placeholder="Role"
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
          <input 
            type="text" 
            value="Support & Systems" 
            placeholder="Department"
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Alert */}
        <div style={{
          background: '#fdeaea',
          border: '1px solid #ffb3b3',
          color: '#b71c1c',
          padding: '12px',
          borderRadius: '8px',
          fontSize: '13px',
          marginTop: '15px'
        }}>
          Your last login was on October 24, 2023. If this wasn't you, please change your password immediately.
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '10px',
          marginTop: '20px'
        }}>
          <button 
            onClick={showMain}
            style={{
              background: '#e0e0e0',
              border: 'none',
              padding: '9px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500'
            }}
          >
            Cancel
          </button>
          <button 
            onClick={onSaveChanges}
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
