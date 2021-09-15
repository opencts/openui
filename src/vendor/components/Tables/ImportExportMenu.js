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
import { csvMapToJson, objectToMap } from '../../services/utils'
import DataUploadProgress from './DataUploadProgress'
import XLSX from 'xlsx';

function ImportExportMenu({
    position = 'bottom',
    color,
    status,
    save,
    collection,
    data
}) {

    const fileRef = useRef();
    const { alert } = useDialog();
    const [open, setOpen] = useState(false);
    const [uploadValues, setUploadValues] = useState([]);

    const openDialog = () => {
        fileRef.current.click();
    };

    const handleCSVUpload = (e) => {
        const file = e.target.files[0];
        if (!file) {
            alert('error', 'No file selected');
            return;
        }
        if (file.type.toLowerCase().indexOf('csv') !== -1) {
            Papa.parse(file, {
                encoding: 'utf-8',
                complete: chunk => {
                    setUploadValues(csvMapToJson(chunk.data));
                    setOpen(true);
                }
            });
        } else if (file.type.toLowerCase().indexOf('spreadsheet') !== -1) {
            const fr = new FileReader();
            fr.readAsBinaryString(file);
            fr.onloadend = _ => {
                const workbook = XLSX.read(fr.result, { type: 'binary' });
                const values = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                setUploadValues(values);
                setOpen(true);
            }
        } else {
            alert('error', 'Invalid type!');
        }
    };

    const exportDataToXLS = () => {
        const aoa = objectToMap(data);
        const worksheet = XLSX.utils.aoa_to_sheet(aoa);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, collection);
        XLSX.writeFile(workbook, collection + '.xlsx');
    };

    const exportDataToCSV = () => {
        const aoa = objectToMap(data);
        const worksheet = XLSX.utils.aoa_to_sheet(aoa);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, collection);
        XLSX.writeFile(workbook, collection + '.csv');
    };

    return <div>
        <input ref={fileRef} onChange={handleCSVUpload} type="file" style={{ display: 'none' }} />
        {open && <DataUploadProgress collection={collection} onClose={() => setOpen(false)} data={uploadValues} status={status} save={save} />}
        <Dropdown width={200} position={position} component={<Button color={color} outlined icon="sort">Import / Export</Button>}>
            <List>
                <ListGroup title="Import">
                    <ListItem className="pointer" onClick={openDialog}>
                        <Flex ai="center" gap={15}>
                            <Icon name="file" />
                            <Font>Csv</Font>
                        </Flex>
                    </ListItem>
                    <ListItem className="pointer" onClick={openDialog}>
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
                        <Flex ai="center" gap={15} onClick={exportDataToXLS}>
                            <Icon name="fileExcel" color="success" />
                            <Font>Excel</Font>
                        </Flex>
                    </ListItem>
                    <ListItem className="pointer" onClick={exportDataToCSV}>
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
