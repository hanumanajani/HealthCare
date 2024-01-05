import React from 'react';
import './main.css';

import { useGlobal } from '../context/Global';
import { Button } from '@mui/material';


function UserSpace() {

    const useglobal = useGlobal();
    const paitentformdr = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(!useglobal.check6)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)



    }
    const HistoryofP = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(!useglobal.check8)
        useglobal.setcheck9(false)
    }
    const treatment = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(!useglobal.check9)
    }

    return (
        <div className='body2'>
       
            <div className='body1'>
                <h3><strong>UserSpace</strong></h3>
                <br/>
                <Button component="label" variant="contained" onClick={() => { treatment() }}>treatment Details</Button><hr/>
                <Button component="label" variant="contained" onClick={() => { HistoryofP() }}>History of paitent</Button><hr/>
                <Button component="label" variant="contained" onClick={() => { paitentformdr() }}>New paitent form</Button><br />
            </div>
            
        </div>
        

    );

}
export default UserSpace;