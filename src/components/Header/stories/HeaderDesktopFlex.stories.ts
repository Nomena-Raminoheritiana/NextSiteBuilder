import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {HeaderDesktopFlex} from '@/components/Header';
import logoImage from "@/components/Logo/assets/logo_exemple_2.png";

const meta = {
  title: 'Components/Header',
  component: HeaderDesktopFlex,
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
} satisfies Meta<typeof HeaderDesktopFlex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const headerDesktopFlex: Story = {
  args: {
    navItems : [
      {url: '/url1', label:'Link1', id:'1'},
      {url: '/url2', label:'Link2', id:'2'},
      {url: '/url3', label:'Link3', id:'3'},
      {url: '/url4', label:'Link4', id:'4'},
    ],
    logoProps: {
      image : {
        url: logoImage
      },
      text : {
        text : 'Logo',
        id : '5'
      }
    }
  }
};

