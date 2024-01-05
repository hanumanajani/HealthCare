import React, { useState } from 'react';
import WriteArticle from './WriteArticle';
import ReadArticle from './ReadArticle';
import { useFirebase } from '../context/Firebase';
import { Button } from '@mui/material';



function Article() {
    const [checkwrite, setcheckwrite] = useState(false);
    const [checkread, setcheckread] = useState(false);

    const [Article, setArticle] = useState({});
    const firebase = useFirebase();

    function readarticle() {
        firebase.readArticle1(Article, setArticle);
        setcheckread(!checkread);
    }
    return (
        <div className='body2'>

            <div >
                <h3><strong>Article</strong></h3>

                <div>
                    <Button component="label" variant="contained" onClick={() => { setcheckwrite(!checkwrite) }} >Write Article</Button> <hr/>
                    <Button component="label" variant="contained" onClick={() => { readarticle() }} >Show  Article</Button>
                    {/* <input className='rectangle1' placeholder='Search Article' /> */}
                    {/* <button className='button1'>search</button><br /> */}
                </div>
            </div>

            {checkwrite ? <WriteArticle /> : null}
            {checkread ? <ReadArticle Article={Article} /> : null}

        </div>

    );
}
export default Article;