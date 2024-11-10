// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const dateToday = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>© {dateToday} Schedule App</p>
      </div>
    </footer>
  );
};

export default Footer;
