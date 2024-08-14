import {default as sxProps} from "@/interfaces/sx.interface";
import {LogoProps} from "@/components/Logo/src/interfaces/Logo.interface";

export interface NavItem {
    url ?: string;
    label ?: string;
    id ?: string;
    openLinkInNewTab ?: boolean
}

export interface HeaderDesktopFixedProps extends sxProps {
    className?: string
    navItems?: NavItem[];
    logoProps?: LogoProps
}
export interface HeaderDesktopFlexProps extends sxProps {
    className?: string
    navItems?: NavItem[];
    logoProps?: LogoProps
}
export interface HeaderMobileProps extends sxProps {
    className?: string
    navItems?: NavItem[];
    logoProps?: LogoProps
}

export interface HeaderProps extends sxProps{
   className ?: string;
   headerDesktopProps : HeaderDesktopFixedProps;
   headerMobileProps : HeaderMobileProps;
}


