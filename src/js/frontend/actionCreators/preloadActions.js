import axios from "axios";

const preload = (category) =>{
    return (dispatch)=>{
        axios.get('http://localhost:5000/' + category).then(response=>{
            dispatch({type:'PRELOAD', titles:response.data.titles});
        });
    }
}

const preloadRecentReviews = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/recent-reviews').then(response=>{
            console.log(response.data);
            dispatch({type: 'PRELOAD_RECENT_REVIEWS', titles: response.data})
        });
    }
}

export {preload as default, preloadRecentReviews};