const initState = {
    reviews: []
}

const postReducer = (state=initState, action) =>{
    switch(action.type){
        case "FETCH_GAMING_REVIEWS": 
            return({
                ...state,
                reviews: action.reviews
            });
        default:  
            return state;
    }
}

export default postReducer;