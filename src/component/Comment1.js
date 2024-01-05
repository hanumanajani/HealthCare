import React from 'react';
import Comment from './Comment';
import { useState } from 'react';
import { useFirebase } from '../context/Firebase';
import PostComment from './PostComment';
function Comment1(props) {
    const [cnt, setcnt] = useState(0);
    const [snodata, setsnodata] = useState({});
    const [checkPost, setcheckPost] = useState(false);

    const firebase = useFirebase();
    const Seecomment = () => {
        firebase.readCommentFromId(props.id, setsnodata, snodata);
        firebase.readCommentcounterFromId(props.id, setcnt);
        setcheckPost(!checkPost)
    }
    const snolist = (snodata && Object.keys(snodata).length > 0) ? Object.keys(snodata).filter((key) => key.startsWith("")) : null;
    return (
        <div className='comments-section'>
            <div className='comments-list'>
                <div className='comment'>
                    <strong>{props.writer}::</strong>{props.data}

                </div>
                <button onClick={() => { Seecomment() }}>SeeComment</button>

                {(snolist !== null) ?
                    snolist.map(sno =>
                        <div>
                            <Comment writer={snodata[sno].user} data={snodata[sno].comment} id={props.id + sno + snodata[sno].user} />
                        </div>

                    )
                    : null
                }
            </div>
            {
                checkPost ? <PostComment id={props.id} cnt={cnt} /> : null
            }
        </div>
    )
}
export default Comment1;