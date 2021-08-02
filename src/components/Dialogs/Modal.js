import Icon from '../Fonts/Icon'

const Modal = ({
    title,
    color = 'primary',
    onClose = () => {},
    children,
    actions = () => { }
}) => {

    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-close-icon" onClick={onClose}>
                    <Icon name="timesCircle" color="light" />
                </div>
                <div className="modal-container-block">
                    <h3 className={'text-' + color}>{title}</h3>
                    <div className="modal-content">
                        {children}
                    </div>
                    <div className="modal-actions">
                        {typeof actions === 'function' ? actions() : actions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
