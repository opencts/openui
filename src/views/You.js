import React from 'react'
import { Link } from 'react-router-dom'
import RouterViewSegment from '../vendor/components/Routing/RouterViewSegment'

function You() {
    return (
        <div>
            It's you! <Link to="/about/me">Go to me </Link>
            <RouterViewSegment />
        </div>
    )
}

export default You
