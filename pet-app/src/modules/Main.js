import React from 'react'
import Body from './Body.js'
import Navbar from './Nav.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function Main() {
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
                        </Route>
                    </Switch>
                </div>
            </div >
        </Router >

    );
}
export default Main;