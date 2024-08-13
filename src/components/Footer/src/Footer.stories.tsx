import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Footer from './Footer.component';
import logoImage from "@/components/Logo/assets/logo_exemple_2.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import {headerLink} from "@/app/siteOne/lib/defaultProps/page.partial.props";

const meta = {
    title: 'Components/Footer',
    component: Footer,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    }
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const footer: Story = {
    args: {
        className: 'FooterClassName',
        logoProps: {
            image : {
                url: logoImage,
                id: '96'
            },
            text : {
                text : 'Logo',
                id: '97'
            }
        },
        navItems : [
            {url: '/url1', label:'Lien 1', id: 'link1'},
            {url: '/url2', label:'Lien 2', id: 'link2'},
            {url: '/url3', label:'Lien 3', id: 'link3'},
            {url: '/url4', label:'Lien 4', id: 'link4'},
        ],
        socialLinks : [
            {
                icon : {
                    url: 'https://img.icons8.com/dotty/480/ffffff/facebook-f.png',
                    title:'',
                    id: '98'
                },
                url: {
                    href : '',
                    id: '99'
                }
            },
            {
                icon : {
                    url:'https://img.icons8.com/dotty/480/ffffff/x.png',
                    title:'',
                    id: '100'
                },
                url:  {
                    href : '',
                    id: '101'
                }
            },
            {
                icon : {
                    url:'https://img.icons8.com/dotty/480/ffffff/youtube-play.png',
                    title:'',
                    id: '102'
                },
                url:  {
                    href : '',
                    id: '103'
                }
            }
        ],
        copywrightText: {
            text : '© Copyright 2020, Treact Inc. All Rights Reserved.',
            id: '104'
        }
    }
};
