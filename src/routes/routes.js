import About from "../views/About";
import Home from "../views/Home";
import Me from "../views/Me";
import Us from "../views/Us";
import You from "../views/You";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About,
        exact: false,
        children: [
            {
                path: '/',
                redirectTo: '/you'
            },
            {
                path: '/me',
                component: Me
            },
            {
                path: '/you',
                component: You,
                children: [
                    {
                        path: '/',
                        component: Us
                    }
                ]
            }
        ]
    }
];

export default routes;