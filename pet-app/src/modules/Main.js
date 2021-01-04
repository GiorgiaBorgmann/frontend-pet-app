import React, { useEffect, useState } from 'react'
import Body from './Body.js'
import Navbar from './Nav.js'
import SearchPage from './SearchPage.js'
import NavbarLogIn from './NavBarLogIn'
import NavBarAdm from './NavBarAdm'
import HeaderUser from './HeaderUser'
import AddPet from './AddPet'
import ProfileSettings from './ProfileSettings'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Main() {
    const [token, setToken] = useState("")
    const [role, setRole] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('token'))
        setRole(localStorage.getItem('role'))
    }, [])
    console.log(role)
    console.log(token)
    // if (role && role === "basic") {
    if (token) {
            return (
                <Router>
                    <div >
                        <NavbarLogIn />
                        <div>
                            <Switch>
                                <Route exact path="/home-login">
                                    <HeaderUser />
                                </Route>
                                <Route exact path="/search">
                                    <SearchPage />
                                </Route>
                                <Route exact path="/profile-settings">
                                    <ProfileSettings />
                                </Route>
                            </Switch>
                        </div>
                    </div >
                </Router >
            )
        }

    else if (role && role === "admin") {
        return (
            <Router>
                <div >
                    <NavBarAdm />
                    <div>
                        <Switch>
                            <Route exact path="/adm">
                                <div>Dashboard</div>
                            </Route>
                            <Route exact path="/add-pet">
                                <AddPet />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router >
        )
    }
    else {
        return (
            <Router>
                <div >
                    <Navbar />
                    <div>
                        <Switch>
                            <Route exact path="/home">
                                <Body />
                            </Route>
                            <Route exact path="/search">

                            </Route>
                        </Switch>
                    </div>
                </div >
            </Router >
        )
    }

}
export default Main;