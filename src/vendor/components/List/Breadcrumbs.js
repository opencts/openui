import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { capitalize } from '../../services/utils';
import Flex from '../Containers/Flex';

function Breadcrumbs({
    separator = '/', // / or >
    color = 'primary'
}) {

    const [paths, setPaths] = useState([]);
    const history = useHistory();

    useEffect(() => {
        setPaths(history.location.pathname.split('/'));
    }, [history]);

    
    function renderBreads() {
        const els = [];
        for (let i = 0; i < paths.length; i++) {
            if (paths[i] === '' && i === 0) {
                els.push({
                    value: 'Home',
                    link: '/'
                });
                els.push('/');
            } else {
                if (paths[i] === '') continue;
                if (i === paths.length - 1) {
                    els.push({
                        value: capitalize(paths[i]),
                        link: paths.slice(0, i + 1).join('/')
                    });
                } else {
                    els.push({
                        value: capitalize(paths[i]),
                        link: paths.slice(0, i + 1).join('/')
                    });
                    els.push('/');
                }
            }
        }
        if (els[els.length - 1] === '/') {
            els.pop();
        }
        return <Flex ai="center" gap={5}>
            {els.map((item, index) => <span key={index}>
                {item === '/' ? separator : <NavLink to={item.link}>
                    <span className={'text-' + color}>{item.value}</span>
                </NavLink>}
            </span>)}
        </Flex>
    }

    return (
        <div className="breadcrumb">
            {renderBreads()}
        </div>
    )
}

export default Breadcrumbs
