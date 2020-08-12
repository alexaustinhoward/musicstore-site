import React,{ Component} from 'react';
import './Landing.style.scss';
import NavBar from '../../compontent/navbar/navbar.component';
import SideBar from '../../compontent/Sidebar/sidebar.component';
import FeatureBar from '../../compontent/featurebar/featurebar.component';
import Promo from '../../compontent/promosection/promo.component';
import SectionArea from '../../compontent/sectionarea/sectionarea.component'
import { render } from '@testing-library/react';
import MobileMenuItems from '../../compontent/mobilemenuitems/mobilemenuitems.component';

class LandingPage extends Component{
    
    constructor(){
        super();
        this.state={
            newdata:[],
            featuredata:[]
        };
    }

componentDidMount(){
    fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&limit=12&OUR_API_KEY&format=json')      
    .then(response1=> response1.json())
      .then(response1=> 
        this.setState({ newdata: response1.albums.album }));
}
render() {
    return(
    <div className='LandingPage'>
        <NavBar/>
        <MobileMenuItems/>
        <div className='body'>
            <SideBar className='sidearea'/>
            <div className='featurewrapper'>
            <Promo/>
            <SectionArea title='New and Trending'
                sectionareadata={this.state.newdata.map((data) => (
                    <FeatureBar  albumname={data.name} key={data.mbid+data.name} artistname={data.artist.name} imageurl={data.image[2]['#text']}/>
                 ))} />
     
           

        </div>
    </div>
</div>
);
 }
 
}
export default LandingPage;
