import React, { useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useClientDB } from '../../services/ClientDBProvider'
import { useDialog } from '../../services/DialogProvider'
import { deepCopie } from '../../services/utils'
import _THEME_COLORS from '../../services/_colors'
import Element from '../Containers/Element'
import Flex from '../Containers/Flex'
import Hidden from '../Containers/Hidden'
import Modal from '../Dialogs/Modal'
import Font from '../Fonts/Font'
import Icon from '../Fonts/Icon'
import Button from '../Forms/Button'
import Form from '../Forms/Form'
import Search from '../Forms/Search'
import BarsLoader from '../Progress/BarsLoader'
import ColumnsPicker from './ColumnsPicker'
import Filter from './Filter'
import ImportExportMenu from './ImportExportMenu'
import Paginator from './Paginator'
import Table from './Table'


function Datatable({
    color = 'primary',
    currentPage = 1,
    pageSizes = [5, 10, 25, 100, 500],
    defaultSize = 5,
    circled = false,
    hiddens = ['id', '_id', '__v'],
    of = "of",
    simplified = false,
    rowsPerPageLabel = 'Rows/page',
    collection = '',
    deleteText = 'Are you sure you want to continue ?',
    formLabels = null,
    errorMsgs = null,
    refs = null,
    checkable = true
}) {

    const collectionItem = useMemo(() => collection.slice(0, collection.length - 1), [collection]);

    const [values, setValues] = useState([]);
    const [valuesCopie, setValuesCopie] = useState([]);
    const [size, setSize] = useState(defaultSize);
    const [curPage, setCurPage] = useState(currentPage);
    const [searching, setSearching] = useState(false);
    const [vHiddens, setVHiddens] = useState([...hiddens]);
    const [vFilter, setVFilter] = useState([]);
    const [actions, setActions] = useState({});
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [updateValues, setUpdateValues] = useState({});
    const [buttonText, setButtonText] = useState('Create ' + collectionItem);
    const [titleText, setTitleText] = useState('Add new ' + collectionItem);
    const [itemSelected, setItemSelected] = useState([]);

    const { db, getSchema, save, load, dataIsLoading, remove, wsActionStatus } = useClientDB();

    const [loadingCollectionSchema, collectionSchema] = getSchema(collection);
    const { confirm } = useDialog();

    const filterList = useMemo(() => (collection in db && db[collection].length > 0) ?
        Object.keys(db[collection][0]).filter(it => !hiddens.includes(it)) : [], [collection, db]);

    useEffect(() => {
        load(collection);
    }, []);

    useEffect(() => {
        if (!(loadingCollectionSchema || dataIsLoading)) {
            const data = deepCopie(db[collection]);
            setValues(data);
            setValuesCopie(data);
            if (data.length > 0) {
                setVFilter(Object.keys(data[0]));
            }
        }
    }, [loadingCollectionSchema, dataIsLoading, db]);

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

    function reset() {
        setButtonText('Create ' + collectionItem);
        setTitleText('Add new ' + collectionItem);
    }

    const handleSubmit = data => {
        save(collection, data);
        reset();
    }

    const handleReset = () => {
        reset();
    }

    const handleSelectionChange = values => {
        setItemSelected(values);
    }

    const handleDeleteSelected = () => {
        confirm('Are you sure you want to delete those items?', {
            onConfirm: () => {
                for (const el of itemSelected) {
                    remove(collection, el.id);
                }
            }
        });
    }

    if (loadingCollectionSchema || dataIsLoading || !db || !(collection in db)) return <Element elevation="3" className="bg-light" padding="20px">
        <Flex jc="center" ai="center" direction="column" gap={20}>
            <BarsLoader /> <br />
            <Font weight="bold">Loading data!</Font>
        </Flex>
    </Element>

    return (
        <div>
            <Element padding="2" elevation="2" bTop={'solid 3px ' + _THEME_COLORS['$' + color]} radius="5px">
                <Flex ai="center" jc="space-between" wrap gap={20}>
                    <Flex gap={10}>
                        {collection in db && db[collection].length > 0 && <Filter values={filterList} vFilter={vFilter} setVFilter={setVFilter} color={color} />}
                        {collection in db && db[collection].length > 0 && <ColumnsPicker
                            vFilter={vFilter}
                            vHiddens={vHiddens}
                            setVHiddens={setVHiddens}
                            actions={actions}
                            setActions={setActions}
                            color={color} />}
                        <Hidden up="600px">
                            <ImportExportMenu save={(value) => save(collection, value)} status={wsActionStatus} color={color} />
                        </Hidden>
                        <Hidden down="600px">
                            <ImportExportMenu save={(value) => save(collection, value)} status={wsActionStatus} color={color} position="left" />
                        </Hidden>
                        {itemSelected.length > 0 && <Button color="danger" icon="trash" onClick={handleDeleteSelected}>Delete selected</Button>}
                    </Flex>
                    <Button color={color} icon="plus" onClick={_ => {
                        setOpenAddDialog(true);
                    }}>Add new item</Button>
                </Flex>
                <div className="mt-3 mb-3">
                    {collection in db && db[collection].length > 0 && <Search color={color} bgcolor="white" onSearch={v => search(v)} />}
                </div>
                {searching && <Font color={color} weight="bold">{values.length} items founded!</Font>}
                {values.length === 0 ?
                    <Element elevation="3" className="bg-danger">
                        <div className="m-3 p-2 text-center">
                            <Font weight="bold">No data founded!</Font>
                        </div>
                    </Element>
                    : <div>
                        <Table
                            checkable={checkable}
                            data={values}
                            setData={setValues}
                            hiddens={vHiddens}
                            onSelectionChange={handleSelectionChange}
                            actions={[
                                { icon: 'eye', label: 'Item details', color: 'success', action: row => alert('Displaying row' + JSON.stringify(row)) },
                                {
                                    icon: 'edit', label: 'Edit item', color: 'primary', action: row => {
                                        setUpdateValues(row);
                                        setButtonText('Update ' + collectionItem);
                                        setTitleText('Update new ' + collectionItem);
                                        setOpenAddDialog(true);
                                    }
                                },
                                {
                                    icon: 'trash', label: 'Delete item', color: 'danger', action: row => {
                                        confirm(deleteText, {
                                            onConfirm: () => {
                                                remove(collection, row.id);
                                            }
                                        });
                                    }
                                },
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
                title={titleText}
                onClose={_ => setOpenAddDialog(false)}>
                <div className="pt-0 pl-3 pr-3">
                    <Form
                        refs={refs}
                        schema={collectionSchema}
                        bgcolor="light"
                        errorMsgs={errorMsgs}
                        labels={formLabels}
                        values={deepCopie(updateValues)}
                        buttonText={buttonText}
                        onSubmit={event => {
                            handleSubmit(event);
                            setOpenAddDialog(false);
                        }}
                        onReset={handleReset} />
                </div>
            </Modal>}
        </div >
    )
}

export default Datatable
