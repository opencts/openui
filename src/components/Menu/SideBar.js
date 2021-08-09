import { useState } from "react";
import Icon from "../Fonts/Icon";
import SubMenu from "./SubMenu";

const items = [
    { title: 'Dashboard', path: '/dashboard', iconName: 'shoppingCart' },
    {
        title: 'Overview', path: '/overview', iconName: "home",
        subNav: [
            { title: 'Users', path: '/overview/users', iconName: "user" },
            { title: 'Revenue', path: '/overview/revenu', iconName: "home" }
        ]
    },
    { title: 'Settings', path: '/settings', iconName: 'stream' },
    { title: 'Reports', path: '/reports', iconName: 'camera' },
    {
        title: 'Reports',
        path: '/reports',
        iconName: 'paperPlane',

        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                cName: 'sub-nav'
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                cName: 'sub-nav'
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                cName: 'sub-nav'
            }
        ]
    },
    { title: 'Log Out', path: '/logout', iconName: 'signOutAlt' }
]


function SideBar({ color, width, height }) {
    const [showSideBar, setShowSideBar] = useState(true)
    return (
        <>
            <div className="toolbar" onClick={_ => setShowSideBar(true)}>
                <Icon name="bars" className="ml-4" style={{ fontSize: "1.6em" }} />
            </div>
            {showSideBar &&
                <div className="sidebar-nav" >
                    <div className="sidebar-wrapper">
                        <Icon name="times" style={{ fontSize: "1.6em", color: "#fff" }} className="ml-4 mt-3" onClick={_ => setShowSideBar(false)} />
                        <div className="mt-3">
                            {items.map((item, index) => {
                                return <SubMenu item={item} key={index} />
                            })}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}


export default SideBar;