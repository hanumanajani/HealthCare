import React from 'react';

import './main.css';
import { useState } from 'react';
// import { FirebaseApp } from 'firebase/app';
import { useFirebase } from '../context/Firebase';


function Showprofile(props){
    const [name,setname]=useState('xyz');
    const [email ,setemail]=useState('abc****@gmail.com');
    const [mobileno ,setmobileno]=useState('912**********1')
    const [usrtype,setusrtype]=useState('paitent/doctor');
    const [imgurl,setimgurl]=useState('https://tse1.mm.bing.net/th?id=OIP.thVfylZ6LBmYuAQS1UG0LgHaEK&pid=Api&P=0&h=180')
    
    const firebase =useFirebase();
    const showusrprofile=()=>{
        
        firebase.readuserprofile1(props.name,setemail,setmobileno,setimgurl,props.usrtype);
        setname(props.name)
        setusrtype(props.usrtype)
         
        
        alert("success")
    }
     
    return (
         
     <div className='body2'>
        <button className='button1' onClick={()=>{showusrprofile()}}>show profile</button>
        <div className='rectangle'><h1>User type:{usrtype}</h1></div>
        <div className='body1'><img src={imgurl}/></div>
        <div className='rectangle'><h3>Name:{name}</h3></div>
        <div className='rectangle'><h3>Email:{email}</h3></div>
        <div className='rectangle'><h3>Mobile No :{mobileno}</h3></div> 
     
     </div>
          
    );
}
export default Showprofile;