import React,{ Component} from 'react';
import './albuminfo.style.scss';
import NavBar from '../../compontent/navbar/navbar.component';
import TrackList from '../../compontent/tracklist/trackslist.component';
import TrackArea from '../../compontent/Tracksection/Tracksection.component';
import FeatureBar from '../../compontent/featurebar/featurebar.component';
import SectionArea from '../../compontent/sectionarea/sectionarea.component';
import MobileMenuItems from '../../compontent/mobilemenuitems/mobilemenuitems.component';
class AlbumInfoPage extends Component{
    
    constructor(){
        super();
        this.state={
            albumname:[],
            artistname:[],
            image:[],
            tracks:[], 
        };
    }
    componentDidMount(){
        let response1url='https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&artist='+this.props.match.params.name+'&album='+this.props.match.params.album+'&format=json'
        fetch(response1url)
          .then(response1=> response1.json())
            .then(response1=> 
            this.setState({ 
                albumname: response1.album.name,
                artistname: response1.album.artist,
                image: response1.album.image[2]['#text'],
                tracks:response1.album.tracks.track
            }))
                    ;
    
    }
    render() {
        return(
        <div className='AlbumInfoPage'>
            <NavBar/>
            <MobileMenuItems/>
            <div className='body'>
                
             
                <div className='trackwrapper'>
                <TrackArea 
                    trackareadata={this.state.tracks.map((musicdata) => (
                        <TrackList title={musicdata.name} key={musicdata.artist.name+musicdata['@attr'].rank+musicdata.name} Price='0.99' artistnames={musicdata.artist.name}/>
                        
                    ))} />
                    </div>
                    <div className='albumwrapper'>
            
                        <FeatureBar className='albuminformation' albumname={this.state.albumname} artistname={this.state.artistname} imageurl={this.state.image}/>
                </div>
               
    
            </div>
        
    </div>
    );
     }
}
export default AlbumInfoPage;