import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { useHistory } from 'react-router-dom'
import '../style/navBar.css'


function NavbarLogIn() {
    const history = useHistory()
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        history.push('/')
        window.location.reload()
    }
    return (
        <div className="container-el-nav">
            <Link className="logo" exact to="/adm"><img src={logo} alt='logo'></img></Link>

            <ul className='nav-bar-container'>
                <li>
                    <Link className="link-search" to="/adm">Dashboard</Link>
                </li>
                <li>
                    <Link className="link-search" to="/add-pet">Add pet</Link>
                </li>
                <li>
                    <div onClick={logout} className="link-search" to="/">logout</div>
                </li>
            </ul>
        </div>
    )
}
export default NavbarLogIn;