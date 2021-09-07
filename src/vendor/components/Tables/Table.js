import React, { useEffect, useState } from 'react'
import { useMemo } from 'react';
import { generateUniqueKey } from '../../services/utils';
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Tips/Dropdown';

function Table({
    color = 'primary',
    checkable = false,
    actions = [
        { icon: 'eye', label: 'Item details', color: 'success', action: row => alert('Displaying row' + JSON.stringify(row)) },
        { icon: 'edit', label: 'Edit item', color: 'primary', action: row => alert('Editing row' + JSON.stringify(row)) },
        { icon: 'trash', label: 'Delete item', color: 'danger', action: row => alert('Deleting row' + JSON.stringify(row)) },
    ],
    maxHeight = '72vh',
    data = [],
    hiddens = ['id'],
    onSelectionChange = () => { }
}) {

    const [selected, setSelected] = useState([]);
    
    const [sorter, setSorter] = useState({
        direction: -1,
        index: -1
    });

    const headers = useMemo(_ => data.length > 0 ? Object.keys(data[0]).filter(it => !hiddens.includes(it)) : [], [hiddens, data]);

    useEffect(() => {
        data.sort((a, b) => {
            if (a[sorter.index] < b[sorter.index]) {
                return sorter.direction;
            } else if (a[sorter.index] > b[sorter.index]) {
                return -1 * sorter.direction;
            } else {
                return 0;
            }
        });
        // eslint-disable-next-line
    }, [sorter.direction, sorter.index]);

    return (
        <div className="table" style={{ maxHeight }}>
            <table>
                <thead>
                    <tr className={'bg-' + color}>
                        {checkable && <th className={'bg-' + color}>
                            <Checkbox color="light" onChange={v => {
                                setSelected(data.map(_ => v));
                                onSelectionChange([...data]);
                            }} />
                        </th>}
                        {headers
                            .map((item, index) => <th
                                className={'bg-' + color}
                                onClick={_ => {
                                    const s = {
                                        index: headers[index]
                                    };
                                    if (sorter.direction === -1) s.direction = 1;
                                    if (sorter.direction === 1) s.direction = 0;
                                    if (sorter.direction === 0) s.direction = -1;
                                    setSorter(s);
                                }}
                                key={generateUniqueKey('dt-th-' + item)}>
                                {item.toUpperCase()}
                                <span className="ml-2"></span>
                                {sorter.index === headers[index] && sorter.direction === -1 && <Icon name="caretDown" />}
                                {sorter.index === headers[index] && sorter.direction === 1 && <Icon name="caretUp" />}
                            </th>)}
                        {actions && <th className={'bg-' + color}></th>}
                    </tr>
                </thead>
                <tbody>
                    {data
                        .map((item, index) => <tr key={generateUniqueKey('dt-tr-' + index)} className={'pointer'}>
                            {checkable && <td>
                                <Checkbox color={color} checked={selected[index]} onChange={v => {
                                    const p = [...selected];
                                    p[index] = v;
                                    const result = data.filter((item, index) => selected[index]);
                                    setSelected(p);
                                    onSelectionChange(result);
                                }} />
                            </td>}
                            {headers.map(col => <td key={generateUniqueKey('dt-td-' + col)}>{item[col]}</td>)}
                            {actions && <td>
                                <Dropdown width="150" component={() => <Icon name="ellipsisV" color={color} />} position="left">
                                    {actions.map((elt, id) => <div className={'p-2 bg-hover-light-gray'} key={id}>
                                        <Flex
                                            ai="center"
                                            onClick={_ => elt.action(data[index])}
                                            jc="flex-start" gap={5}>
                                            {elt.icon && <Icon name={elt.icon} color={elt.color} />}
                                            <span>{elt.label}</span>
                                        </Flex>
                                    </div>)}
                                </Dropdown>
                            </td>}
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Table
