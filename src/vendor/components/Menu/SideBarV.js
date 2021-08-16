import { NavLink } from "react-router-dom";
import Flex from "../Containers/Flex";
import Icon from "../Fonts/Icon";
import Accordeon from "../Tips/Accordeon";

const items = [
    { iconName: 'shoppingCart', label: 'Dashboard', path: 'dashboard' },
    { iconName: 'stream', label: 'Settings', path: 'settings' },
    { iconName: 'camera', label: 'Reports', path: 'reports' },
    { iconName: 'signOutAlt', label: 'Log Out', path: 'logout' },

]


function SideBar({ color, width, height }) {
    return (
        <Flex ai="center" jc="flex-start" direction="column" style={{ width: "200px" }}>
            <nav className="sidebar">
                <ul>
                    {items.map((item, index) => {
                        return <li key="index">
                            <NavLink to={item.path} activeClassName='active'>
                                <Icon name={item.iconName} /> {item.label}
                            </NavLink>
                        </li>
                    })
                    }
                    <li>
                        <Accordeon padding="0" title={
                            <Flex gap={8}>
                                <Icon name="shoppingCart" />
                                <span>Reports</span>
                            </Flex>
                        }
                            icon="angleDown" negativeIcon="angleUp">
                            <div className="mt-2">
                                <NavLink to="/reports/archive" activeClassName='active' className="side-menu-navLink">
                                    <Flex><Icon name="shoppingCart" /> <span>Archive</span></Flex>
                                </NavLink> <br />
                                <NavLink to="/reports/admin" activeClassName='active' className="side-menu-navLink">
                                    <Flex><Icon name="camera" /> <span>Admin</span></Flex>
                                </NavLink>
                            </div>

                        </Accordeon>
                    </li>
                </ul>
            </nav>
        </Flex>

    )
}


export default SideBar;