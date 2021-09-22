import React from 'react'
import { Link } from 'react-router-dom'

function Me() {
    return (
        <div>
            Here it's me! <Link to="/about/you">Go to you </Link>
        </div>
    )
}

export default Me
