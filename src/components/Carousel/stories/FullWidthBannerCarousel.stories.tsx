import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FullWidthBannerCarousel from '../src/FullWidthBannerCarousel';
import image from "@/components/Banner/assets/resto1.jpeg";
import image2 from "@/components/Banner/assets/imageResto2.jpg";

const meta = {
    title: 'Components/Carousel',
    component: FullWidthBannerCarousel,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    }
} satisfies Meta<typeof FullWidthBannerCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const fullWidthBannerCarousel: Story = {
    args: {
        indicators : true,
        swipe : true,
        fullHeightHover : true,
        slide : true,
        autoPlay : true,
        animation : 'slide',
        cycleNavigation : true,
        items : [
            {
                image : {
                    url: image,
                    alt :'resto'
                },
                title: {
                    text : 'Bienvenue chez Le Gourmet'
                },
                paragraph: {
                    text : 'Bienvenue dans notre restaurant où l\'art de la cuisine rencontre l\'élégance. Découvrez des plats savoureux préparés avec des ingrédients frais et de haute qualité'
                }
            },
            {
                image : {
                    url: image2,
                    alt :'resto 2'
                },
                title: {
                    text : 'Explorez les saveurs authentiques de notre cuisine'
                },
                paragraph: {
                    text : 'Découvrez une expérience culinaire unique chez [Nom du Restaurant], où chaque plat est préparé avec des ingrédients frais et locaux'
                }
            }
        ]
    },
};
