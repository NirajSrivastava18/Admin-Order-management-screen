import React from 'react';
import './App.css';
import AllOrders from './components/AllOrders';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">All Orders</h1>
      <AllOrders />
    </div>
  );
};

export default App;
