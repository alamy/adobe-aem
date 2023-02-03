import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'Example/Avatar',
  component: Avatar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;


const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Avatar',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Avatar Sec',
};

export const Large = Template.bind({});
Large.args = {
  size: 'big',
  label: 'Avatar Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'little',
  label: 'Avatar Small',
};
