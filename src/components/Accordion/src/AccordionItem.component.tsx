import React from 'react'
import sxProps from "@/interfaces/sx.interface";
import  { default as AccordionMUI } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './AccordionItem.style.scss'

export interface AccordionItemsProps extends sxProps {
    index : number;
    className ?: string;
    summary ?: {
        text ?: string;
        id?: string;
    };
    details ?: {
        text ?: string;
        id?: string;
    };
}


const AccordionItem: React.FC<AccordionItemsProps> = (props) => {
    const {
        index,
        className,
        summary,
        details,
        sx
    } = props

    const [expandedIndex, setExpandedIndex] = React.useState<number[]>([]);

    const handleExpansion = (index: number, expanded: boolean) => {
        setExpandedIndex((previousExpandedIndex) => {
            if (expanded) {
                return [
                    ...previousExpandedIndex,
                    index
                ]
            }
            return previousExpandedIndex.filter(value => value !== index);
        });
    };

    return <>
        <AccordionMUI
            key={index}
            className={'Accordion-container '+className}
            onChange={(event, expanded) => handleExpansion(index, expanded)}
            id={'sfs'}
        >
            {
                summary?.text &&
                <AccordionSummary
                    expandIcon={expandedIndex?.includes(index) ? <RemoveIcon />  : <AddIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    className={'Accordion--summary'}
                >
                    <Typography id={summary?.id} dangerouslySetInnerHTML={{ __html: summary?.text }} />
                </AccordionSummary>
            }
            {
                details?.text &&
                <AccordionDetails
                    className={'Accordion--details'}
                >
                    <Typography id={details?.id} dangerouslySetInnerHTML={{ __html: details?.text }} />
                </AccordionDetails>
            }
        </AccordionMUI>
    </>
}

export default AccordionItem