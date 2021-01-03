import React, { useEffect, useState } from 'react'
import Body from './Body.js'
import Navbar from './Nav.js'
import SearchBar from './Search'
import DogCard from './DogCard'
import NavbarLogIn from './NavBarLogIn'
import HeaderUser from './HeaderUser'
import ProfileSettings from './ProfileSettings'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Main() {
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    if (!token) {
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
                                <SearchBar />
                                <DogCard />
                            </Route>
                        </Switch>
                    </div>
                </div >
            </Router >
        )
    }
    else {
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
                                <SearchBar />
                                <DogCard />
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

}
export default Main;