import React, {Component} from 'react';
import {connect} from 'react-redux';
class StarRating extends Component {
    constructor(props){
        super(props);
        this.state={
            rating: null,
            hover: null
        }
    }
    handleRating = (e) => {
        e.preventDefault();
        this.setState({
            ...this.state,
            rating: e.target.value
        })
        this.props.changeRating(e.target.value);
    }
    handleHoverEnter = (e, rating) => {
        this.setState({
            ...this.state,
            hover: rating
        })
    }
    handleHoverLeave = (e) => {
        this.setState({
            ...this.state,
            hover: null
        })
    }
    render(){
        let array = [1,2,3,4,5]
        const starArray = array.map((star, index) => {
            const rating = index + 1;
            return(
                <label key={index} className='star-rating'>
                    <input type='radio' name='rating' value={rating} onClick={e=>{this.handleRating(e)}}></input>
                    <i 
                        className='fas fa-star' 
                        style={{color: rating <= (this.state.hover || this.state.rating) ? ('#fcba03') : ('black')}} 
                        onMouseEnter={e=>{this.handleHoverEnter(e, rating)}} 
                        onMouseLeave={e=>{this.handleHoverLeave(e)}}
                    ></i>
                </label>
            )
        });
        return(
            <div>
                {starArray}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        changeRating: (ratingValue) =>{dispatch({type: 'CHANGE_RATING', rating: ratingValue})}
    })
}
export default connect(null,mapDispatchToProps)(StarRating);