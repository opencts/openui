import React from 'react'
import floating from '../../assets/img/no_activity.svg'
import DoubleCircularLoader from '../Progress/DoubleCircularLoader'

function NoActivity() {
    return (
        <div className="no-activity-container">
            <div className="no-activity-floating">
                <img src={floating} />
            </div>
            <div className="no-activity-loader">
                <DoubleCircularLoader color="light" borderSize={40} />
            </div>
        </div>
    )
}

export default NoActivity
