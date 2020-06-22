import React, {Component} from 'react';
import timeSince from './TimeString.js';

class Post extends Component{
    state={
        active:false
    }
    
    toggleActive = () => {
        const currentState = this.state.active;
        this.setState({
            active: !currentState
        });
    }
    render(){
        const reviewTitle = this.props.review.review_title;
        const authorFirstName = this.props.review.author_first_name;
        const authorLastName = this.props.review.author_last_name;
        const review = this.props.review.review;
        const rating = this.props.review.review_rating;
        const timeSinceCreated = timeSince(parseInt(this.props.review.time_created));
        const array = [1,2,3,4,5];
        const starArray = array.map((star, index) => {
            return(
                <i className='fas fa-star' style={{color: (index+1) <= rating ? ('#fcba03') : ('black')}} key={index} ></i>
            ) 
        })
        return(
            <div className='collapsible' onClick={this.toggleActive}>
                <div className='preview my-3 px-3'>
                    <div>
                        <span className='review-tag'>REVIEW</span>
                        <span className='mx-2'>{starArray}</span>
                        <h3 className='review-title my-0'>{reviewTitle}</h3>
                        <div>{'by ' + authorFirstName + ' ' + authorLastName + ' ' + timeSinceCreated}</div>
                    </div>
                    <div className='content my-3 px-3'>
                        {this.state.active ? (review):(null)}
                    </div>
                </div>
            </div>
        );
    }
}
export default Post;