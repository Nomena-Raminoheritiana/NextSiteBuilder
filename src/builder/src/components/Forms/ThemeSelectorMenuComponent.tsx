import React, {useState} from 'react'
import {Fab} from "@mui/material";
import ThemeSelectorComponent from "@/builder/src/components/Forms/Modal/ThemeSelector.component";

const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16
};

const ThemeSelectorMenuComponent:React.FC = () => {
    const [displayModal, setDisplayModal] = useState<number>(0);
    return <>
        <Fab sx={fabStyle} color="primary" variant="extended" onClick={() => setDisplayModal((value) => value+1  )}>
            Change Theme
        </Fab>
        {
            displayModal>0 && <ThemeSelectorComponent key={displayModal} />
        }
    </>
}

export default ThemeSelectorMenuComponent