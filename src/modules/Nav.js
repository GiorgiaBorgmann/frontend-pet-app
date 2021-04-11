import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import SignIn from './SignIn'
import SignUp from './SignUp'
import '../style/navBar.css'

function Navbar() {
    return (

        <div className="container-el-nav">
            <Link className="logo" exact to="/"><img src={logo} alt='logo'></img></Link>

            <ul className='nav-bar-container'>
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