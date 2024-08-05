import React from "react";
import {Box} from "@mui/material";
import '../style/SingleTestimonial.scss'
import TestimonialAuthor, {TestimonialAuthorProps} from "./TestimonialAuthor";

const quoteOpened = (
    <svg viewBox="0 0 24 24" className="testimonialQuote">
        <path fill="currentColor"
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
    </svg>)

const quoteClosed = (
    <svg viewBox="0 0 24 24" className="testimonialQuote">
        <path fill="currentColor"
              d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 013.5-3.5c1.073 0 2.099.49 2.748 1.179z"></path>
    </svg>
)

export interface SingleTestimonialProps {
    className ?: string;
    paragraph ?: {
        text ?: string;
        id ?: string;
    };
    testimonialAuthor ?: TestimonialAuthorProps
}

const SingleTestimonial: React.FC<SingleTestimonialProps> = (props) => {
    const {
        className,
        paragraph,
        testimonialAuthor
    } = props;
    return <>
        <Box
            className={'singleTestimonial--container '+ className}
            data-component-name={'SingleTestimonial'}
        >
            { paragraph && (
                <>
                    {quoteOpened}
                    <blockquote className={'singleTestimonial--blockquote'} id={paragraph?.id}>
                        {paragraph?.text}
                    </blockquote>
                    {quoteClosed}
                </>
            )}
            <Box>
                <TestimonialAuthor  {...testimonialAuthor} />
            </Box>
        </Box>
    </>
}

export default SingleTestimonial;