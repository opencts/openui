import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solids from '@fortawesome/free-solid-svg-icons';
import * as regulars from '@fortawesome/free-regular-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';

const icons = { ...solids, ...regulars, ...brands };

function Icon({
    name,
    color = null,
    ...props
}) {

    function transformName(name) {
        return 'fa' + name[0].toUpperCase() + name.substr(1);

    }

    if (!color) {
        return (
            <FontAwesomeIcon icon={icons[transformName(name)]} {...props} className={'icon ' + (props.className ? props.className : '')} />
        )
    }

    return (
        <FontAwesomeIcon icon={icons[transformName(name)]} {...props} className={'text-' + color + ' icon ' + (props.className ? props.className : '')} />
    )
}

export default Icon
