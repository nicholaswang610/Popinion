import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRev} from '../../../actionCreators/postActions';

class GamingPosts extends Component{
    componentDidMount(){
        this.props.fetchReviews(this.props.match.params.title);
    }
    render(){
        const list = this.props.reviews.map(review=>{
            return(<div key={review.id}>{review.review}</div>);
        });
        return (<div>{list}</div>);
    }
}

const mapStateToProps = (state) => {
    return({
        reviews: state.posts.reviews
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        fetchReviews: (title) => {dispatch(fetchRev(title))}
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GamingPosts);