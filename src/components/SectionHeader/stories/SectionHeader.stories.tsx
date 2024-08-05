import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SectionHeader from '../src/SectionHeader';
import image from '../assets/resto1.jpeg'

const meta = {
    title: 'Components/SectionHeader',
    component: SectionHeader,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const sectionHeader: Story = {
    args: {
        smallTitleContents:{
            text : 'LOREM',
            id : 'smallTitleContentsSectionHeaderProps3'
        },
        sectionTitleContents:{
            text : 'Lorem ipsum dolor sit amet',
            id : 'sectionTitleContentsSectionHeaderProps3'
        },
        sectionParagraphContents:{
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id : 'sectionParagraphContentsSectionHeaderProps3'
        },
        smallTitleProps: {
            className:'smallTitleClass',
            textHeading:'h4'
        },
        sectionTitleProps: {
            className:'sectionTitleClass',
            textHeading:'h2'
        },
        sectionParagraphProps: {
            className:'sectionParagraphClass'
        }
    }
};

export const sectionAlignLeft: Story = {
    args: {
        smallTitleContents:{
            text : 'LOREM',
            id : 'smallTitleContentsSectionHeaderProps3'
        },
        sectionTitleContents:{
            text : 'Lorem ipsum dolor sit amet',
            id : 'sectionTitleContentsSectionHeaderProps3'
        },
        sectionParagraphContents:{
            text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            id : 'sectionParagraphContentsSectionHeaderProps3'
        },
        smallTitleProps: {
            className:'smallTitleClass',
            textHeading:'h4'
        },
        sectionTitleProps: {
            className:'sectionTitleClass',
            textHeading:'h2'
        },
        sectionParagraphProps: {
            className:'sectionParagraphClass'
        },
        alignLeft : true
    }
};

