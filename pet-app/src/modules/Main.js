import React from 'react'
import Body from './Body.js'
import Navbar from './Nav.js'
import SearchBar from './Search'
import DogCard from './DogCard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Main() {
    const user = true

    if (!user) {
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

}
export default Main;