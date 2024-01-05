import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import Seetreatment from './Seetreatment';

function TreatmentDetail(){
    const [date,setdate]=useState({})
    const [pname,setpname]=useState('')
    const [check,setcheck]=useState(false)
    const firebase =useFirebase();
    const Next=()=>{
       setcheck(!check)
    }
    
    return (
        <div className='body1'>
        <input className='rectangle2' onChange={(e)=>{setpname(e.target.value)}} placeholder='Enter paitent username'/>
        <input className='rectangle2' onChange={(e)=>{setdate(e.target.value)}} placeholder='DDMMYYYY'/>

        <button className='button1' onClick={()=>{Next()}}>Next</button>          
        <div>
          {check?<Seetreatment paitent={pname} date={date}/>:null}
        </div>
        </div>

    );

}
export default TreatmentDetail;