// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About-us">About</Link></li>
        <li><Link to="/Contact-us">Contact</Link></li>
      </ul>
    </nav>
  );
}