import React, { useEffect, useMemo, useState } from 'react'
import Modal from '../Dialogs/Modal'
import ProgressBar from '../Progress/ProgressBar'

function DataUploadProgress({
    data,
    status,
    save,
    onClose
}) {

    const [failed, setFailed] = useState(0);
    const [currentDataIndex, setCurrentDataIndex] = useState(0);

    useEffect(() => {
        if (currentDataIndex < data.length) {
            setTimeout(() => {
                save(data[currentDataIndex]);
            }, 1000);
        } else {
            onClose();
        }
    }, [currentDataIndex]);

    useEffect(() => {
        if (status === 'failed') {
            setFailed(failed => failed + 1);
            setCurrentDataIndex(currentDataIndex => currentDataIndex + 1);
        } else {
            if (status === 'success') {
                setCurrentDataIndex(currentDataIndex => currentDataIndex + 1);
            }
        }
    }, [status]);

    const progressValue = useMemo(() => Math.ceil((currentDataIndex / data.length)* 100) , [currentDataIndex, data]);

    return (
        <div>
            <Modal onClose={onClose}>
                <div className="text-center p-3 m-3">
                    <b>Uploading files ...</b>
                    <div className="p-2">
                        <ProgressBar value={progressValue} showValue />
                    </div>
                    <div>
                        <span className="text-success">Succeed: {currentDataIndex} on {data.length}</span> <br /><br />
                        <span className="text-danger">Failed: {failed} on {data.length}</span>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DataUploadProgress
