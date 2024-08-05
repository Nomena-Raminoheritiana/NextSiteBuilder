import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import BannerWithTwoColumns from '../src/BannerWithTwoColumns';
import image from '../assets/imageBanner.avif'

const meta = {
    title: 'Components/Banner',
    component: BannerWithTwoColumns,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof BannerWithTwoColumns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const bannerWithTwoColumns: Story = {
    args: {
        image : {
           url: image,
           alt :'resto'
        },
        imageToLeft: true,
        smallTitleContents:{
            text : 'ABOUT TREACT',
            id: "1"
        },
        sectionTitleContents:{
            text : 'We aim to disrupt the design space.',
            id: "2"
        },
        sectionParagraphContents:{
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            id: "3"
        },
        smallTitleProps: {
            className:'smallTitleClass',
            textHeading:'h5'
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

