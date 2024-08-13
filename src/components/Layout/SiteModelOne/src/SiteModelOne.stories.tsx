import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SiteModelOne from './SiteModelOne.component';
import {Box} from "@mui/material";
import pageProps from "@/components/Layout/SiteModelOne/src/defaultProps/page.main.props";

const withWrapper = (Story) => (
    <Box className="custom-wrapper">
        <Story />
    </Box>
);

const meta = {
    title: 'Pages/SiteModelOne',
    component: SiteModelOne,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
   decorators: [withWrapper]
} satisfies Meta<typeof SiteModelOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const siteModelOne: Story = {
    args: pageProps,
};

