import React from "react"

function ProgressBar({
    color = "primary",
    height = 25,
    indeterminate = false,
    value = 57,
    radius = 50,
    showValue = false,
}) {

    let bg = 'bg-' + color;
    let css = { height: height, width: value + '%', borderRadius: radius + 'px' }
    let getValue = showValue ? value + '%' : null;
    bg = indeterminate ? (bg + ' move') : bg;

    return (
        <div className="progress-container" style={{ height: height }}>
            <div className={bg} style={{ ...css }}>
                <div className="progress-text">
                    {getValue}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;
