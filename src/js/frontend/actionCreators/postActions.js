import axios from "axios";

const fetchRev = (category, title) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/${category}/${title}`).then(response=>{
            dispatch({type: "FETCH_REVIEWS", reviews: response.data.reviews});
        });
    }
}

const post = (reviewPayload) => {
    return (dispatch) => {
        const authStr = 'Bearer ' + localStorage.getItem('jwt');
        axios.post('http://localhost:5000/add-review', {
                headers: {Authorization: authStr}, 
                data: reviewPayload
            })
            .then(response=>{
                dispatch({type: response.data.auth}); //this dispatches to authreducer, not postreducer for the case where jwt token expired
            })
    }
}

const addTitle = (titlePayload) => {
    return (dispatch) => {
        const authStr = 'Bearer ' + localStorage.getItem('jwt');
        axios.post('http://localhost:5000/add-title', {
            headers: {Authorization: authStr},
            data: titlePayload
        })
        .then(response=>{
            dispatch({type:response.data.auth});
        })
    }
}

export {fetchRev, post, addTitle};