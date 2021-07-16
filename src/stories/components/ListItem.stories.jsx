import React from 'react';
import ListItem from '../../components/List/ListItem';
import '../assets/scss/_index.scss';

export default {
    title: 'List/ListItem',
    component: ListItem
}

const Template = (args) => <ListItem {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius eaque illo atque perferendis laboriosam id quas recusandae assumenda exercitationem consectetur reiciendis excepturi, aspernatur quos non odit voluptatum sed veniam.
</ListItem>

export const Default = Template.bind({});

Default.args = {
    avatar: false, // true | false
    avatarImg: '', // img url 
    avatarLetter: '', // avatar letter
    avatarSize: 40, // 40
    avatarColor: 'primary', // primary - secondary ...
    separatorAfter: true, // true | false
    separatorSize: '1',
    separatorColor: 'light-gray',
    actions: [
        { icon: 'edit', color: 'primary' },
        { icon: 'trash', color: 'danger' }
    ], //  [ {icon: 'pencil', color: '', action: () => {...}} ]
    align: 'flex-start', // flex-start - center - flex-end
    actionsAlign: 'flex-end' // flex-start - center - flex-end
}


