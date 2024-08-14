import React from 'react';
import {Box, Button, Link, MenuItem, MenuList, Typography} from "@mui/material";
import sxProps from "@/interfaces/sx.interface";
import './Footer.style.scss';
import Logo from "@/components/Logo";
import {LogoProps} from "@/components/Logo/src/interfaces/Logo.interface";
import ImageProps from "@/interfaces/image.interface";
import Image from "@/components/Image"

export interface NavItemProps {
    url ?: string;
    label ?: string;
    id ?: string;
    openLinkInNewTab ?: boolean
}
export interface SocialLinkProps {
    className ?: string;
    icon : ImageProps;
    link : {
        url ?: string;
        id ?: string;
        openLinkInNewTab ?: boolean;
    };
}

export interface FooterProps extends sxProps {
    className ?: string;
    logoProps ?: LogoProps;
    navItems?: NavItemProps[];
    socialLinks ?: SocialLinkProps[];
    copywrightText ?: {
        text ?: string;
        id ?: string;
    };
}

const Footer: React.FC<FooterProps> = (props) => {
    const {
        className,
        sx,
        logoProps,
        navItems,
        socialLinks,
        copywrightText
    } = props;

    return <>
        <Box
            className={`Footer ${className}`}
            sx={sx}
            data-component-name={'Footer'}
        >
            <Box className={'Footer--contents'}>
                <Box className={'Footer--contents_container'}>
                    <Logo {...logoProps} className={'center'} />
                    {  navItems &&
                        <MenuList className={'Footer--links'} sx={{overflow: 'hidden'}}>
                            {
                                navItems.map((nav, index) => (
                                    <MenuItem key={index}>
                                        <Button href={nav?.url}  id={nav?.id} target={nav?.openLinkInNewTab ? '_blank' : '_self'}>
                                            {nav?.label}
                                        </Button>
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    }
                    {
                        socialLinks &&
                        <MenuList className={'Footer--socialLinks'} sx={{overflow: 'hidden'}}>
                            <Box className={'Footer--socialLinks_container'} >
                                {
                                    socialLinks.map((nav, index) => (
                                        <MenuItem key={index}>
                                            <Link href={nav?.link?.url} id={nav?.link?.id} target={nav?.link?.openLinkInNewTab ? '_blank' : '_self'} className={`Footer--socialLinks_hyperlink`}>
                                                <Image {...nav?.icon} className={`Footer--socialLinks_icon`} />
                                            </Link>
                                        </MenuItem>
                                    ))
                                }
                            </Box>
                        </MenuList>

                    }
                    {
                        copywrightText &&
                        <Typography paragraph={true} className={'Footer--copyright'} id={copywrightText?.id || ''}>
                            {copywrightText?.text}
                        </Typography>
                    }

                </Box>
            </Box>
        </Box>
    </>
}

export default Footer