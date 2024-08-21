import React from 'react'
import Marquee from "react-fast-marquee";
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import {MarqueeTextProps} from "@/components/Marquee";


const MarqueeText = ({
    text,
    textHeading = 'h6',
    id
                     }:MarqueeTextProps) => {
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return <>
        <Box
            sx={{
                background:'var(--primary-color, #1976d2)'
            }}
            data-component-name={'MarqueeText'}
        >
            <Marquee
                pauseOnHover={true}
                speed={20}
                gradient={true}
                gradientWidth={mobileScreen ? 50 : 500}
                gradientColor={'var(--primary-color, #1976d2)'}
            >
                <Typography
                    variant={textHeading}
                    sx={{
                        color: '#fff',
                        py: 2
                    }}
                    id={id}
                >
                    {text}
                </Typography>
            </Marquee>
        </Box>

    </>
}

export default MarqueeText