import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router'
import routes from '../../../routes/routes';

function RouterViewSegment() {

    const [_routes, setRoutes] = useState([]);
    const history = useHistory();
    const currentPath = history.location.pathname;

    useEffect(() => {
        const paths = currentPath.split('/');
        paths.shift();
        const path = paths.pop();
        let _r = [...routes];

        for (const el of paths) {
            const item = routes.find(it => it.path === '/' + el);
            if (item.children) {
                _r = [...item.children];
            }
        }

        let result = _r.find(it => it.path === '/' + path);
        console.log(result)
        setRoutes(result.children ? result.children : [result]);
    }, []);


    return (
        <div>
            <Switch>
                {_routes.map((route, index) => <Route
                    exact={route.exact ? route.exact : (!('children' in route) || route.children.length === 0)}
                    path={currentPath + route.path}
                    key={index}>
                    {route.redirectTo ?
                        <Redirect to={currentPath + route.redirectTo} /> :
                        (typeof route.component === 'function' ? route.component() : route.component)}
                </Route>)}
            </Switch>
        </div>
    )
}

export default RouterViewSegment
