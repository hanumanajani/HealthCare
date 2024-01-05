import React from 'react';
import './main.css';
import { useState } from 'react';
// import img1 from './Images/img.png';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



import { useFirebase } from '../context/Firebase';
function Setprofile(props) {
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [mobileno, setmobileno] = useState('');
    const [usrtype, setusrtype] = useState('');
    const [imgurl, setimgurl] = useState('');
    // const [ant,setant]=useState('false');
    const firebase = useFirebase();
    const profileupdate = () => {
        if (name === props.name && usrtype === props.usrtype) {
            firebase.setuserprofile(name, email, imgurl, mobileno, usrtype);
            alert("profile updated");
        }
        else alert("enter correct username and type or Sign in first");
        // firebase.setuserprofile(name, email, imgurl, mobileno, usrtype);

    }

    return (
        <div className='body2'>

            <div className='body1'>
                <h2>Edit Profile</h2><br/>

                <TextField id="filled-basic" label="Email" variant="filled" type='email' onChange={(e) => { setemail(e.target.value) }} /><br />
                <TextField id="filled-basic" label="User Name" variant="filled" onChange={(e) => { setname(e.target.value) }} /><br />
                <TextField id="filled-basic" label="mobile no" variant="filled" type='number' onChange={(e) => { setmobileno(e.target.value) }} /><br />
                <TextField id="filled-basic" label="Img URL" variant="filled" onChange={(e) => { setimgurl(e.target.value) }} /><br />
                <br />

                <Box sx={{ minWidth: 100 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">user type </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value='paitent'
                            label="user type"
                            onChange={(e) => { setusrtype(e.target.value) }}
                        >

                            <MenuItem value='paitent'>paitent</MenuItem>
                            <MenuItem value='doctor'>Doctor</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <br />
                <Button component="label" variant="contained" onClick={() => { profileupdate() }}>submit</Button><br />



            </div>

        </div>



    );
}
export default Setprofile;