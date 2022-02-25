import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar () {
  const basename = process.env.REACT_APP_BASENAME || null;

  return (
    <Router basename={basename}>
    <section className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/ontologies" className="navbar-item">Ontologies</Link>
      <Link to="/help" className="navbar-item">Help</Link>
      <Link to="/documentation" className="navbar-item">Documentation</Link>
      <Link to="/about" className="navbar-item">About</Link>
  </section>
  </Router>
  )

}

export default Navbar;