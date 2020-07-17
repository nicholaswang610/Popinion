import React, {Component} from 'react';
import NavbarHome from './NavbarHome.js';
import Footer from './Footer.js';
import {Redirect} from 'react-router-dom';

class About extends Component
{
    state={
        cancel:false
    }
    redirect = e =>{
        this.setState({
            cancel:true
        });
    }
    render(){
        if(this.state.cancel)
        {
            return <Redirect to='/feedback'/>
        }
        else
        {
            return(
                <div className='about-body'>
                    <div className='about-banner'>
                        <NavbarHome/>
                        <div className='about-us-img'></div>
                    </div>
                    <div style={{marginBottom:"3em"}}>
                        <div><h2 style={{marginLeft:"20%", marginTop:"2em", marginBottom:"1em", color:"red"}}>Our Mission</h2></div>
                        <div style={{marginLeft:"20%", marginRight:"20%", marginBottom:"3em", fontWeight:"600"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
                        <hr style={{marginLeft:"15%", marginRight:"15%"}}></hr>
                    </div>
                    <div>
                        <div><h2 style={{marginLeft:"20%", marginTop:"2em", marginBottom:"1em", color:"red"}}>Corporate Headquarters</h2></div>
                        <div style={{marginLeft:"20%", marginRight:"20%", display:"flex", flexDirection:"row", fontWeight:"600"}}>
                            <div>welp.com is headquartered in London, UK - a flagship city of innovation. <br/><br/> 12 Grimmauld Place <br/> London, United Kingdom <br/><br/>(562)123-4567
                                <div style={{marginTop:"4em"}}><button className='btn btn-outline-dark' onClick={e=>{this.redirect(e)}}>CONTACT US</button></div>
                            </div>
                            <div className='grimmauld'></div>
                        </div>
                        <hr style={{marginLeft:"15%", marginRight:"15%"}}></hr>
                    </div>
                    <Footer/>
                </div>
            );
        }
        
    }
}

export default About;