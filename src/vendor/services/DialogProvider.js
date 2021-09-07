import React, { createContext, useContext, useState } from 'react'
import MessageBox from '../components/Dialogs/MessageBox';

const DialogContext = createContext();

export function useDialog() {
    return useContext(DialogContext);
}

function DialogProvider({
    children
}) {

    const [openConfirm, setOpenConfirm] = useState(false);
    const [confirmText, setConfirmText] = useState('');
    const [cancelText, setCancelText] = useState('');
    const [finishText, setFinishText] = useState('');
    const [message, setMessage] = useState('');
    const [actions, setActions] = useState({
        onCancel: _ => { },
        onConfirm: _ => { },
        onFinish: _ => { }
    });
    const [openError, setOpenError] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);

    /**
     * ---------------- Function to display confirm dialog -----------------------------------
     * @param {string} message Message to display
     * @param {object} options Dialog options
     * @param {string} options.cancelText 
     * @param {string} options.confirmText 
     * @param {function} options.onCancel Function called when click to cancel
     * @param {function} options.onConfirm Function called when click to confirm
     */
    function confirm(message, options = {
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        onCancel: _ => { },
        onConfirm: _ => { },
    }) {
        setMessage(message);
        setCancelText(options.cancelText);
        setConfirmText(options.confirmText);

        // Setting default options
        if (!options.cancelText) options.cancelText = 'Cancel';
        if (!options.confirmText) options.confirmText = 'Confirm';
        if (!options.onCancel) options.onCancel = _ => { };
        if (!options.onConfirm) options.onConfirm = _ => { };
        setActions(options);
        setOpenConfirm(true);
    }

    /**
     * ---------------- Function to display error or success dialog -----------------------------------
     * @param {string} type ('error' | 'success')
     * @param {string} message Message to display
     * @param {object} options Dialog options
     * @param {string} options.finishText 
     * @param {function} options.onFinish Function called when click to cancel
     */
    function alert(type, message, options = {
        finishText: 'Finish',
        onFinish: _ => { },
    }) {
        setMessage(message);
        setFinishText(options.finishText);

        // Setting default options
        if (!options.finishText) options.finishText = 'Finish';
        if (!options.onFinish) options.onFinish = _ => { };
        setActions(options);
        if (type === 'error') {
            setOpenError(true);
        } else {
            setOpenSuccess(true);
        }
    }

    function endActions(cb) {
        cb();
        setOpenConfirm(false);
        setOpenError(false);
        setOpenSuccess(false);
    }

    return (
        <DialogContext.Provider value={{
            confirm,
            alert
        }}>
            {children}
            {openConfirm && <MessageBox
                type="confirm"
                message={message}
                confirmText={confirmText}
                cancelText={cancelText}
                onCancel={_ => endActions(actions.onCancel)}
                onConfirm={_ => endActions(actions.onConfirm)} />}
            {openError && <MessageBox
                type="error"
                message={message}
                finishText={finishText}
                onFinish={_ => endActions(actions.onFinish)} />}
            {openSuccess && <MessageBox
                type="success"
                message={message}
                finishText={finishText}
                onFinish={_ => endActions(actions.onFinish)} />}
        </DialogContext.Provider>
    )
}

export default DialogProvider
