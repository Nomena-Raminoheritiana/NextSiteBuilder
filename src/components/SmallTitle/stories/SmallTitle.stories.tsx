import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SmallTitle from '../src/SmallTitle';
import image from '../assets/resto1.jpeg'

const meta = {
    title: 'Components/Typography',
    component: SmallTitle,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SmallTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const smallTitle: Story = {
    args: {
      className: 'smallTitleClass',
      children : 'SMALL TITLE',
      textHeading  : 'h5',
      id:'1'
    }
};
