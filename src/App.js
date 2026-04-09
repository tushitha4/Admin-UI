import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainPage from './components/MainPage';
import EditPage from './components/EditPage';
import ChangePasswordModal from './components/ChangePasswordModal';

function App() {
  const [showEditPage, setShowEditPage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSaveChanges = () => {
    alert('Profile changes saved successfully!');
    setShowEditPage(false);
  };

  const handleUpdatePassword = () => {
    alert('Password updated successfully!');
    setShowModal(false);
  };

  return (
    <div className="flex" style={{ backgroundColor: '#f5f6f8', minHeight: '100vh' }}>
      <Sidebar showMain={() => setShowEditPage(false)} />
      <div className="flex-1" style={{ marginLeft: '90px' }}>
        <Header />
        {showEditPage ? (
          <EditPage 
            showMain={() => setShowEditPage(false)} 
            onSaveChanges={handleSaveChanges}
          />
        ) : (
          <MainPage 
            showEdit={() => setShowEditPage(true)} 
            openModal={() => setShowModal(true)} 
          />
        )}
        {showModal && (
          <ChangePasswordModal 
            closeModal={() => setShowModal(false)} 
            onUpdatePassword={handleUpdatePassword}
          />
        )}
      </div>
    </div>
  );
}

export default App;
