import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export const Header = () => {
      return (
            <header className="header">
                  <div className="container">
                        <h2>LOGO</h2>

                        <nav className="navbar">
                              <Link to='/' >Home</Link>
                              <Link to='/projects' >Projects</Link>
                        </nav>
                  </div>
            </header>
      )
}
