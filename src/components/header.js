import React, { useState } from 'react'; // ⬅️ pastikan pakai useState
import PropTypes from 'prop-types';
import { useTitle } from '../hooks/usetitle';
import { Link } from 'react-router-dom';

const Header = ({ title, onSearch }) => {
  useTitle(title);
  const [keyword, setKeyword] = useState('');

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    onSearch(e.target.value); // ⬅️ kirim keyword ke parent
  };

  return (
    <header className="bg-[#2d2d2d] text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/image/logo.png" alt="Logo" className="h-12 w-12" />
          <h1 className="text-xl font-bold">Beauty in Click</h1>
        </div>

        {/* Search + Cart */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search Product"
            className="border border-[#FA2A68] hover:opacity-90 px-4 py-1 rounded bg-transparent text-white placeholder-red-200 focus:outline-none"
            value={keyword}
            onChange={handleSearchChange} // ⬅️ ini yang bikin nyambung ke All.js
          />
          <Link
            to="/"
            className="bg-[#FA2A68] hover:opacity-90 text-white px-4 py-2 rounded transition"
          >
            All
          </Link>
          <Link
            to="/cart"
            className="bg-[#FA2A68] hover:opacity-90 text-white px-4 py-2 rounded transition"
          >
            🛒
          </Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
