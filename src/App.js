import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import SearchPage from './Pages/search/search.page';
import ArtistPage from './Pages/ArtistPage/ArtistPage';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignupPage from './Pages/Signup/signup.page';
import {auth, signInWithGoogle, createUserProfileDocument} from './firebase/firebase.util';
import { render } from '@testing-library/react';
import AlbumInfoPage from './Pages/albuminfo/albuminfo.page';
import {setCurrentUser} from './redux/user/user.action';
import Checkout from './Pages/checkout/Checkout.Page';
class App extends React.Component{
  
  unsubscibeFromAuth= null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscibeFromAuth=auth.onAuthStateChanged(async user=>{
     if (user){
       const userRef= await createUserProfileDocument(user);
       
       userRef.onSnapshot(snapShot =>{
         setCurrentUser({
             id:snapShot.id,
             ...snapShot.data()
           });
       });
      }
      setCurrentUser(user)
      });
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }
 render(){
  return (
    <BrowserRouter>
    <div className="App">
  
  <Route exact path='/' component={LandingPage} />
  <Route path='/signup' render={()=>this.props.currentUser ?(<Redirect to= '/'/>):(<SignupPage/>)} />
  <Route path='/a/:artistname' component={ArtistPage}/>
  <Route path='/s/:searchitem'  render={props => <SearchPage key={props.match.params.searchitem} {...props} />}/>
  <Route path='/album/:name/:album' component={AlbumInfoPage}/>
  <Route path='/checkout' component={Checkout}/>

    </div>
    </BrowserRouter>
  );
}
}
const mapStateToProps=({user}) =>({
  currentUser:user.currentUser
});
const mapDispatchToProps=dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
