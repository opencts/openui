import React from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Me from './Me'
import You from './You'

function About() {
    return (
        <div>
            About view! <Link to="/">Home</Link>
            <Switch>
                <Route exact path="/about">
                    <Redirect to="/about/you" />
                </Route>
                <Route exact path="/about/you">
                    <You />
                </Route>
                <Route exact path="/about/me">
                    <Me />
                </Route>
            </Switch>
        </div>
    )
}

export default About
