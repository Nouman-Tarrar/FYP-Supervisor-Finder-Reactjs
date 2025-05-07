import React from 'react'

const Navbar = () => (
  <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
    <div className="text-xl font-bold">The University of Lahore</div>
    <ul className="flex space-x-4">
      <li><a href="#" className="hover:underline">Home</a></li>
      <li><a href="#" className="hover:underline">Supervisors</a></li>
      <li><a href="#" className="hover:underline">Slots</a></li>
      <li><a href="#" className="hover:underline">Login</a></li>
    </ul>
  </nav>
);

export default Navbar;