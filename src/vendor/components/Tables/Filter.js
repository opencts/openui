import React, { memo } from 'react'
import { capitalize, generateUniqueKey } from '../../services/utils'
import Flex from '../Containers/Flex'
import Font from '../Fonts/Font'
import Button from '../Forms/Button'
import Checkbox from '../Forms/Checkbox'
import List from '../List/List'
import ListItem from '../List/ListItem'
import Dropdown from '../Tips/Dropdown'

function Filter({ values, vFilter, setVFilter, color }) {

    function toggleColumnFilter(it) {
        const index = vFilter.findIndex(el => el === it);
        if (index !== -1) {
            vFilter.splice(index, 1);
        } else {
            vFilter.push(it);
        }
        setVFilter([...vFilter]);
    }

    return <Dropdown width="200" component={<Button color={color} outlined icon="filter">Filter</Button>}>
        <List>
            {values?.length > 0 && values
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
}

export default memo(Filter)
