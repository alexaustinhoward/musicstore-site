import './mobiledropmenu.style.scss';
import React from 'react';
import { connect } from 'react-redux';
import {MobilenavDisplay} from '../../redux/mobilenav/mobilenav.action';
const MobileDropMenu  =({MobilenavDisplay})=>(

<div className="mobiledropmenu">
        <img src='/menu.svg'className="icon" onClick={MobilenavDisplay}/>
</div> 
);

const mapDispatchToProps = dispatch=>({
        MobilenavDisplay: ()=> dispatch(MobilenavDisplay()),
    })
export default connect(null,mapDispatchToProps)(MobileDropMenu);