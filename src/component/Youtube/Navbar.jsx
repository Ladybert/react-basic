import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <header>
        <div className='navbar-wrapper'>
            <div className='nav-title'>
                <h1>Youtube</h1>
            </div>
            <div className='nav-item'>
                  <Link to='/'>Home</Link>
                  <Link to='/blog-post'>Blog Post</Link>
                  <Link to='/product'>Product</Link>
                  <Link to='/lifecycle'>Lifecycle</Link>
            </div>
        </div>
    </header>
  )
}
