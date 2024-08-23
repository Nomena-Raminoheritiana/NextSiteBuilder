import React from 'react'
import sxProps from "@/interfaces/sx.interface";
import {Box} from "@mui/material";
import  { default as AccordionMUI, AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Fade from '@mui/material/Fade';
import './Accordion.style.scss'

export interface AccordionItemsProps extends sxProps {
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
        <Box className={`Accordion ${className} `} data-component-name={'Accordion'}>
            { items.length > 0 && items.map((item, index) => (
                <AccordionMUI
                    key={index}
                    className={'Accordion-container '+item?.className}
                    onChange={(event, expanded) => handleExpansion(index, expanded)}
                    id={'sfs'}
                >
                    {
                        item?.summary?.text &&
                        <AccordionSummary
                            expandIcon={expandedIndex?.includes(index) ? <RemoveIcon />  : <AddIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                            className={'Accordion--summary'}
                        >
                            <Typography id={item?.summary?.id} dangerouslySetInnerHTML={{ __html: item?.summary?.text }} />
                        </AccordionSummary>
                    }
                    {
                        item?.details?.text &&
                        <AccordionDetails
                            className={'Accordion--details'}
                        >
                            <Typography id={item?.details?.id} dangerouslySetInnerHTML={{ __html: item?.details?.text }} />
                        </AccordionDetails>
                    }
                </AccordionMUI>
            )) }
        </Box>

    </>
}

export default Accordion