import React, { useEffect, useState } from 'react'
import Flex from '../Containers/Flex'
import Hidden from '../Containers/Hidden';
import Paper from '../Containers/Paper';
import Icon from '../Fonts/Icon';
import Select from '../Forms/Select'

function Paginator({
    length = 100,
    color = 'light',
    hoverColor = 'primary',
    currentPage = 1,
    pageSizes = [5, 10, 25, 100, 500],
    defaultSize = 5,
    circled = false,
    of = "of",
    onChange = () => { },
    simplified = false,
    rowsPerPageLabel = 'Rows/page',
}) {

    const [paginatorValues, setPaginatorValues] = useState([]);
    const [size, setSize] = useState(defaultSize);
    const [value, setValue] = useState(currentPage);

    useEffect(() => {
        const values = [];
        const nbrOfPages = Math.ceil(length / size);
        if (value < 5 || value > nbrOfPages - 2) {
            for (let i = 1; i <= nbrOfPages; i++) {
                if (i < 6 || i > nbrOfPages - 3) {
                    values.push(i);
                } else {
                    values.push('...');
                    i = nbrOfPages - 3;
                }
            }
        } else {
            for (let i = 1; i <= nbrOfPages; i++) {
                if (i < 3 || [value - 1, value, value + 1].includes(i) || i > nbrOfPages - 2) {
                    values.push(i);
                } else {
                    values.push('...');
                    if (i === 3)
                        i = value - 2;
                    if (i > value + 1)
                        i = nbrOfPages - 2;
                }
            }
        }
        setPaginatorValues(values);
    }, [length, size, value]);

    function changePage(item) {
        if (item !== '...') {
            setValue(item);
            onChange({
                size,
                current: item
            });
        }
    }

    return (
        <div className="paginator">
            <div className="no-simplified p-2">
                <Flex ai="center" jc="space-between">
                    <Select
                        label={rowsPerPageLabel}
                        searcheable={false}
                        color={hoverColor}
                        valueId="id"
                        valueLabel="value"
                        onChange={v => {
                            setSize(v.value);
                            onChange({
                                size: v.value,
                                current: 1
                            });
                        }}
                        data={pageSizes.map(value => ({ id: value, value: value }))} />
                    {!simplified ? <div>
                        <Hidden up="1000px">
                            <Flex ai="center" gap={20}>
                                {paginatorValues.map((item, index) => <div
                                    className="pointer"
                                    onClick={_ => changePage(item)}
                                    key={index}>
                                    <Paper
                                        width="36px"
                                        height="36px"
                                        color={item === value ? hoverColor : color}
                                        hoverColor={hoverColor}
                                        rounded={circled}>
                                        <Flex ai="center" jc="center" style={{ height: '100%' }}>
                                            {item}
                                        </Flex>
                                    </Paper>
                                </div>
                                )}
                            </Flex>
                        </Hidden>
                        <Hidden down="1000px">
                            <Flex ai="center" jc="space-between" gap={10} wrap>
                                <span>
                                    {value} - {value + size - 1} {of} {length}
                                </span>
                                <Flex gap={15}>
                                    <Icon name="angleLeft" color={value !== 1 ? 'dark' : 'gray'} onClick={_ => {
                                        if (value !== 1) {
                                            setValue(value - size);
                                        }
                                    }} />
                                    <Icon name="angleRight" color={value < length - size ? 'dark' : 'gray'} onClick={_ => {
                                        if (value + size < length) {
                                            setValue(value + size)
                                        }
                                    }} />
                                </Flex>
                            </Flex>
                        </Hidden>
                    </div> : <Flex ai="center" jc="space-between" gap={10} wrap>
                        <span>
                            {value} - {value + size - 1} {of} {length}
                        </span>
                        <Flex gap={15}>
                            <Icon name="angleLeft" color={value !== 1 ? 'dark' : 'gray'} onClick={_ => {
                                if (value !== 1) {
                                    setValue(value - size);
                                }
                            }} />
                            <Icon name="angleRight" color={value < length - size ? 'dark' : 'gray'} onClick={_ => {
                                if (value + size < length) {
                                    setValue(value + size)
                                }
                            }} />
                        </Flex>
                    </Flex>}
                </Flex>
            </div>
        </div >
    )
}

export default Paginator
