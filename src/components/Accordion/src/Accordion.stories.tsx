import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Accordion from './Accordion.component';
import {Box} from "@mui/material";

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
    title: 'Components/Accordion',
    component: Accordion,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
   decorators: [withWrapper]
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const accordion: Story = {
    args: {
        className: 'accordionClassName',
        items: [
            {
                className: 'accordionClassName1',
                summary: {
                    text : 'Is lunch provided free of cost ?',
                    id: "1"
                },
                details: {
                    text : 'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
                    id: "2"
                }
            },
            {
                className: 'accordionClassName2',
                summary: {
                    text : 'Do you have 2 Bedroom suites ?',
                    id : "3"
                },
                details: {
                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: '4'
                }
            },
            {
                className: 'accordionClassName3',
                summary: {
                    text : 'Lorem ipsum dolor sit amet',
                    id : '5'
                },
                details: {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id : '6'
                }
            },
            {
                className: 'accordionClassName4',
                summary: {
                    text : 'Lorem ipsum dolor sit amet',
                    id : '7'
                },
                details: {
                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    id: '8'
                }
            }
        ]


    },
};

