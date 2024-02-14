import React, { useState } from 'react';
import Medicine from './Madicine';
import { useFirebase } from '../context/Firebase';
import Seetreatment from './Seetreatment';


function Newpaitentformdr() {
  const [date, setdate] = useState('DDMMYYYY');
  const [paitent, setpaitent] = useState('');
  const [discp, setdiscp] = useState('');
  const [Addtreat, setAddtreat] = useState(false);

  const firebase = useFirebase();
  function Addtreatment() {
    firebase.paitenttreatment(paitent, date, discp);
    setAddtreat(true)

  }




  return <div className='body2'>
    <div className='Box1'>
      {/* <img className='image2' src="https://cdn.pixabay.com/photo/2014/04/02/14/12/stethoscope-306476_960_720.png" /> */}
      <div className='body1'>
        <h3>paitent Form</h3>
        <h3 className='rectangle3'>User Name</h3>
        <input className='rectangle1' onChange={(e) => { setpaitent(e.target.value) }} placeholder='Enter the Paitent username' />
        <h3 className='rectangle3'>Date(DDMMYY)</h3>
        <input className='rectangle1' onChange={(e) => { setdate(e.target.value) }} placeholder='Enter the Date' /><br />
        <h3 className='rectangle3'>Discription</h3>
        <input className='article1' onChange={(e) => { setdiscp(e.target.value) }} placeholder='Enter Discription of Diseases' /><br />
        <button className='button1' onClick={() => { Addtreatment() }}>Add Treatment</button><br />


      </div>
    </div>
    <div className='bodyq'>
      {/* <h3>Medicine</h3> */}

      {/* apply map condition for show all lines of madicine  */}
      {Addtreat ? <Medicine paitentname={paitent} date={date} /> : null}
    </div>
    <div>

      {Addtreat ? <Seetreatment paitent={paitent} date={date} /> : null}
    </div>

  </div>

}
export default Newpaitentformdr;