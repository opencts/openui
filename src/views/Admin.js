import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Test from './Test'
import Test2 from './Test2'

function Admin() {
    return (
        <Switch>
            <Route path="/admin" exact>
                <Test />
            </Route>
            <Route path="/admin/test2" exact>
                <Test2 />
            </Route>
        </Switch>
    )
}

export default Admin
