import React from 'react'
import Comment from './Comment';
function ReadArticle2(props) {
    const writerlist = Object.keys(props.Article).filter((key) => key.startsWith(""));
    return (
        <div>
            {
                writerlist.map(writer =>
                    <div>
                        <button className='rectangle2'><strong>Writer  </strong>: {writer}</button>
                        <img className='img3' src={props.Article[writer].imgurl} alt="post"/>
                        <p className='article3'>{props.Article[writer].article}</p>
                        <Comment id={props.topic+writer} data="Comments.........................." writer = ""/>
                    </div>
                )
            }
 

        </div>
    )
}
export default ReadArticle2;