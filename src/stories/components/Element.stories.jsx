import React from 'react';
import Element from '../../components/Containers/Element'
import '../assets/scss/_index.scss';

export default {
  title: 'General/Element',
  component: Element
};

const Template = (args) => <Element {...args}>
  <div>It's war!</div>
</Element>

export const Default = Template.bind({});
Default.args = {
  margin: '0',
  padding: '0',
  radius: '0',
  border: 'none',
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
  border: 'solid 3px #f58706',
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
  border: 'solid 1px #000'
}