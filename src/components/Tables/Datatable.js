import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { capitalize, deepCopie, generateFakeData, generateUniqueKey, reformatData } from '../../services/utils'
import _THEME_COLORS from '../../services/_colors'
import Element from '../Containers/Element'
import Flex from '../Containers/Flex'
import Font from '../Fonts/Font'
import Button from '../Forms/Button'
import Checkbox from '../Forms/Checkbox'
import Search from '../Forms/Search'
import List from '../List/List'
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

    function search(v) {
        const value = v.toLowerCase();
        setSearching(value.length === 0 ? false : true);
        const selected = [];
        for (const el of valuesCopie) {
            const transformed = Object.values(el).join('_').toLowerCase();
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

    useEffect(() => {
        const start = size * (curPage - 1);
        setValues(deepCopie(valuesCopie).slice(start, start + size));
    }, [curPage, size, valuesCopie]);

    function toggleColumnVisibility(it) {
        const index = vHiddens.findIndex(el => el === it);
        if (index !== -1) {
            vHiddens.splice(index, 1);
        } else {
            vHiddens.push(it);
        }
        setVHiddens([...vHiddens]);
    }

    return (
        <Element padding="2" elevation="2" bTop={'solid 3px ' + _THEME_COLORS['$' + color]} radius="5px">
            <Flex ai="center" jc="space-between" wrap gap={20}>
                <Flex gap={10}>
                    <Button color={color} outlined icon="filter">Filter</Button>
                    <Dropdown width="200" component={<Button color={color} outlined icon="crosshairs">Columns picker</Button>}>
                        <List>
                            {data.length > 0 && Object
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
                        </List>
                    </Dropdown>
                    <Button color={color} outlined icon="sort">Reorder columns</Button>
                </Flex>
                <Button color={color} icon="plus">Add new item</Button>
            </Flex>
            <Search color={color} onSearch={v => search(v)} />
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
                        color={color} />
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
