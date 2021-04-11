import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Navbar() {
    return (

        <div className="container-el-nav">
            <Link className="logo" exact to="/"><img src={logo} alt='logo'></img></Link>

            <ul className='nav-bar-container'>
                <li>
                    <Link className="link-search" to="/search">Find your pet</Link>
                </li>
                <li>
                    <SignIn />
                </li>
                <li>
                    <SignUp />
                </li>
            </ul>
        </div>
    )
}
export default Navbar;