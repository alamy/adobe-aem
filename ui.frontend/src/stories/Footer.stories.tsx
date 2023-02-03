import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Footer>;


const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  primary: true,
  label: 'Footer Defaut',
  textoFotter: 'text',
  seconds: '600',
};

export const Desktop = Template.bind({});
Desktop.args = {
  label: 'Footer Desktop',
  textoFotter: 'password',
  seconds: '600',
};

export const Mobil = Template.bind({});
Mobil.args = {
  label: 'Footer Mobil',
  seconds: 'lock',
  textoFotter: '600',
};


