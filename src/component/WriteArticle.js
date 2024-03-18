import React from 'react';
import './main.css';
import { useState } from 'react';
import { useGlobal } from '../context/Global';
import { useFirebase } from '../context/Firebase';

function WriteArticle() {
    const useglobal = useGlobal()
    const firebase = useFirebase();
    const [topic, settopic] = useState('');
    const [article, setarticle] = useState(''); 
    const [imgurl, setimgurl] = useState('');
    
    function submitarticle(){
        if (useglobal.mainname !== 'hanuman123' && useglobal.mainusrtype === 'doctor') {
            firebase.writearticle(useglobal.mainname, topic, article, imgurl,0)
            firebase.updateCounterForId1(topic+useglobal.mainname,-1);
            alert("article submitted")
        }
        else{
            alert("please Sign in as a Doctor")
        }

    }
    return (
        <div className='body1'>
            <h3 className='rectangle3'>Article</h3>
            <input className='rectangle1' onChange={(e) => { settopic(e.target.value) }} placeholder='Topic of Article ' /><br />
            <input className='rectangle1' onChange={(e) => { setimgurl(e.target.value) }} placeholder='Image url related to article' /><br />
            <input className='article2' onChange={(e) => { setarticle(e.target.value) }} placeholder='Article' /><br />
            <button onClick={() => { submitarticle() }} className='rectangle3'>Submit-Article</button>
        </div>

    );

}
export default WriteArticle;