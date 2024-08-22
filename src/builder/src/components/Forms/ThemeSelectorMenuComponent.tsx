import React, {useState} from 'react'
import {Fab} from "@mui/material";
import ThemeSelectorComponent from "@/builder/src/components/Forms/Modal/ThemeSelector.component";
import CreditScoreIcon from '@mui/icons-material/CreditScore';


const ThemeSelectorMenuComponent:React.FC = () => {
    const [displayModal, setDisplayModal] = useState<number>(0);
    return <>
        <Fab color="primary" variant="extended" onClick={() => setDisplayModal((value) => value+1  )}>
            <CreditScoreIcon sx={{mr:1}} />
            <span>Change Theme</span>
        </Fab>
        {
            displayModal>0 && <ThemeSelectorComponent key={displayModal} />
        }
    </>
}

export default ThemeSelectorMenuComponent