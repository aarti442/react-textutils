import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar({ title = 'Hello, world!', abouttitle, mode, toggleMode,changeColor,activeColor}) {
  return (

    <nav className={`navbar navbar-${mode} bg-${mode} navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{abouttitle}</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>

          </ul>
        { mode === 'dark' && (  <div className='colorpalet'>
            <div onClick={() => changeColor('#332701')} className={`p-2 bd-yellow-900 ${activeColor === '#332701' ? 'active' : ''}`}></div>
            <div onClick={() => changeColor('#051b11')} className={`p-2 bd-green-900 ${activeColor === '#051b11' ? 'active' : ''}`}></div>
            <div onClick={() => changeColor('#032830')} className={`p-2 bd-cyan-900 ${activeColor === '#032830' ? 'active' : ''}`}></div>
          </div>)
        }

          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input onClick={toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode} Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
   
  )
}

