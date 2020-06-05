import axios from "axios";

const preloadGames = () =>{
    return (dispatch)=>{
        axios.get('http://localhost:5000/gaming').then(response=>{
            dispatch({type:'PRELOAD_GAMES', titles:response.data.titles});
        });
    }
}

export {preloadGames};