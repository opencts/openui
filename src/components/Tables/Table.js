import React, { useEffect, useState } from 'react'
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';
import Checkbox from '../Forms/Checkbox';
import Dropdown from '../Tips/Dropdown';

const _headers = ['Header 1', 'Header 2', 'Header 3', 'Header 4'];
const _rows = [
    ['Column 11', 'Column 12', 'Column 13', 'Column 14'],
    ['Column 21', 'Column 22', 'Column 23', 'Column 24'],
    ['Column 31', 'Column 32', 'Column 33', 'Column 34'],
    ['Column 41', 'Column 42', 'Column 43', 'Column 44'],
    ['Column 51', 'Column 52', 'Column 53', 'Column 54'],
    ['Column 61', 'Column 62', 'Column 63', 'Column 64'],
    ['Column 71', 'Column 72', 'Column 73', 'Column 74'],
    ['Column 81', 'Column 82', 'Column 83', 'Column 84'],
    ['Column 91', 'Column 92', 'Column 93', 'Column 94'],
];

function Table({
    color = 'primary',
    checkable = false,
    actions = [
        { icon: 'edit', label: 'Edit item', color: 'primary', action: row => alert('Editing row' + JSON.stringify(row)) },
        { icon: 'trash', label: 'Delete item', color: 'danger', action: row => alert('Deleting row' + JSON.stringify(row)) },
    ],
    maxHeight = '50vh',
    headers = [..._headers],
    rows = [..._rows],
    onSelectionChange = () => { },
}) {

    const [selected, setSelected] = useState([]);
    const [dataCopie] = useState(rows);
    const [data, setData] = useState(rows);
    const [sorter, setSorter] = useState({
        direction: -1,
        index: -1
    });

    useEffect(() => {
        const copie = JSON.parse(JSON.stringify(dataCopie));
        const sorted = copie.sort((a, b) => {
            if (a[sorter.index] < b[sorter.index]) {
                return sorter.direction;
            } else if (a[sorter.index] > b[sorter.index]) {
                return -1 * sorter.direction;
            } else {
                return 0;
            }
        });
        setData([...sorted])
    }, [sorter.direction, sorter.index, dataCopie]);



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
                        {headers.map((item, index) => <th
                            className={'bg-' + color}
                            onClick={_ => {
                                const s = {
                                    index
                                };
                                if (sorter.direction === -1) s.direction = 1;
                                if (sorter.direction === 1) s.direction = 0;
                                if (sorter.direction === 0) s.direction = -1;
                                setSorter(s);
                            }}
                            key={index}>
                            {item}
                            <span className="ml-2"></span>
                            {sorter.index === index && sorter.direction === -1 && <Icon name="caretDown" />}
                            {sorter.index === index && sorter.direction === 1 && <Icon name="caretUp" />}
                        </th>)}
                        {actions && <th className={'bg-' + color}></th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <tr key={index} className={'pointer'}>
                        {checkable && <td>
                            <Checkbox color={color} checked={selected[index]} onChange={v => {
                                const p = [...selected];
                                p[index] = v;
                                const result = data.filter((item, index) => selected[index]);
                                setSelected(p);
                                onSelectionChange(result);
                            }} />
                        </td>}
                        {item.map((col, idx) => <td key={idx}>{col}</td>)}
                        {actions && <td>
                            <Dropdown width="150" component={() => <Icon name="ellipsisV" />} position="left">
                                {actions.map((elt, id) => <div className={'p-1 pt-2 pb-2 bg-hover-light-gray'} key={id}>
                                    <Flex
                                        ai="center"
                                        onClick={_ => elt.action(item)}
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
