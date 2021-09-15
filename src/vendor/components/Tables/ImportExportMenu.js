import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDialog } from '../../services/DialogProvider'
import Flex from '../Containers/Flex'
import Font from '../Fonts/Font'
import Icon from '../Fonts/Icon'
import Button from '../Forms/Button'
import List from '../List/List'
import ListGroup from '../List/ListGroup'
import ListItem from '../List/ListItem'
import Dropdown from '../Tips/Dropdown'
import Papa from 'papaparse';
import { csvMapToJson } from '../../services/utils'
import DataUploadProgress from './DataUploadProgress'

function ImportExportMenu({
    position = 'bottom',
    color,
    status,
    save
}) {

    const fileRef = useRef();
    const [type, setType] = useState(null);
    const { alert } = useDialog();
    const [open, setOpen] = useState(false);
    const [uploadValues, setUploadValues] = useState([]);

    const openDialog = (type) => {
        fileRef.current.click();
        setType(type);
    };

    const handleCSVUpload = (e) => {
        const file = e.target.files[0];
        if (!file) {
            alert('error', 'No file selected');
            return;
        }
        Papa.parse(file, {
            encoding: 'utf-8',
            complete: chunk => {
                setUploadValues(csvMapToJson(chunk.data));
                setOpen(true);
            }
        });
    };

    return <div>
        <input ref={fileRef} onChange={handleCSVUpload} type="file" style={{ display: 'none' }} />
        {open && <DataUploadProgress onClose={() => setOpen(false)} data={uploadValues} status={status} save={save} />}
        <Dropdown width={200} position={position} component={<Button color={color} outlined icon="sort">Import / Export</Button>}>
            <List>
                <ListGroup title="Import">
                    <ListItem className="pointer" onClick={() => openDialog('csv')}>
                        <Flex ai="center" gap={15}>
                            <Icon name="file" />
                            <Font>Csv</Font>
                        </Flex>
                    </ListItem>
                    <ListItem className="pointer">
                        <Flex ai="center" gap={15}>
                            <Icon name="fileExcel" color="success" />
                            <Font>Excel</Font>
                        </Flex>
                    </ListItem>
                </ListGroup>
                <ListGroup title="Export">
                    <ListItem className="pointer">
                        <Flex ai="center" gap={15}>
                            <Icon name="filePdf" color="danger" />
                            <Font>Pdf</Font>
                        </Flex>
                    </ListItem>
                    <ListItem className="pointer">
                        <Flex ai="center" gap={15}>
                            <Icon name="fileExcel" color="success" />
                            <Font>Excel</Font>
                        </Flex>
                    </ListItem>
                    <ListItem className="pointer">
                        <Flex ai="center" gap={15}>
                            <Icon name="file" />
                            <Font>Csv</Font>
                        </Flex>
                    </ListItem>
                </ListGroup>
            </List>
        </Dropdown>
    </div>
}

export default memo(ImportExportMenu)
