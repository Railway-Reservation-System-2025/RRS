// src/App.js
import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div className="App">
      <Dashboard handleItemClick={handleItemClick} activeItem={activeItem} />
      <div className="ml-[20%] mt-16 p-4">
        <Routes>
          
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
