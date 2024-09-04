import React from 'react'
import sxProps from "@/interfaces/sx.interface";
import {Box} from "@mui/material";
import './Accordion.style.scss'
import AccordionItem, {AccordionItemsProps} from "@/components/Accordion/src/AccordionItem.component";

export interface AccordionProps extends sxProps {
    className ?: string;
    items ?: AccordionItemsProps[]
}

const Accordion: React.FC<AccordionProps> = (props) => {
    const {
        className,
        items=[],
        sx
    } = props

    return <>
        <Box sx={sx} className={`Accordion ${className} `} data-component-name={'Accordion'}>
            { items.length > 0 && items.map((item, index) => (
                <AccordionItem
                    key={index}
                    index={index}
                    className={item?.className}
                    summary={item?.summary}
                    details={item?.details}
                    sx={item?.sx}
                />
            )) }
        </Box>

    </>
}

export default Accordion