import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import Seetreatment from './Seetreatment';

function Historyofpaitent(){
    const [histry,sethistry]=useState({})
    const [pname,setpname]=useState('')
    // const [check,setcheck]=useState(false)
    const firebase =useFirebase();
    function Next(){
        firebase.readpaitenthistory(pname,sethistry);
    }
    const datelist=Object.keys(histry).filter((key)=>key.startsWith(""));
    
    return (
        <div className='body1'>
        <input className='rectangle2' onChange={(e)=>{setpname(e.target.value)}} placeholder='Enter paitent username'/>
        <button className='button1' onClick={()=>{Next()}}>Next</button>          
        <div>
          {
            datelist.map(date=><div>
            <div className='button1'>{date}</div>
            <Seetreatment paitent={pname} date={date}/>
            </div>)
          }
        </div>
        </div>

    );

}
export default Historyofpaitent;