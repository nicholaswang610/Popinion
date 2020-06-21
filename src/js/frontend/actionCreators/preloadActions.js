import axios from "axios";

const preload = (category) =>{
    return (dispatch)=>{
        axios.get('http://localhost:5000/' + category).then(response=>{
            dispatch({type:'PRELOAD', titles:response.data.titles});
        });
    }
}

export default preload;