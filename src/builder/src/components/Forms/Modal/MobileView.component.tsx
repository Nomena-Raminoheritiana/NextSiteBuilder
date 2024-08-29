import React from 'react'
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";
import styled from "styled-components";


interface ThemeSelectorComponentInterface {
}

const ThemeSelectorComponent:React.FC<ThemeSelectorComponentInterface> = () => {

    return <>
        <MainModal
            mainButtonProps={{display:false}}
            cancelButtonProps={{refresh:true}}
        >
            <StyledWrapper>
                <iframe src={window.location.href} width={375} height={550} sandbox={"allow-scripts allow-same-origin"} />
            </StyledWrapper>
        </MainModal>
    </>

}

const StyledWrapper = styled.div<{ className?: string }>`
`;


export default ThemeSelectorComponent