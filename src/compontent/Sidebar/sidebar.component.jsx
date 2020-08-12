import React, { Component } from 'react';
import './sidebar.style.scss';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router';
class Sidebar extends Component{
    constructor(){
        super();
    this.handleChange= this.handleChange.bind(this)
    this.HandleSubmit= this.HandleSubmit.bind(this)
    this.state ={
        searchbarinfo:'' ,
        redirectstate:false  
    };
    }
handleChange(event){
const {value,name}= event.target;
this.setState({[name]:value})
}
HandleSubmit(event) {
    if (event.key === "Enter") {

        this.setState({ redirectstate:true})
        console.log(this.state.redirectstate)
    }
}

render(){
     const{searchbarinfo,redirectstate}=this.state;
     if(redirectstate)
    {

    return (<Redirect to={'/s/'+ this.state.searchbarinfo.toString().replace(" ","+")} />
    )
    
}   
    return(
        
    <div className='sidebar'>
       

        <input className='searchbar' type="text" name="searchbarinfo" value={searchbarinfo} onChange={this.handleChange} onKeyPress={this.HandleSubmit}/>
        <div className='topmusic'>
            <div className='title'>
            Genre
            </div>
         <ul className='genre'>
            <li className='genreitem'>Rock</li>
            <li className='genreitem'>Pop</li>
            <li className='genreitem'>Hip Hop</li>
            <li className='genreitem'>Countries</li>
            <li className='genreitem'>Electronic</li>
            <li className='genreitem'>All</li>
         </ul>

     </div>
    </div>
)}
};
export default  withRouter(Sidebar);