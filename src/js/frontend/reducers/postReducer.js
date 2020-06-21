const initState = {
    reviews: []
}

const postReducer = (state=initState, action) =>{
    switch(action.type){
        case "FETCH_REVIEWS": 
            return({
                ...state,
                reviews: action.reviews
            });
        default:  
            return state;
    }
}

export default postReducer;