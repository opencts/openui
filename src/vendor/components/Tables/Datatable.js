import React, { useEffect } from 'react'
import { useState } from 'react'
import { useStore } from '../../services/Store'
import { capitalize, deepCopie, generateUniqueKey } from '../../services/utils'
import _THEME_COLORS from '../../services/_colors'
import Element from '../Containers/Element'
import Flex from '../Containers/Flex'
import Hidden from '../Containers/Hidden'
import Modal from '../Dialogs/Modal'
import Font from '../Fonts/Font'
import Icon from '../Fonts/Icon'
import Button from '../Forms/Button'
import Checkbox from '../Forms/Checkbox'
import Form from '../Forms/Form'
import Search from '../Forms/Search'
import List from '../List/List'
import ListGroup from '../List/ListGroup'
import ListItem from '../List/ListItem'
import BarsLoader from '../Progress/BarsLoader'
import Dropdown from '../Tips/Dropdown'
import Paginator from './Paginator'
import Table from './Table'


function Datatable({
    color = 'primary',
    currentPage = 1,
    pageSizes = [5, 10, 25, 100, 500],
    defaultSize = 5,
    circled = false,
    hiddens = ['id', '_id'],
    of = "of",
    simplified = false,
    rowsPerPageLabel = 'Rows/page',
    collection = '',
}) {

    const [values, setValues] = useState([]);
    const [valuesCopie, setValuesCopie] = useState([]);
    const [size, setSize] = useState(defaultSize);
    const [curPage, setCurPage] = useState(currentPage);
    const [searching, setSearching] = useState(false);
    const [vHiddens, setVHiddens] = useState([...hiddens]);
    const [vFilter, setVFilter] = useState([]);
    const [actions, setActions] = useState({});
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
    const [updateValues, setUpdateValues] = useState(null);
    const [loadingData, setLoadingData] = useState(true);

    const { wsSave, all, getSchema } = useStore();

    const [collectionSchema, setCollectionSchema] = useState({});
    const [collectionData, setCollectionData] = useState({});

    useEffect(() => {
        setCollectionSchema(getSchema(collection));
    }, [getSchema, collection]);

    useEffect(() => {
        const cb = async _ => {
            const data = await all(collection);
            console.log(data);
            setValues(data);
            setValuesCopie(data);
            if (data.length > 0) {
                setVFilter(Object.keys(data[0]));
            }
            setLoadingData(false);
        }
        cb();

        return _ => { };
    }, [all, collection]);

    useEffect(() => {
        const start = size * (curPage - 1);
        setValues(deepCopie(valuesCopie).slice(start, start + size));
    }, [curPage, size, valuesCopie]);

    function search(v) {
        const value = v.toLowerCase();
        setSearching(value.length === 0 ? false : true);
        const selected = [];
        for (const el of valuesCopie) {
            const newValue = {};
            for (const it of vFilter) {
                newValue[it] = el[it];
            }
            const transformed = Object.values(newValue).join('_').toLowerCase();
            if (transformed.indexOf(value) !== -1) {
                selected.push(el);
            }
        }
        setValues(selected);
        if (value.length === 0) {
            const start = size * (curPage - 1);
            setValues(deepCopie(valuesCopie).slice(start, start + size));
        }
    }

    function toggleColumnVisibility(it) {
        const index = vHiddens.findIndex(el => el === it);
        if (index !== -1) {
            vHiddens.splice(index, 1);
        } else {
            vHiddens.push(it);
        }
        setVHiddens([...vHiddens]);
    }

    function toggleColumnFilter(it) {
        const index = vFilter.findIndex(el => el === it);
        if (index !== -1) {
            vFilter.splice(index, 1);
        } else {
            vFilter.push(it);
        }
        setVFilter([...vFilter]);
    }

    function toggleActionVisibility() {
        if (Object.keys(actions).length === 0) {
            setActions({ actions: null });
        } else {
            setActions({});
        }
    }

    function renderImportExportMenu(position) {
        return <Dropdown width={200} position={position} component={<Button color={color} outlined icon="sort">Import / Export</Button>}>
            <List>
                <ListGroup title="Import">
                    <ListItem>
                        <Flex ai="center" gap={15}>
                            <Icon name="file" />
                            <Font>Csv</Font>
                        </Flex>
                    </ListItem>
                    <ListItem>
                        <Flex ai="center" gap={15}>
                            <Icon name="fileExcel" color="success" />
                            <Font>Excel</Font>
                        </Flex>
                    </ListItem>
                </ListGroup>
                <ListGroup title="Export">
                    <ListItem>
                        <Flex ai="center" gap={15}>
                            <Icon name="filePdf" color="danger" />
                            <Font>Pdf</Font>
                        </Flex>
                    </ListItem>
                    <ListItem>
                        <Flex ai="center" gap={15}>
                            <Icon name="fileExcel" color="success" />
                            <Font>Excel</Font>
                        </Flex>
                    </ListItem>
                    <ListItem>
                        <Flex ai="center" gap={15}>
                            <Icon name="file" />
                            <Font>Csv</Font>
                        </Flex>
                    </ListItem>
                </ListGroup>
            </List>
        </Dropdown>;
    }

    return (
        <div>
            <Element padding="2" elevation="2" bTop={'solid 3px ' + _THEME_COLORS['$' + color]} radius="5px">
                <Flex ai="center" jc="space-between" wrap gap={20}>
                    <Flex gap={10}>
                        <Dropdown width="200" component={<Button color={color} outlined icon="filter">Filter</Button>}>
                            <List>
                                {vFilter?.length > 0 && vFilter
                                    .map(it => <ListItem key={generateUniqueKey('col-pick-' + it)}>
                                        <Flex gap={15} ai="center">
                                            <Checkbox
                                                onChange={_ => toggleColumnFilter(it)}
                                                color={color}
                                                checked={vFilter.includes(it)} />
                                            <Font>{capitalize(it)}</Font>
                                        </Flex>
                                    </ListItem>)}
                            </List>
                        </Dropdown>
                        <Dropdown width="200" component={<Button color={color} outlined icon="crosshairs">Columns picker</Button>}>
                            <List>
                                {vFilter?.length > 0 && <div>
                                    {vFilter
                                        .map(it => <ListItem key={generateUniqueKey('col-pick-' + it)}>
                                            <Flex gap={15} ai="center">
                                                <Checkbox
                                                    onChange={_ => toggleColumnVisibility(it)}
                                                    color={color}
                                                    checked={!vHiddens.includes(it)} />
                                                <Font>{capitalize(it)}</Font>
                                            </Flex>
                                        </ListItem>)}
                                    <ListItem>
                                        <Flex gap={15} ai="center">
                                            <Checkbox
                                                onChange={_ => toggleActionVisibility()}
                                                color={color}
                                                checked={Object.keys(actions).length === 0} />
                                            <Font>Actions</Font>
                                        </Flex>
                                    </ListItem>
                                </div>}
                            </List>
                        </Dropdown>
                        <Hidden up="600px">
                            {renderImportExportMenu('bottom')}
                        </Hidden>
                        <Hidden down="600px">
                            {renderImportExportMenu('left')}
                        </Hidden>
                    </Flex>
                    <Button color={color} icon="plus" onClick={_ => {
                        setOpenAddDialog(true);
                    }}>Add new item</Button>
                </Flex>
                <div className="mt-3 mb-3">
                    <Search color={color} bgcolor="white" onSearch={v => search(v)} />
                </div>
                {searching && <Font color={color} weight="bold">{values.length} items founded!</Font>}
                {values.length === 0 ?
                    <div>
                        {loadingData ? <Element elevation="3" className="bg-light" padding="20px">
                            <Flex jc="center" ai="center" direction="column" gap={20}>
                                <BarsLoader /> <br />
                                <Font weight="bold">Loading data!</Font>
                            </Flex>
                        </Element> : <Element elevation="3" className="bg-danger">
                            <div className="m-3 p-2 text-center">
                                <Font weight="bold">No data founded!</Font>
                            </div>
                        </Element>
                        }
                    </div>
                    : <div>
                        <Table
                            data={values}
                            setData={setValues}
                            hiddens={vHiddens}
                            actions={[
                                { icon: 'eye', label: 'Item details', color: 'success', action: row => alert('Displaying row' + JSON.stringify(row)) },
                                {
                                    icon: 'edit', label: 'Edit item', color: 'primary', action: row => {
                                        setOpenUpdateDialog(true);
                                        setUpdateValues(row);
                                    }
                                },
                                { icon: 'trash', label: 'Delete item', color: 'danger', action: row => alert('Deleting row' + JSON.stringify(row)) },
                            ]}
                            color={color}
                            {...actions} />
                        {!searching && <Paginator
                            color="light"
                            hoverColor={color}
                            currentPage={curPage}
                            pageSizes={pageSizes}
                            defaultSize={size}
                            circled={circled}
                            of={of}
                            length={valuesCopie.length}
                            simplified={simplified}
                            rowsPerPageLabel={rowsPerPageLabel}
                            onChange={v => {
                                setCurPage(v.current);
                                setSize(v.size);
                            }} />}
                    </div>}
            </Element >
            {openAddDialog && <Modal
                color={color}
                title="Add new item"
                onClose={_ => setOpenAddDialog(false)}
                actions={<Button
                    onClick={_ => {
                        console.log(collectionData);
                        wsSave(collection, collectionData);
                        setOpenAddDialog(false);
                    }}>Add item</Button>}>
                <div className="pt-0 pl-3 pr-3">
                    <Form
                        schema={collectionSchema}
                        bgcolor="light"
                        onChange={v => setCollectionData(v)}
                        className="grid grid-cols-min-200 grid-gap-5" />
                </div>
            </Modal>}
            {openUpdateDialog && <Modal
                color={color}
                title="Update item"
                onClose={_ => setOpenAddDialog(false)}
                actions={<Button
                    onClick={_ => {
                        console.log(collectionData);
                        wsSave(collection, collectionData, collectionData.id);
                        setOpenUpdateDialog(false);
                    }}>Update item</Button>}>
                <div className="pt-0 pl-3 pr-3">
                    <Form
                        schema={collectionSchema}
                        bgcolor="light"
                        values={updateValues}
                        onChange={v => setCollectionData(v)}
                        className="grid grid-cols-min-200 grid-gap-5" />
                </div>
            </Modal>}
        </div >
    )
}

export default Datatable
