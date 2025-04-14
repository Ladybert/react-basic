import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <header>
        <div className='navbar-wrapper'>
            <div className='nav-title'>
                <h1>Youtube</h1>
            </div>
            <div className='nav-item'>
                <p>Home</p>
                <p>History</p>
                <p>Account</p>
            </div>
        </div>
    </header>
  )
}
