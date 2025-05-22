import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-robot"></i> InfoSmart Demo
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="https://info-smart-agents.vercel.app/" target="_blank" rel="noopener noreferrer">
                Início
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Chatbot</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
