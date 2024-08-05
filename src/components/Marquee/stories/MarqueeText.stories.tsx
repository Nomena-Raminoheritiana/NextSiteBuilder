import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MarqueeText from '../src/MarqueeText';
import logoImage from '../assets/logo_exemple_2.png'

const meta = {
  title: 'Components/Marquee',
  component: MarqueeText,
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
} satisfies Meta<typeof MarqueeText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const marqueeText: Story = {
  args: {
      text: "I can be a React component, multiple React components, or just some text.",
      id : '1'

  },
};

