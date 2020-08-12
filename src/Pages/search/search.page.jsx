import FeatureBar from '../../compontent/featurebar/featurebar.component';
import SectionArea from '../../compontent/sectionarea/sectionarea.component';
import TrackList from '../../compontent/tracklist/trackslist.component';
import TrackArea from '../../compontent/Tracksection/Tracksection.component';
import React,{ Component} from 'react';
import NavBar from '../../compontent/navbar/navbar.component';
import SideBar from '../../compontent/Sidebar/sidebar.component';
import './search.style.scss';
import MobileMenuItems from '../../compontent/mobilemenuitems/mobilemenuitems.component';

class SearchPage extends Component{
    
    constructor(){
        super();
        this.trackTabClick = this.trackTabClick.bind(this);
        this.albumsTabClick = this.albumsTabClick.bind(this);
        this.state={
            albumsdata:[],
            tracks:[], 
            isTrackActive:false  
        };
    }
    trackTabClick() {
        this.setState({isTrackActive: true});
      }
      albumsTabClick() {
        this.setState({isTrackActive: false});
      }
    componentDidMount(){
        let response2url= 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+this.props.match.params.searchitem+'&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&format=json'
        let response3url= 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+this.props.match.params.searchitem+'&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&limit=500&&format=json'
        fetch(response2url)
          .then(response1=> response1.json())
            .then(response1=> 
            this.setState({ albumsdata: response1.topalbums.album}))
                .then(response3=>
                        fetch(response3url))
                    .then(response2=> response2.json())
                    .then(response2=>
                        this.setState({
                            tracks: response2.toptracks.track
                        }))
                    ;
    
    }
    render() {
        const isTrackActive= this.state.isTrackActive;
        return(
        <div className='SearchPage'>
            <NavBar/>
            <MobileMenuItems/>
            <div className='body'>
                <SideBar className='sidearea'/>
                <div className='featurewrapper'>
                
                <div className='tabs'>
                    <div className='albumstab'onClick={this.albumsTabClick}
                     style={  isTrackActive ? 
                        {borderBottom: '0.0em solid rgba(139, 197, 214,0.5)'}
                         : {borderBottom: '0.25em solid rgba(139, 197, 214,0.5)'}  
                         }
                    >Albums</div>
                     <div className='trackstab' onClick={this.trackTabClick} 
                        style={  isTrackActive ? 
                        {borderBottom: '0.25em solid rgba(139, 197, 214,0.5)'}
                         : {borderBottom: '0.0em solid rgba(139, 197, 214,0.5)'}  
                         }>Tracks</div>
                     
                </div>
                <div className='trackwrapper' style={ { display: isTrackActive ? 'block' : 'none' } }>
                <TrackArea 
                    trackareadata={this.state.tracks.map((musicdata) => (
                        <TrackList title={musicdata.name} key={musicdata['@attr'].rank+musicdata.name} Price='0.99' artistnames={musicdata.artist.name}/>
                        
                    ))} />
                    </div>
                    <div className='albumwrapper'  style={ { display: isTrackActive ? 'none'  : 'block' } }>
                <SectionArea 
                    sectionareadata={this.state.albumsdata.map((data) => (
                        <FeatureBar  albumname={data.name} key={data.playcount+data.name} artistname={data.artist.name} imageurl={data.image[2]['#text']}/>
                     ))} />
                </div>
               
    
            </div>
        </div>
    </div>
    );
     }
}
export default SearchPage;
