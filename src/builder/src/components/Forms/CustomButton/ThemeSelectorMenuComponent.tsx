import React, {useState} from 'react'
import {Fab} from "@mui/material";
import ThemeSelectorComponent from "@/builder/src/components/Forms/Modal/ThemeSelector.component";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import useIsMobile from "@/Hooks/useIsMobile.hook";

const fabStyle= {
    padding: {
        xs: 0,
        md: 2
    }
}

const ThemeSelectorMenuComponent:React.FC = () => {
    const [displayModal, setDisplayModal] = useState<number>(0);
    const isMobile = useIsMobile();
    return <>
        <Fab sx={fabStyle} color="primary" variant="extended" onClick={() => setDisplayModal((value) => value+1  )}>
            <CreditScoreIcon />
            {!isMobile && <span style={{marginLeft:'5px'}}>Change Theme</span> }
        </Fab>
        {
            displayModal>0 && <ThemeSelectorComponent key={displayModal} />
        }
    </>
}

export default ThemeSelectorMenuComponent