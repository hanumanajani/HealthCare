import React from 'react';
import './main.css';
import { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import { useGlobal } from '../context/Global';

import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Signup() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [usrtype, setusrtype] = useState('');
  const [check, setcheck] = useState(false);

  const firebase = useFirebase();
  const useglobal = useGlobal();

  const signupbtn = async () => {
    firebase.signupuser(email, password, check, setcheck)

    firebase.setuserprofile(name, email, 'https://tse2.mm.bing.net/th?id=OIP.5QfutwM5OmETPnqcFpInGwHaEK&pid=Api&P=0&h=180', '', usrtype);
    alert('signup success');
    useglobal.setmainname(name)
    useglobal.setmainusrtype(usrtype)


  }
  return (<div className='body2'>
    <div className='body1'>
      <h2>Sign Up</h2>
      <TextField id="filled-basic" label="User Name" variant="filled"  onChange={(e) => { setname(e.target.value) }} placeholder='Enter your username' /><br />
      <TextField id="filled-basic" label="Email" variant="filled" type='email' onChange={(e) => { setemail(e.target.value) }} placeholder='Enter the Email Id' /><br />
      <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => { setpassword(e.target.value) }} placeholder='Enter the password ' /><br />
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
      <Button component="label" variant="contained"  onClick={() => { signupbtn() }}>Sign up</Button>
    </div><br />



  </div>);
}
export default Signup;