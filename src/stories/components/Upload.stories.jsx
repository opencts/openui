import React from 'react';
import Upload from '../../components/Forms/Upload';

export default{
    title: 'Forms/Upload',
    component: Upload
}

const Template = (args) => <Upload {...args}/>

export const Default = Template.bind({});

Default.args = {
    label : 'Pick file',
    btnText : 'Browse',
    color : 'primary',
    dropText : 'Drop Here or click to upload',
    finishText : 'Finish',
    multiple : true,
    uploadFunction : null,
    onUploadEnd : () => { }
}