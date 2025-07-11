import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">MyApp</a>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
