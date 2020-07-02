import React from 'react';
import timeSince from './TimeString.js';
const RecentPost = (props) => {
        const array = [1,2,3,4,5];
        const starArray = array.map((star, index) => {
            return(
                <i className='fas fa-star' style={{color: (index+1) <= props.review.review_rating ? ('#fcba03') : ('black')}} key={index} ></i>
            ) 
        });
        console.log(typeof props.review.author_last_name);
        return(
            <div className='card recent-post'>
                <div style={{fontSize:'85%'}}>{timeSince(parseInt(props.review.time_created))}</div>
                <div style={{fontWeight:'600'}}>{props.review.author_first_name + ' ' + String(props.review.author_last_name)[0] + '.'}</div>
                <div style={{fontSize:'85%', color:'gray'}}>Wrote a review</div>
                <div style={{fontWeight:'500', fontSize:'125%', color:"#ff4f4f"}}>{props.review.title}</div>
                <div>{starArray}</div>
                <hr/>
                <div className={'recent-post-content'}>
                    <div>{props.review.review}</div>
                </div>
            </div>
        )
}

export default RecentPost;