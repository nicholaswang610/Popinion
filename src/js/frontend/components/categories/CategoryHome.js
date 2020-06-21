import React, {Component} from 'react';
import {connect} from 'react-redux';
import preload from '../../actionCreators/preloadActions.js';
import NavbarHome from '../NavbarHome.js';
import {NavLink} from 'react-router-dom';

class CategoryHome extends Component
{
    state={
        category: '',
        search: ''
    }
    componentDidMount(){
        const category = this.props.match.url.split('/')[1];
        this.setState({
            ...this.state,
            category: category
        })
        this.props.preload(category);
    }

    handleChange = (e) =>{
        this.setState({
            search: e.target.value
        });
    }

    render(){
        const filteredList = this.props.titles.filter((title)=>{
            return title.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });

        const titleList = filteredList.map((title, i)=>{
            return(
                <NavLink to={`/${this.state.category}/`+title.title} key={i}>
                    <div className='title card mx-4 my-4'>
                        <img className='img-fluid rounded' src={require(`../../../../style/${title.title}.jpg`)} alt={title.title}></img>
                    </div>
                </NavLink>
            );
        });

        return(
            <div>
                <div className={`${this.state.category}-banner`}>
                    <NavbarHome/>
                </div>
                <div className='path-container'>
                    <span className='path'>
                        <NavLink to="/" style={{display:"inline-block", marginRight:"1em"}}><h4>Home</h4></NavLink>
                        <h4 style={{display:'inline-block'}}>></h4> 
                        <NavLink to={`/${this.state.category}`} style={{display:"inline-block", marginLeft:'1em'}}><h4>{this.state.category.replace(this.state.category.charAt(0), this.state.category.charAt(0).toUpperCase())}</h4></NavLink>
                        </span>
                </div>
                <div className='input-container'>
                    <input className='search-title mt-4' type='text' placeholder='Search a title...' onChange={e=>{this.handleChange(e)}}></input>
                    <i className="fas fa-search" type='submit'></i>
                </div>
                <div className='title-container'>
                    <NavLink to= {`/${this.state.category}/add-title`}>
                        <div className='title card mx-4 my-4 text-center w-300 add-title'>Add a title</div>
                    </NavLink>
                    {titleList}
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
        preload: (category)=>{dispatch(preload(category))}
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryHome);