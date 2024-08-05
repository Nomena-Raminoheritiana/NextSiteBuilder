import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Faqs from './Faqs.component';
import {Box} from "@mui/material";
import faqImage from "../assets/faqImage.svg"


const withWrapper = (Story) => (
    <Box className="custom-wrapper"
         sx={{
             paddingLeft:{xs:'10px', md: "100px"},
             paddingRight:{xs:'10px', md: "100px"},
             paddingTop:{xs:'10px', md: "100px"}

         }}
    >
        <Story />
    </Box>
);

const meta = {
    title: 'Components/Faqs',
    component: Faqs,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [withWrapper],
} satisfies Meta<typeof Faqs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const faqs: Story = {
    args: {
        accordionProps: {
            className: 'accordionClassName',
            items: [
                {
                    className: 'accordionClassName1',
                    summary: {
                        text : 'Is lunch provided free of cost ?',
                        id: '84'
                    },
                    details: {
                        text : 'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
                        id: '85'
                    }
                },
                {
                    className: 'accordionClassName2',
                    summary: {
                        text : 'Do you have 2 Bedroom suites ?',
                        id: '86'
                    },
                    details: {
                        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        id: '87'
                    }
                },
                {
                    className: 'accordionClassName3',
                    summary: {
                        text : 'Lorem ipsum dolor sit amet',
                        id: '88'
                    },
                    details: {
                        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        id: '89'
                    }
                },
                {
                    className: 'accordionClassName4',
                    summary: {
                        text : 'Lorem ipsum dolor sit amet',
                        id: '90'
                    },
                    details: {
                        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                        id: '91'
                    }
                }
            ]
        },
        sectionHeaderProps: {
            smallTitleContents:{
                text : 'FAQS',
                id: '92'
            },
            sectionTitleContents:{
                text : 'We follow these.',
                id: '93'
            },
            sectionParagraphContents:{
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                id: '94'
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
            alignLeft: true
        },
        imageProps: {
            url: faqImage,
            title: 'faqs',
            id: '95'
        }

    }
};

