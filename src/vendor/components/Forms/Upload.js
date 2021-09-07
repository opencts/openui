import React, { useRef, useState } from 'react'
import Flex from '../Containers/Flex'
import Dialog from '../Dialogs/Dialog'
import Icon from '../Fonts/Icon'
import Button from './Button'

function Upload({
    label = 'Pick file',
    btnText = 'Browse',
    color = 'primary',
    dropText = 'Drop Here or click to upload',
    finishText = 'Finish',
    multiple = false,
    uploadFunction = null,
    onUploadEnd = () => { }
}) {

    const [files, setFiles] = useState([]);
    const [curOpened, setCurOpened] = useState(null);
    const [opened, setOpened] = useState(false);
    const fileRef = useRef(null);

    function handleDrop(ev) {
        if ((!multiple && files.length === 0) || multiple) {
            ev.preventDefault();
            const f = [];
            if (ev.dataTransfer.items) {
                for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                    if (ev.dataTransfer.items[i].kind === 'file') {
                        const file = ev.dataTransfer.items[i].getAsFile();
                        f.push(file);
                    }
                }
            } else {
                for (let i = 0; i < ev.dataTransfer.files.length; i++) {
                    f.push(ev.dataTransfer.files[i]);
                }
            }
            setFiles([...files, ...f]);
        }
    }

    function removeFile(index) {
        console.log(index)
        files.splice(index, 1);
        console.log(files);
        setFiles([...files]);
    }

    async function openFile(item) {
        const fr = new FileReader();
        fr.readAsDataURL(item);
        fr.addEventListener('loadend', (ev) => {
            setCurOpened({
                file: item,
                b64: ev.target.result
            });
        });
    }

    function displayFiles() {
        return <div>
            {files.map((item, index) => <div key={index} className={'bg-' + color + '-outlined text-' + color + ' p-2 mt-3'}>
                <Flex ai="center" jc="space-between" gap={50}>
                    <Flex ai="center" gap={10}>
                        <Icon name="fileDownload" color={color} />
                        <div>{item.name}</div>
                    </Flex>
                    <Flex gap={10}>
                        <Icon name="eye" onClick={_ => openFile(item)} color={color} />
                        <Icon name="minusCircle" onClick={_ => removeFile(index)} color={color} />
                    </Flex>
                </Flex>
            </div>)}
        </div>
    }

    function handleFileChange(e) {
        if ((!multiple && files.length === 0) || multiple) {
            setFiles([...files, ...e.target.files]);
        }
    }

    async function doUpload() {
        if (!uploadFunction) {
            const promises = [];
            for (const el of files) {
                const p = new Promise(r => {
                    const fr = new FileReader();
                    fr.readAsDataURL(el);
                    fr.onloadend = _ => r(fr.result);
                });
                promises.push(p);
            }
            onUploadEnd(multiple ? await Promise.all(promises) : (await Promise.all(promises))[0]);
        } else {
            onUploadEnd(multiple ? await uploadFunction(files): (await uploadFunction(files))[0]);
        }
        setOpened(false);
    }

    return (
        <div>
            <div className={'upload border-' + color} style={{ overflow: 'hidden' }}>
                <Flex ai="center" jc="space-between">
                    <div className="ml-2">
                        <Flex ai="center" gap={10}>
                            <Icon color={color} name="cloudDownloadAlt" />
                            <div className={'text-' + color}>
                                {label}
                            </div>
                        </Flex>
                    </div>
                    <Button type="button" color={color} onClick={_ => setOpened(true)}>{btnText}</Button>
                </Flex>
            </div>
            {opened && <Dialog
                color={color}
                title="Upload"
                titleIcon="cloudDownloadAlt"
                actions={_ => curOpened ? <div className="mt-2">
                    <Button type="button" expand color={color} onClick={_ => setCurOpened(null)}>Back</Button>
                </div> : (
                    files.length > 0 ? <div className="mt-2">
                        <Button type="button" color={color} expand onClick={doUpload}>{finishText}</Button>
                    </div> : null
                )}
                onClose={_ => setOpened(false)}>
                {!curOpened ? <div>
                    <div className="drop-zone" onClick={_ => fileRef.current.click()}>
                        <input multiple={multiple} ref={fileRef} style={{ display: 'none' }} type="file" onChange={handleFileChange} />
                        <Flex ai="center" jc="center" gap={10}>
                            <Icon color="dark" name="cloudDownloadAlt" />
                            <div
                                onDrop={handleDrop}
                                onDragOver={e => e.preventDefault()}
                                style={{ textAlign: 'center' }}>{dropText}</div>
                        </Flex>
                    </div>
                    {displayFiles()}
                </div> : <div>
                    <div style={{ overflow: 'auto' }}>
                        <embed className="embed" type={curOpened.file.type} src={curOpened.b64} />
                    </div>
                </div>}
            </Dialog>}
        </div>
    )
}

export default Upload
