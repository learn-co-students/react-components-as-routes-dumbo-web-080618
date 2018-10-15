import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}
const active = {
  background: 'darkblue'
}
const NavBar = () => {
  return(
    <div>
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={active}
      >Home</NavLink>
      <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={active}
      >About</NavLink>
      <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={active}
      >Login</NavLink>
    </div>
  )
  
}
export default NavBar
