import React, {Component} from 'react';
import NavbarHome from './NavbarHome.js';

class Home extends Component{
    render(){
        return(
            <div className="banner">
                <NavbarHome cookies={this.props.cookies}/>
            </div>
            
        );
    }
}
export default Home;