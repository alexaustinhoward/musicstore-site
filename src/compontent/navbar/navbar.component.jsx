import React from 'react';
import {connect} from 'react-redux';
import './navbar.style.scss';
import {auth} from '../../firebase/firebase.util';
import {Link} from 'react-router-dom';
import CartDropMenu from '../CartDropMenu/CartDropMenu.component';
import MobileDropMenu  from '../MobileDropMenu/mobiledropmenu.component';
const NavBar =({ currentUser }) =>(
<div className='navbar'>
    <Link to='/' style={{ textDecoration: 'none' }}>
    <div className='logo'> CINESS</div>
    </Link>
   <MobileDropMenu className='mobileonly' />
    <div className='misc'>
        <ul className='miscitems'>
            {currentUser?
            
                       ( <li className='item' onClick={()=>auth.signOut()}>Signout</li>) :
                        (<li className='item'>
                                        <Link to='/signup' style={{ textDecoration: 'none' }}>
                                            Signin
                                        </Link>
                                        </li>)

                    }
            <li className='item'> account</li>
            <li><CartDropMenu/></li>
        </ul>
    </div>
</div>
);
const mapStateToProps= state=>({

    currentUser: state.user.currentUser
    
});
export default connect(mapStateToProps)(NavBar);