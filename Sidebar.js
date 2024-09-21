import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </div>

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
