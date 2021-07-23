import React, { useState, useEffect } from "react"
import Flex from "../Containers/Flex";

function ProgressBar({
    color = "primary",
    height = 25,
    indeterminate = false,
    value = 57,
    showValue = false,
}) {

    let bg = 'bg-' + color;
    let css = { height: height, width: value + '%', borderRadius: 50 + 'px' }
    let getValue = showValue ? value+'%' : null;
    bg = indeterminate ? (bg + ' ' + 'move') : bg;

    return (
        <div className="progress-container">
            <div className={bg} style={{ ...css }}>
                <Flex jc="center" ai="center">
                    {getValue}
                </Flex>
            </div>
        </div>
    )
}

export default ProgressBar;
