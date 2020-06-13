import axios from "axios";

const fetchRev = (title) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/gaming/${title}`).then(response=>{
            dispatch({type: "FETCH_GAMING_REVIEWS", reviews: response.data.reviews});
        });
    }
}

const post = (reviewPayload) => {
    const authStr = 'Bearer ' + localStorage.getItem('jwt');
    return (dispatch) => {
        axios.post('http://localhost:5000/add-review', {
                headers: {Authorization: authStr}, 
                data: reviewPayload
            })
            .then(response=>{
                dispatch({type: response.data.auth}) //this dispatches to authreducer, not postreducer for the case where jwt token expired
            })
    }
}

export {fetchRev, post};