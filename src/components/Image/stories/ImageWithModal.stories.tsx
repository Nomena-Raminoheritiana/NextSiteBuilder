import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ImageWithModal from '../src/ImageWithModal';
import image from "@/components/BannerFullWidth/assets/resto1.jpeg";
import image2 from "@/components/BannerFullWidth/assets/imageResto2.jpg";

const meta = {
    title: 'Components/Image',
    component: ImageWithModal,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    }
} satisfies Meta<typeof ImageWithModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const imageWithModal: Story = {
    args: {
        src: 'https://images.stockcake.com/public/c/2/6/c26211eb-40c2-498a-9690-3301aa47309f_large/bustling-restaurant-scene-stockcake.jpg',
        title: 'Coffee',
        id: '1'
    },
};
