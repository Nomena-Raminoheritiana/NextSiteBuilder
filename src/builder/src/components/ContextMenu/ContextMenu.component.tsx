import * as React from 'react';
import {Backdrop, Box} from "@mui/material";
import {ReactElement, useEffect} from "react";
import {MarkdownToJSX} from "markdown-to-jsx";
import HTMLTags = MarkdownToJSX.HTMLTags;
import DefaultMenuList from "@/builder/src/components/ContextMenu/MenuLists/DefaultMenuList.component";

export interface menuItem {
    muiIcon ?: string,
    label ?: string,
    divider ?: boolean
}

export interface ContextMenuProps {
    tags?: HTMLTags[];
    menuItems ?: menuItem[];
    children ?: ReactElement;
}

const ContextMenu: React.FC<ContextMenuProps> = (props) => {
    const {
        tags,
        menuItems,
        children
    } = props;
    const [contextMenu, setContextMenu] = React.useState<{
        mouseX: number;
        mouseY: number;
        currentElementTarget: HTMLElement
    } | null>(null);


    const handleContextMenu = (event) => {
        event.preventDefault();
        let targetElement:HTMLElement = event.target;
        if(!targetElement.id) targetElement = targetElement.parentElement
        if(tags?.includes(targetElement?.tagName as HTMLTags) && ![undefined,'',null].includes(targetElement?.id)) {
            setContextMenu(
                contextMenu === null
                    ? {
                        mouseX: event.clientX + 2,
                        mouseY: event.clientY - 6,
                        currentElementTarget: targetElement
                    }
                    : null,
            );
        }
    };

    useEffect(() => {
        document.body.addEventListener('contextmenu', handleContextMenu);
        return () => {
            document.body.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);


    const handleClose = () => {
        setContextMenu(null);
    };

    const menuSx = contextMenu ? {
        width: 320,
        maxWidth: '100%',
        position: 'fixed',
        top: contextMenu.mouseY,
        left: contextMenu.mouseX,
        zIndex: 99999
    } : {}


    return (
        <Box  sx={{ cursor: 'context-menu' }}>
            {children}
            {menuItems && menuItems?.length > 0 && contextMenu &&
                <>
                    <Backdrop
                        sx={{ background:'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={contextMenu && menuItems}
                        onClick={(e) => { e.stopPropagation(); handleClose()}}
                    />
                    <Box sx={menuSx}>
                        <DefaultMenuList
                            menuItems={menuItems}
                            handleClose={handleClose}
                            targetHtmlElement={contextMenu?.currentElementTarget}
                        />
                    </Box>
                </>
            }
        </Box>
    );
}

export default ContextMenu