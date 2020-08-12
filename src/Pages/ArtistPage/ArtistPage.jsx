import React,{ Component} from 'react';
import './ArtistPage.style.scss';
import NavBar from '../../compontent/navbar/navbar.component';
import SideBar from '../../compontent/Sidebar/sidebar.component';
import InfoSection from '../../compontent/infosection/infosection.component';
import FeatureBar from '../../compontent/featurebar/featurebar.component';
import SectionArea from '../../compontent/sectionarea/sectionarea.component';
import TrackList from '../../compontent/tracklist/trackslist.component';
import TrackArea from '../../compontent/Tracksection/Tracksection.component'
import MobileMenuItems from '../../compontent/mobilemenuitems/mobilemenuitems.component';

class ArtistPage extends Component{
    
    constructor(){
        super();
        this.state={
            artistname:[],
            artistimage:[],
            artistsummary:[],
            albumsdata:[],
            tracks:[],    
            
        };
    }
    componentDidMount(){
        let response1url= 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist='+this.props.match.params.artistname+'&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&format=json'
        let response2url= 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='+this.props.match.params.artistname+'&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&format=json'
        let response3url= 'http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist='+this.props.match.params.artistname+'&api_key=cf488b4b83afe5d9fa5b889a4cdd85dd&limit=10&&format=json'
        fetch(response1url)      
        .then(response1=> response1.json())
        .then(response1=> 
        this.setState({ 
            artistname: response1.artist,
            artistimage:response1.artist.image[2]['#text'],
            artistsummary:response1.artist.bio}) )
            .then(response2=>
                fetch(response2url))
            .then(response2=> response2.json())
            .then(response2=> 
                this.setState({ albumsdata: response2.topalbums.album}))
                .then(response3=>
                    fetch(response3url))
                .then(response3=> response3.json())
                .then(response3=>
                    this.setState({
                        tracks: response3.toptracks.track
                    }))
                ;
    }
    render() {
    
        return(
        <div className='ArtistPage'>
            <NavBar/>
            <MobileMenuItems/>
            <div className='body'>
                <SideBar className='sidearea'/>
                <div className='featurewrapper'>
               
                <InfoSection title={this.state.artistname.name} desrciption={this.state.artistsummary.summary} picture={this.state.artistimage}/>
                <TrackArea title='Top Tracks' 
                    trackareadata={this.state.tracks.map((musicdata) => (
                        <TrackList title={musicdata.name} key={musicdata.name+musicdata['@attr'].rank} Price='0.99' artistnames={musicdata.artist.name}/>

                    ))} />
                <SectionArea title='Albums'
                    sectionareadata={this.state.albumsdata.map((data) => (
                        <FeatureBar  albumname={data.name} key={data.name+data.playcount} artistname={data.artist.name} imageurl={data.image[2]['#text']}/>
                     ))} />
            
         
               
    
            </div>
        </div>
    </div>
    );
     }
}
export default ArtistPage;