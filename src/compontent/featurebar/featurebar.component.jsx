import React from 'react';
import './featurebar.style.scss';
import {Link} from 'react-router-dom';
const FeatureBar = ({artistname,imageurl,albumname,title})=>(
<div className='featurebar'>
    <div className='title'>{title}</div>
   
            <li  className='item'>
            <Link 
               to={`${"/album/"}${artistname.toString().replace(" ","+")}${"/"}${albumname.toString().replace(" ","+")}`}
               style={{ textDecoration: 'none' }}> 

                <img className='imagebox' src={imageurl}/>
                
                </Link>

                <Link 
               to={`${"/album/"}${artistname.toString().replace(" ","+")}${"/"}${albumname.toString().replace(" ","+")}`}
               style={{ textDecoration: 'none' }}> 

                    <p className='album' >{albumname}</p>

               </Link>

                 <Link 
               to={`${"/a/"}${artistname.toString().replace(" ","+")}`}
               style={{ textDecoration: 'none' }}> 

                    <span className='artist'>{artistname}</span>
                    
                 </Link>
            </li>
</div>
);
export default FeatureBar;