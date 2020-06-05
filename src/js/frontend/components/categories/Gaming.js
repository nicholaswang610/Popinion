import React, {Component} from 'react';
import {connect} from 'react-redux';
import {preloadGames} from '../../actionCreators/preloadActions.js';
class Gaming extends Component
{
    componentDidMount(){
        this.props.preload();
    }
    render(){
        const gameList = this.props.titles.map(title=>{
            return(
                <div className='game-title card mx-4 my-4 text-center w-300'>{title.title}</div>
            );
        });

        return(
            <div className='game-wrapper'>
                {gameList}
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return({
        titles: state.preload.titles
    })
}
const mapDispatchToProps = (dispatch) => {
    return({
        preload: ()=>{dispatch(preloadGames())}
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Gaming);