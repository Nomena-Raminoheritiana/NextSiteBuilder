import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TestimonialAuthor from '../src/TestimonialAuthor';
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
    component: TestimonialAuthor,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [
        withWrapper
    ]
} satisfies Meta<typeof TestimonialAuthor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const testimonialAuthor: Story = {
    args: {
        className : 'testimonialAuthorClassName',
        image : {
            url: author1Image,
            alt: 'author 1'
        },
        name : {
            text : 'Adam Cuppy',
            id : 'nameId'
        },
        jobTitle : {
            text : 'Founder, EventsNYC',
            id : 'jobTitleId'
        }
    }
};
