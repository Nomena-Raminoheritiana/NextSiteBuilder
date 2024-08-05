import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SectionTitle from '../src/SectionTitle';
import image from '../assets/resto1.jpeg'

const meta = {
    title: 'Components/Typography',
    component: SectionTitle,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sectionTitle: Story = {
    args: {
      className: 'TitleClass',
      children : 'TITLE WITH SOME TEXTS',
      textHeading  : 'h2',
      id: '1'
    }
};
