import React, { useState } from 'react';
// import Article from './Article';
import ReadArticle2 from './ReadArticle2';

// const [data,setdata]=useState();

function ReadArticle(props) {
    const topiclist = Object.keys(props.Article).filter((key) => key.startsWith(""));
    return (
        <div>
            {
                topiclist.map(topic =>
                    <div className='body'>
                        <h2 className='rectangle3'>{topic}</h2>
                        <ReadArticle2 topic={topic} Article={props.Article[topic]}/>
                        
                    </div>
                )
            } 
 

        </div>
    )
}
export default ReadArticle;