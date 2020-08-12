import React from 'react';
import './infosection.style.scss';
const InfoSection = ({picture,title,desrciption})=>(
     <div className='infosection'>
        <div className='infosection_wrapper' >
            <div className='infobox'>
                <h1 className='title'>{title}</h1>
                <span className='desrciption'>{desrciption}</span>
            </div>
            <img clasName='infosectionimage'src={picture} />
        
        </div>
</div>
);
export default InfoSection;