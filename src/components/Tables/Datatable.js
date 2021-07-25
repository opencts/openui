import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { capitalize, deepCopie, generateFakeData, generateUniqueKey, reformatData } from '../../services/utils'
import _THEME_COLORS from '../../services/_colors'
import Element from '../Containers/Element'
import Flex from '../Containers/Flex'
import Hidden from '../Containers/Hidden'
import Font from '../Fonts/Font'
import Icon from '../Fonts/Icon'
import Button from '../Forms/Button'
import Checkbox from '../Forms/Checkbox'
import Search from '../Forms/Search'
import List from '../List/List'
import ListGroup from '../List/ListGroup'
import ListItem from '../List/ListItem'
import Dropdown from '../Tips/Dropdown'
import Paginator from './Paginator'
import Table from './Table'

const _DATA_ = generateFakeData(379);

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
    data = _DATA_
}) {

    const [values, setValues] = useState(reformatData(data));
    const [valuesCopie] = useState(reformatData(data));
    const [size, setSize] = useState(defaultSize);
    const [curPage, setCurPage] = useState(currentPage);
    const [searching, setSearching] = useState(false);
    const [vHiddens, setVHiddens] = useState([...hiddens]);
    const [vFilter, setVFilter] = useState(Object.keys(data[0]));
    const [actions, setActions] = useState({});

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
        <Element padding="2" elevation="2" bTop={'solid 3px ' + _THEME_COLORS['$' + color]} radius="5px">
            <Flex ai="center" jc="space-between" wrap gap={20}>
                <Flex gap={10}>
                    <Dropdown width="200" component={<Button color={color} outlined icon="filter">Filter</Button>}>
                        <List>
                            {data.length > 0 && Object
                                .keys(data[0])
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
                            {data.length > 0 && <div>
                                {Object
                                    .keys(data[0])
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
                <Button color={color} icon="plus">Add new item</Button>
            </Flex>
            <Search color={color} onSearch={v => search(v)} />
            {searching && <Font color={color} weight="bold">{values.length} items founded!</Font>}
            {values.length === 0 ?
                <Element elevation="3" className="bg-danger">
                    <div className="m-3 p-2 text-center">
                        <Font weight="bold">No data founded!</Font>
                    </div>
                </Element>
                : <div>
                    <Table
                        data={values}
                        setData={setValues}
                        hiddens={vHiddens}
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
        </Element>
    )
}

export default Datatable
