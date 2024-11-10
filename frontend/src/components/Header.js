// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md p-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Schedule App</h1>
      
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Services</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
