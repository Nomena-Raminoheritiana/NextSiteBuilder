import type { Meta, StoryObj } from '@storybook/react';
import ImageCarouselMod1 from '../src/ImageCarouselMod1';
import image from "@/components/Banner/assets/resto1.jpeg";
import image2 from "@/components/Banner/assets/imageResto2.jpg";


const withWrapper = (Story) => (
    <div className="custom-wrapper"
        style={{
            paddingLeft: "100px",
            paddingRight: "100px",
        }}
    >
        <Story />
    </div>
);


const meta = {
    title: 'Components/Carousel',
    component: ImageCarouselMod1,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [withWrapper],
} satisfies Meta<typeof ImageCarouselMod1>;

export default meta;
type Story = StoryObj<typeof meta>;


export const imageCarouselMod1: Story = {
    args: {
        items : [
            {
                url: image,
                alt :'resto',
                id: '1'
            },
            {
                url: image2,
                alt :'resto 2',
                id: '2'
            }
        ]
    },
};
