import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Carousel from '../src/Carousel';
import image from "@/components/BannerFullWidth/assets/resto1.jpeg";
import image2 from "@/components/BannerFullWidth/assets/imageResto2.jpg";

const meta = {
    title: 'Components/Carousel',
    component: Carousel,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    }
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const carousel: Story = {
    args: {
        indicators : true,
        swipe : true,
        fullHeightHover : true,
        slide : true,
        autoPlay : true,
        animation : 'slide',
        cycleNavigation : true,
        items : [
            <div style={{height:'350px', display:'flex', alignItems:'center', background:'#156A79'}}>
                <h1 style={{textAlign: 'center', marginLeft:'auto', marginRight:'auto',  color: 'white'}}>SLIDE 1</h1>
            </div>,
            <div style={{height:'350px', display:'flex', alignItems:'center', background:'#154c79'}}>
                <h1 style={{textAlign: 'center', marginLeft:'auto', marginRight:'auto', color: 'white'}}>SLIDE 2</h1>
            </div>
        ]
    },
};
