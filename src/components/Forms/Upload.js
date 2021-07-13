import React, { useState } from 'react'
import Flex from '../Containers/Flex'
import Dialog from '../Dialogs/Dialog'
import Icon from '../Fonts/Icon'
import Button from './Button'

function Upload({
    label = 'Pick file',
    btnText = 'Browse',
    color = 'primary',
    dropText = 'Drop Here or click to upload',
    finishText = 'Finish'
}) {

    const [files, setFiles] = useState([]);
    const [curOpened, setCurOpened] = useState(null);
    const [opened, setOpened] = useState(false);

    function handleDrop(ev) {
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
        console.log(f);
        setFiles([...files, ...f]);
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

    return (
        <div>
            <div className={'upload border-' + color}>
                <Flex ai="center" jc="space-between">
                    <div className="ml-2">
                        <Flex ai="center" gap={10}>
                            <Icon color={color} name="cloudDownloadAlt" />
                            <div className={'text-' + color}>
                                {label}
                            </div>
                        </Flex>
                    </div>
                    <Button color={color} onClick={_ => {
                        console.log('opening');
                        setOpened(true);
                    }}>{btnText}</Button>
                </Flex>
            </div> :
            {opened && <Dialog title="Upload" titleIcon="cloudDownloadAlt" onClose={_ => setOpened(false)}>
                {!curOpened ? <div>
                    <div className="drop-zone">
                        <Flex ai="center" jc="center" gap={10}>
                            <Icon color="dark" name="cloudDownloadAlt" />
                            <div onDrop={handleDrop} onDragOver={e => e.preventDefault()}>{dropText}</div>
                        </Flex>
                    </div>
                    {displayFiles()}
                    {files.length > 0 && <div className="mt-2">
                        <Button expand>{finishText}</Button>
                    </div>}
                </div> : <div>
                        <div style={{ overflow: 'auto' }}>
                            <embed className="embed" type={curOpened.file.type} src={curOpened.b64} />
                        </div>
                        <div className="mt-2">
                            <Button expand onClick={_ => setCurOpened(null)}>Back</Button>
                        </div>
                    </div>}
            </Dialog>}
        </div>
    )
}

export default Upload
