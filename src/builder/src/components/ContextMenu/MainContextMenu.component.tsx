import React from 'react'
import ContextMenu from "@/builder/src/components/ContextMenu/ContextMenu.component";
import ParagraphContextMenuData from "@/builder/src/data/ContextMenu/ParagraphContextMenuData.json";
import TitleContextMenuData from "@/builder/src/data/ContextMenu/TitleContextMenuData.json";
import SpanContextMenuData from "@/builder/src/data/ContextMenu/SpanContextMenuData.json";
import ImageContextMenuData from "@/builder/src/data/ContextMenu/ImageContextMenuData.json";
import HyperlinkContextMenuData from "@/builder/src/data/ContextMenu/HyperlinkContextMenuData.json";


const MainContextMenu: React.FC = (props) => {

    return <>
        <ContextMenu {...ParagraphContextMenuData} key={'contextMenuParagraph'} />
        <ContextMenu {...TitleContextMenuData} key={'contextMenuTitle'} />
        <ContextMenu {...SpanContextMenuData} key={'contextMenuSpan'} />
        <ContextMenu {...ImageContextMenuData} key={'contextMenuImage'} />
        <ContextMenu {...HyperlinkContextMenuData} key={'contextMenuHyperlink'} />
    </>
}

export default MainContextMenu