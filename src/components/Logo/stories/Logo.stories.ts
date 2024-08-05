import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Logo from '../src/Logo';
import logoImage from '../assets/logo_exemple_2.png'

const meta = {
  title: 'Components/Logo',
  component: Logo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const logo: Story = {
  args: {
    image : {
      url: logoImage,
      id:'img'
    },
    text : {
      text : 'Logo',
      id : '1'
    }
  },
};

