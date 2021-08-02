import React from 'react';
import Table from '../../components/Tables/Table';

export default{
    title: 'Tables/Table',
    component: Table
}

const Template = (args) => <Table {...args} />

export const Default = Template.bind({});

Default.args = {
    color : 'primary',
    checkable : false,
    actions : [
        { icon: 'eye', label: 'Item details', color: 'success', action: row => alert('Displaying row' + JSON.stringify(row)) },
        { icon: 'edit', label: 'Edit item', color: 'primary', action: row => alert('Editing row' + JSON.stringify(row)) },
        { icon: 'trash', label: 'Delete item', color: 'danger', action: row => alert('Deleting row' + JSON.stringify(row)) },
    ],
    maxHeight : '72vh',
    data : [],
    hiddens : ['id'],
    onSelectionChange : () => { }
}