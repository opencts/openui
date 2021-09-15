import React, { memo } from 'react'
import { capitalize, generateUniqueKey } from '../../services/utils'
import Flex from '../Containers/Flex'
import Font from '../Fonts/Font'
import Button from '../Forms/Button'
import Checkbox from '../Forms/Checkbox'
import List from '../List/List'
import ListItem from '../List/ListItem'
import Dropdown from '../Tips/Dropdown'

function ColumnsPicker({
    vFilter,
    vHiddens,
    actions,
    setActions,
    setVHiddens,
    color
}) {

    function toggleColumnVisibility(it) {
        const index = vHiddens.findIndex(el => el === it);
        if (index !== -1) {
            vHiddens.splice(index, 1);
        } else {
            vHiddens.push(it);
        }
        setVHiddens([...vHiddens]);
    }

    function toggleActionVisibility() {
        if (Object.keys(actions).length === 0) {
            setActions({ actions: null });
        } else {
            setActions({});
        }
    }

    return <Dropdown width="200" component={<Button color={color} outlined icon="crosshairs">Columns picker</Button>}>
        <List>
            {vFilter?.length > 0 && <div>
                {vFilter
                    .filter(it => !vHiddens.includes(it))
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
}

export default memo(ColumnsPicker)
