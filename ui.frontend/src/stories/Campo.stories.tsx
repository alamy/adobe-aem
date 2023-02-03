import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Campo } from './Campo';

export default {
  title: 'Example/Input',
  component: Campo,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Campo>;


const Template: ComponentStory<typeof Campo> = (args) => <Campo {...args} />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Input default',
  type: 'text',
  icon: '',
};

export const User = Template.bind({});
User.args = {
  label: 'Input User',
  type: 'password',
  icon: 'person',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Input Password',
  icon: 'lock',
};


