import React from 'react';
import Paginator from '../../components/Tables/Paginator';

export default{
    title: 'Tables/Paginator',
    component: Paginator
}

const Template = (args) => <Paginator {...args} />

export const Default = Template.bind({});

Default.args = {
    length : 100,
    color : 'light',
    hoverColor : 'primary',
    currentPage : 1,
    pageSizes : [5, 10, 25, 100, 500],
    defaultSize : 5,
    circled : false,
    of : "of",
    onChange : () => { },
    simplified : false,
    rowsPerPageLabel : 'Rows/page',
}