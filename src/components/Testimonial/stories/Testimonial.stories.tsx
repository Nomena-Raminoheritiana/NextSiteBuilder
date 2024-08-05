import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Testimonial from '../src/Testimonial';
import image from "@/components/Banner/assets/resto1.jpeg";
import image2 from "@/components/Banner/assets/imageResto2.jpg";
import author1Image from "../assets/author 1.avif"
import author2Image from "../assets/author 2.avif"
import {useEffect, useState} from "react";

const withWrapper = (Story) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className="custom-wrapper"
            style={{
                paddingLeft: isMobile ? '20px' : '100px',
                paddingRight: isMobile ? '20px' : '100px',
            }}
        >
            <Story />
        </div>
    );
};

const meta = {
    title: 'Components/Testimonial',
    component: Testimonial,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [
        withWrapper
    ]
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const testimonial: Story = {
    args: {
        className:'testimonialclassName',
        title: {
            text : 'Testimonials',
            id : '72'
        },
        paragraph: {
            text : 'Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n',
            id : '73'
        },
        imageCarouselMod1Props: {
            items : [
                {
                    url: image,
                    alt :'resto',
                    id: '74'
                },
                {
                    url: image2,
                    alt :'resto 2',
                    id: '75'
                }
            ]
        },
        singleTestimonials: [
            {
                className : 'singleTestimonialClassName',
                paragraph : {
                    text : 'Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                    id: '76'
                },
                testimonialAuthor : {
                    className : 'testimonialAuthorClassName',
                    image : {
                        url: author1Image,
                        alt: 'author 1',
                        id: '77'
                    },
                    name : {
                        text : 'Adam Cuppy',
                        id: '78'
                    },
                    jobTitle : {
                        text: 'Founder, EventsNYC',
                        id: '79'
                    }
                }
            },
            {
                className : 'singleTestimonialClassName',
                paragraph : {
                    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
                    id: '80'
                },
                testimonialAuthor : {
                    className : 'testimonialAuthorClassName',
                    image : {
                        url: author2Image,
                        alt: 'author 2',
                        id: '81'
                    },
                    name : {
                        text : 'Charlotte Hale',
                        id: '82'
                    },
                    jobTitle : {
                        text : 'CEO, Delos Inc.',
                        id: '83'
                    }
                }

            }
        ]

    }
};
