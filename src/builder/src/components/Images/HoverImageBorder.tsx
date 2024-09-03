'use client'

import {useEffect, useState} from "react";
import getElementInfo, {ElementInfo} from "@/builder/src/Utils/HTML/getElementInfo";
import {Box} from "@mui/material";
import useIsMobile from "@/Hooks/useIsMobile.hook";

const defaultCursorElementInfoProps = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    display: 'none'
}

const HoverImageBorder = () => {
    const [cursorElementInfo, setCursorElementInfo] = useState<ElementInfo>(defaultCursorElementInfoProps);
    const isMobile = useIsMobile()
    useEffect(() => {
        const interval = setInterval(() => {
            const imageElements = document.querySelectorAll('.builder-children img');
            imageElements.forEach((image:HTMLImageElement) => {
                if(!image.dataset['mouseover']) {
                    image.dataset['mouseover'] = String(true);
                    image.addEventListener('mouseover', (e) => {
                       const imageInfo = getElementInfo(image);
                       if(imageInfo != null) {
                           setCursorElementInfo({
                               ...cursorElementInfo,
                               top: isMobile ? imageInfo.top +  window.scrollY - 42 : imageInfo.top +  window.scrollY,
                               left: imageInfo.left + window.scrollX,
                               width: imageInfo.width - 1,
                               height: imageInfo.height,
                               display: 'block'
                           })
                       }

                    })
                    image.addEventListener('mouseout', (e) => {
                        setCursorElementInfo(defaultCursorElementInfoProps)
                    })
                }
            })
        }, 1000);
        setTimeout(() => clearInterval(interval), 60000);

        return () => {
            const imageElements = document.querySelectorAll('img');
            imageElements.forEach((image:HTMLImageElement) => {
                image.removeEventListener('mouseover',() => {})
                image.removeEventListener('mouseout',() => {})
            })
        }
    })
   return <>
       {
           cursorElementInfo.display !== 'none' &&
           <Box sx={{
               display: cursorElementInfo.display,
               top: cursorElementInfo.top,
               left: cursorElementInfo.left,
               position: 'absolute',
               zIndex: 998,
               width: cursorElementInfo.width,
               height: cursorElementInfo.height,
               border: '2px solid aqua',
               pointerEvents: 'none'
           }}>
           </Box>
       }
   </>
}

export default HoverImageBorder
