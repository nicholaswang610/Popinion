const initState = {
    titles: []
}

const preloadReducer = (state=initState, action) =>{
    switch(action.type){
        case 'PRELOAD_GAMES':
            return({
                ...state,
                titles: action.titles
            })
        default:
            return state;
    }
    return state;
}

export default preloadReducer;