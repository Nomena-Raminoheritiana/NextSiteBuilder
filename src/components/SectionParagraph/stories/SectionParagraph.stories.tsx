import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SectionParagraph from '../src/SectionParagraph';
import image from '../assets/resto1.jpeg'

const meta = {
    title: 'Components/Typography',
    component: SectionParagraph,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SectionParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sectionParagraph: Story = {
    args: {
      className: 'TitleClass',
      children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      textHeading  : 'h2',
      id : '1'
    }
};
