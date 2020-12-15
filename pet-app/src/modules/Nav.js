import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'

function Navbar() {
    return (
        <div className="container-el-nav">
            <Link className="logo" exact to="/"><img src={logo}></img></Link>

            <ul className='nav-bar-container'>
                <li>
                    <Link className="link-search" to="/search">Find your dog</Link>
                </li>
                <li>
                    <Link className="link-log-in" to="/login">Log In</Link>
                </li>
                <li>
                    <Link className="link-sign-up" to="/signup">Sign Up</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;