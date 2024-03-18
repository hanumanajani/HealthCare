import React from 'react';
import { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import './main.css';
import { useGlobal } from '../context/Global';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Signin(){ 
    const [email , setemail]=useState('');
    const [name , setname]=useState('');
    const [password,setpassword]=useState('');
    const [usrtype,setusrtype]=useState('');
    const [mobileno, setmobileno] = useState('');
    const [imgurl, setimgurl] = useState('');
    const [check,setcheck]=useState(false);
    

    const firebase =useFirebase();
    const useglobal =useGlobal();
    
    const signinbtn=()=>{
       firebase.signinuser(email,password,check,setcheck)
    
        firebase.readuserprofile1(name,setmobileno,setimgurl,usrtype)
        alert("sign in success")
     
        useglobal.setmainname(name)     
        useglobal.setmainusrtype(usrtype)
        // fixing warning
        setmobileno(mobileno)
        setimgurl(imgurl)
        
    }
   

    return (<div className='body2'>
    <div className='body1'>
        <h2>Sign in</h2>
       <TextField id="filled-basic" label="User Name" variant="filled"  onChange={(e)=>{setname(e.target.value)}} placeholder='Enter your username'/><br/>

        <TextField id="filled-basic" label="Email" variant="filled" type='email' onChange={(e)=>{setemail(e.target.value)}} placeholder='Enter your Email id'/><br/>
       
        <TextField id="filled-basic" label="Password" variant="filled" type='password' onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter your Password'/><br/>
        {/* <select onChange={(e)=>{setusrtype(e.target.value)}} className='rectangle3'>
              <option value='paitent'>user type</option>
              <option value='paitent'>paitent</option>
              <option value='doctor'>doctor</option>
            </select> */}
            <br/>
            <Box sx={{ minWidth: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">user type </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value='paitent'
          label="user type"
          onChange={(e)=>{setusrtype(e.target.value)}}
        >
           
          <MenuItem value='paitent'>paitent</MenuItem>
          <MenuItem value='doctor'>Doctor</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br/>
        <Button component="label" variant="contained" onClick={()=>{signinbtn()}}>Sign in</Button>
        
    </div>

    </div>);
}
export default Signin;