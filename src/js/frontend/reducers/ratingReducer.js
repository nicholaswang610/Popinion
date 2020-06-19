const initState = {
    rating: null
}

const ratingReducer = (state=initState, action) =>{
    switch(action.type){
        case "CHANGE_RATING": 
            console.log(action);
            return({
                ...state,
                rating: action.rating
            });
        default:  
            return state;
    }
}

export default ratingReducer;