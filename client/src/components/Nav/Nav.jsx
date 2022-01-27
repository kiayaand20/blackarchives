import './Nav.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const authenticated = (
    <>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)
const unauthenticated = (
    <>
        <NavLink className="link" to="/user/signup/">Sign Up</NavLink>
        <NavLink className="link" to="/user/login/">Sign In</NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="link" to="/directors">Directors</NavLink>
    </>
)
const Nav = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = (() => {
    setMenuOpen(!menuOpen)
  })

        return (
            <div className="nav">
     <div className="nav-body">
        <NavLink className="logo" to="/">blackArchives</NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}!</div>}
          {alwaysOptions}
          {user ? authenticated : unauthenticated}
        </div>

        <div className="curtain">
          {user && <div className="link-welcome">Welcome, {user.username}!</div>}
          <button className='curtainBtn' onClick={toggleMenu}>Menu</button>
          <div className={`overlay ${menuOpen ? ' showMenu' : ''}`}>
            <button className='overlayBtn' onClick={toggleMenu}>X</button>
            <div className='overlay-content'>
              {alwaysOptions}
              {user ? authenticated : unauthenticated}
            </div>
          </div>
        </div>
      </div>
            </div>
        )
}
export default Nav