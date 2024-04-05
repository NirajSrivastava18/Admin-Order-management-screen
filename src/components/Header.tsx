import React from 'react';
import './Header.css';
import bell from '../assets/images/bell.svg';
import person from '../assets/images/Right Side.svg';

interface Props {
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<Props> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="header">
      <div className="heading">
        <h1>All Orders</h1>
        <h5>All Orders</h5>
      </div>
      <div className="searchArea">
        <input type="text" placeholder="Search " onChange={handleSearch} />
        <img src={bell} alt="Bell Icon" />
        <img src={person} alt="Person Icon" />
      </div>
    </div>
  );
};

export default Header;
