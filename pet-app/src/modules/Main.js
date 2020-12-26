import React, { useEffect, useState } from 'react'
import Body from './Body.js'
import Navbar from './Nav.js'
import SearchBar from './Search'
import DogCard from './DogCard'
import NavbarLogIn from './NavBarLogIn'
import HeaderUser from './HeaderUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

function Main() {
    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [])

    // async function getUser() {
    //     try {
    //         const response = await axios.get('/user?ID=12345');
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    if (!token) {
        return (
            <Router>
                <div >
                    <Navbar />
                    <div>
                        <Switch>
                            <Route exact path="/">
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
                    <Route exact path="/">
                                <HeaderUser />
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

}
export default Main;