import React, {useState} from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {Fab} from "@mui/material";
import MobileViewComponent from "@/builder/src/components/Forms/Modal/MobileView.component";

const MobileViewMenuComponent:React.FC = () => {

    const [displayModal, setDisplayModal] = useState<number>(0);
    return <>
        <Fab color="primary" variant="extended" onClick={() => setDisplayModal((value) => value+1  )}>
            <PhoneAndroidIcon sx={{mr:1}} />
            <span>Mobile mod</span>
        </Fab>
        {
            displayModal>0 && <MobileViewComponent key={displayModal} />
        }
    </>
}

export default MobileViewMenuComponent