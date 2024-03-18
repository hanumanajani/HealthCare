import React from 'react';
import Navbar1 from './component/Navbar1';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Setprofile from './component/Setprofile';
import Showprofile from './component/Showprofile';
import UserSpace from './component/UserSpacedr';
import Newpaitentformdr from './component/Newpaitentformdr';
import Home from './component/Home';
import Article from './component/Article';
import { useGlobal } from './context/Global';
import './component/main.css';
import Historyofpaitent from './component/Historyofpaitent';
import TreatmentDetail from './component/TreatmentDetail';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

   
function App() {
  const useglobal =useGlobal();

  
  return (
    <div>
      <Navbar1/>
     {!useglobal.check1 && !useglobal.check2 && !useglobal.check3 && !useglobal.check4 && !useglobal.check5 && !useglobal.check6 && !useglobal.check7 && !useglobal.check8 && !useglobal.check9?<Home/>:null}
      {useglobal.check7?<Article/>:null}
      {useglobal.check8?<Historyofpaitent/>:null}
      {useglobal.check9?<TreatmentDetail/>:null}


      {useglobal.check5?<UserSpace />:null}
      {useglobal.check6?<Newpaitentformdr />:null}
      {useglobal.check1?<Showprofile name={useglobal.mainname} usrtype={useglobal.mainusrtype} />:null}
      {useglobal.check3?<Signup/>:null}
      {useglobal.check4?<Signin/>:null}
      {useglobal.check2?<Setprofile name={useglobal.mainname} usrtype={useglobal.mainusrtype}/>:null}

      {/* <Router>
        <Routes>
          <Route path="/new-patient-form/" element={<Newpaitentformdr />} />
          <Route path="/user-space/" element={<UserSpace />} />
          <Route path="/show-profile/" element={<Showprofile/>} />
          <Route path="/Signup/" element={<Signup/>} />
          <Route path="/signin/" element={<Signin/>} />
          <Route path="/setprofile/" element={<Setprofile/>} />          
        </Routes>
      </Router>  
        */}



    </div>
  );
}

export default App;
