import './mobilemenuitems.style.scss';
import React from 'react';
import {connect} from 'react-redux';
import {auth} from '../../firebase/firebase.util';
import {Link} from 'react-router-dom';
const MobileMenuItems  =({mobileDisplay,currentUser})=>(

<div className="mobilemenuitems">
        <div className="mobiledropitems"
        style={  mobileDisplay ? 
                {display: 'none'}
                 : {display: 'block'}  
                 }
         >
 {currentUser?
            
            ( <div className='item' onClick={()=>auth.signOut()}>Signout</div>) :
             (<div className='item'>
                             <Link to='/signup' style={{ textDecoration: 'none' }}>
                                 Signin
                             </Link>
                             </div>)

         }
            <div >cart</div>
            <div >Rock</div>
            <div >Pop</div>
            <div>HipHop</div>
            <div >Electrontic</div>
        </div>
</div> 
);
const mapStateToProps= ({user:{currentUser},mobile:{mobileDisplay}})=>({

      mobileDisplay,
      currentUser
    
});
export default connect(mapStateToProps)(MobileMenuItems);