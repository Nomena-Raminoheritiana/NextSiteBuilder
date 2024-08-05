import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import BannerFullWidth from '../src/BannerFullWidth';
import image from '../assets/resto1.jpeg'

const meta = {
    title: 'Components/Banner',
    component: BannerFullWidth,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
} satisfies Meta<typeof BannerFullWidth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const bannerFullWidth: Story = {
    args: {
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
    }
};
