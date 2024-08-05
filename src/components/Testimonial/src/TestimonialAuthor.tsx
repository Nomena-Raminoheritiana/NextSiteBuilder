import React from 'react';
import '../style/testimonialAuthor.scss'
import ImageProps from "@/interfaces/image.interface";
import Image from "@/components/Image"

export interface TestimonialAuthorProps {
    className ?: string;
    image ?: ImageProps;
    name ?: {
        text ?: string;
        id ?: string;
    };
    jobTitle ?: {
        text?: string;
        id ?: string;
    }
}

const TestimonialAuthor: React.FC<TestimonialAuthorProps> = (props) => {
    const  {
        className,
        image,
        name,
        jobTitle
    } = props;
    return <>
        <div
            className={`TestimonialAuthorContainer ${className}`}
            data-component-name={'TestimonialAuthor'}
        >
            <Image {...image} className={"TestimonialAuthor--img"} />
            <div className="TestimonialAuthor--contents-container">
                <h5
                    className="TestimonialAuthor--contents-author__name"
                    id={name?.id}
                >
                    {name?.text}
                </h5>
                <p
                    className="TestimonialAuthor--contents-author__jobTitle"
                    id={jobTitle?.id}
                >
                    {jobTitle?.text}
                </p>
            </div>
        </div>
    </>
}

export default TestimonialAuthor;