import React, {Component} from 'react';
import {connect} from 'react-redux';
import {preloadGames} from '../../actionCreators/preloadActions.js';
import NavbarHome from '../NavbarHome.js';
import {NavLink} from 'react-router-dom';
class Gaming extends Component
{
    state={
        search: ''
    }
    componentDidMount(){
        this.props.preload();
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        });
    }

    render(){
        const filteredList = this.props.titles.filter(title=>{
            return title.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        const gameList = filteredList.map(title=>{
            return(
                <NavLink to={'/gaming/'+title.title} key={title.id}>
                    <div className='game-title card mx-4 my-4 text-center w-300'>{title.title}</div>
                </NavLink>
            );
        });

        return(
            <div className='game-body'>
                <div className='game-banner'>
                    <NavbarHome className='game-navbar'/>
                </div>
                <div className='path-container'>
                    <span className='path-to-gaming'>
                        <NavLink to="/" style={{display:"inline-block", marginRight:"1em"}}><h4>Home</h4></NavLink>
                        <h4 style={{display:'inline-block'}}>></h4> 
                        <NavLink to='/gaming' style={{display:"inline-block", marginLeft:'1em'}}><h4>Gaming</h4></NavLink>
                        </span>
                </div>
                <div className='game-input'><input className='search-game mt-4' type='text' placeholder='Search a title...' onChange={e=>{this.handleChange(e)}}></input></div>
                <div className='game-wrapper'>
                    <NavLink to='/gaming/add-game'>
                        <div className='game-title card mx-4 my-4 text-center w-300 add-game'>Add a game</div>
                    </NavLink>
                    {gameList}
                </div>
                Icons made by <a href="https://www.flaticon.com/free-icon/add_992651" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return({
        titles: state.preload.titles
    });
}

const mapDispatchToProps = (dispatch) => {
    return({
        preload: ()=>{dispatch(preloadGames())}
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Gaming);