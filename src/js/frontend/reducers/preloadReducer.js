const initState = {
    titles: []
}

const preloadReducer = (state=initState, action) =>{
    switch(action.type){
        case 'PRELOAD':
            return({
                ...state,
                titles: action.titles
            })
        default:
            return state;
    }
}

export default preloadReducer;