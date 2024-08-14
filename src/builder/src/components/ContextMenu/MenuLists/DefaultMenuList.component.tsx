import React, {lazy, useState, Suspense} from 'react'
import {
    Backdrop,
    Box,
    Divider,
    Fade,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Modal,
    Paper
} from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import {getComponent} from "@/builder/src/components/Map/ComponentsMap";

export interface menuItem {
    muiIcon ?: string,
    label ?: string,
    divider ?: boolean,
    redirectToUrl ?: string,
    componentToShow ?: string
}


export interface DefaultMenuListProps {
    targetHtmlElement ?: HTMLElement,
    menuItems ?: menuItem[],
    handleClose ?: () => void
}


const DefaultMenuList: React.FC<DefaultMenuListProps> = (props) => {
    const {
        menuItems,
        handleClose,
        targetHtmlElement
    } = props

    const [ComponentToShow, setComponentToShow] = useState<React.FC>(null)

    const handleClickMenu = (e, menu:menuItem) => {
        e.preventDefault();
        e.stopPropagation();
        if(menu?.componentToShow) {
            const componentImport = getComponent(menu.componentToShow);
            if (componentImport) {
                const LazyComponent = lazy(componentImport);
                setComponentToShow(LazyComponent);
            }
        }
    }

    return <>
        {!ComponentToShow &&
            <Paper>
                <MenuList>
                    {
                        menuItems?.map((menu, key) => (
                            <div key={key}>
                                {menu?.divider && (<Divider/>)}
                                <MenuItem onClick={(e) => handleClickMenu(e, menu)}>
                                    {menu?.muiIcon && (
                                        <ListItemIcon>
                                            {React.createElement(MuiIcons[menu?.muiIcon], {fontSize: 'small'})}
                                        </ListItemIcon>
                                    )}
                                    <ListItemText>{menu?.label || 'Default Menu'}</ListItemText>
                                </MenuItem>
                            </div>
                        ))
                    }
                </MenuList>
            </Paper>
        }
        { ComponentToShow &&
            <ComponentToShow
                targetHtmlElement={targetHtmlElement}
                handleCloseContextMenu={handleClose}
            />
        }
    </>
}

export default DefaultMenuList