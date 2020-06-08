import React, {Component} from 'react';

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
        const authorFirstName = this.props.review.author_first_name;
        const authorLastName = this.props.review.author_last_name;
        const review = this.props.review.review;
        return(
            <div className='collapsible' onClick={this.toggleActive}>
                <div className='preview my-3 px-3'>
                    <div>
                        <span className='review-tag'>REVIEW</span>
                        <h3 className='my-0'>Lorem ispsum moredit</h3>
                        <div>{'by ' + authorFirstName + ' ' + authorLastName}</div>
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