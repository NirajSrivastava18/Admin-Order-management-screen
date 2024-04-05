import React, { useState } from 'react';
import './App.css';
import AllOrders from './components/AllOrders';
import SideNav from './components/SideNav';
import Header from './components/Header';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <SideNav />
      <div className="app-container">
        <Header onSearch={handleSearch} />
        <AllOrders />
      </div>
    </>
  );
};

export default App;
