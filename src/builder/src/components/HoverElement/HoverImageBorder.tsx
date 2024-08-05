'use client'

import {useEffect} from "react";

const HoverImageBorder = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            const imageElements = document.querySelectorAll('img');
            imageElements.forEach((image:HTMLImageElement) => {
                if(!image.dataset['mouseover']) {
                    image.dataset['mouseover'] = String(true);
                    image.addEventListener('mouseover', (e) => {
                        const parentNode = image ? image.parentElement : null;
                        parentNode && parentNode.classList.add('img-container')
                    })
                }

                if(!image.dataset['mouseout']) {
                    image.dataset['mouseout'] = String(true);
                    image.addEventListener('mouseout', (e) => {
                        const parentNode = image ? image.parentElement : null;
                        parentNode && parentNode.classList.remove('img-container')
                    })
                }
            })
        }, 1000);
        setTimeout(() => clearInterval(interval), 60000)
    })
   return <></>
}

export default HoverImageBorder
