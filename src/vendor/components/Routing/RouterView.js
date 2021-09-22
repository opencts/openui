import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import routes from '../../../routes/routes'

function RouterView() {
    const createRoute = (routes) => routes.map((route, index) => <Route
        exact={route.exact ? route.exact : (!('children' in route) || route.children.length === 0)}
        path={route.path}
        key={index}>
        {route.redirectTo ?
            <Redirect to={route.redirectTo} /> :
            (typeof route.component === 'function' ? route.component() : route.component)}
    </Route>);

    return (
        <div>
            {<BrowserRouter>
                <Switch>
                    {createRoute(routes)}
                </Switch>
            </BrowserRouter>}
        </div>
    )
}

export default RouterView
