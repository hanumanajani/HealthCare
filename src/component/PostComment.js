import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import { useGlobal } from '../context/Global';
function  PostComment(props){
    const [cmnt,setcmnt]=useState('')
    const firebase =useFirebase();
    const useglobal =useGlobal();
    const post=()=>{
        if(useglobal.mainname==='hanuman123'){
            alert("Sign in first")
        }
        else{
            firebase.WriteCommentForId1(useglobal.mainname,cmnt,props.cnt+1,props.id)
            alert("posted")
        }
    }
    return (
        <div className='replies-list'>
            <input  onChange={(e)=>{setcmnt(e.target.value)}} className='rectangle1' placeholder='write comment'/><button onClick={()=>{post()}} className='rectangle1'>Post</button>
        </div>
    )
}
export default PostComment;