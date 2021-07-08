import React from 'react';
import Border from '../../components/Border'
import '../assets/scss/_index.scss';

export default {
  title: 'General/Border',
  component: Border
};

const Template = (args) => <Border {...args}>
  <div>It's war!</div>
</Border>

export const Default = Template.bind({});
Default.args = {
  margin: '0',
  padding: '0',
  radius: '0',
  type: 'none',
  top: 'none',
  right: 'none',
  bottom: 'none',
  left: 'none',
  width: 'auto',
  height: 'auto'
}

export const Solid = Template.bind({});
Solid.args = {
  margin: '0',
  padding: '0',
  radius: '0',
  type: 'solid 3px #f58706',
  top: 'none',
  right: 'none',
  bottom: 'none',
  left: 'none',
  width: 'auto',
  height: 'auto'
}

export const LeftBottom = Template.bind({});
LeftBottom.args = {
  margin: '0',
  padding: '0',
  radius: '0',
  top: 'none',
  right: 'none',
  bottom: 'solid 3px #f58706',
  left: 'solid 3px #f58706',
  width: 'auto',
  height: 'auto'
}

export const Width35 = Template.bind({});
Width35.args = {
  margin: '0',
  padding: '0',
  radius: '0',
  width: '.35',
  height: 'auto',
  type: 'solid 1px #000'
}