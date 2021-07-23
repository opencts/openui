import { useState } from "react";

function ProgressBar({
    color,
    height,
    indeterminate = false,
    value = 0,
    showValue
}) {



    return (
        <div className="progress-container">
            <div className="progress-bar" style={{width: value+'%'}}>
            </div>
            <div className="progress-text">
                Completed {value}%
            </div>
        </div>
    )
}




export default ProgressBar;