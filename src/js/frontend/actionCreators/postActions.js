import axios from "axios";

const fetchRev = (title) => {
    return (dispatch) => {
        axios.get(`http://localhost:5000/gaming/${title}`).then(response=>{
            dispatch({type: "FETCH_GAMING_REVIEWS", reviews: response.data.reviews});
        });
    }
}

export {fetchRev};