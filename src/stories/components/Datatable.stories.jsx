import React from 'react';
import Datatable from '../../components/Tables/Datatable';
import { generateFakeData } from '../../services/utils';

export default {
    title: 'Tables/Datatable',
    component: Datatable
}

const _DATA_ = generateFakeData(379);

const Template = (args) => <Datatable {...args} />

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
    currentPage: 1,
    pageSizes: [5, 10, 25, 100, 500],
    defaultSize: 5,
    circled: false,
    hiddens: ['id', '_id'],
    of: "of",
    simplified: false,
    rowsPerPageLabel: 'Rows/page',
    data: _DATA_
}