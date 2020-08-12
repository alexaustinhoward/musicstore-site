import React from 'react';
import './trackarea.style.scss';
const TrackArea = ({title,trackareadata})=>(
<div className='trackarea'>
<div className='trackitems'> 
    <div className='titlecontainer'>
        <div className='title'>{title}</div>
    </div>
    
    
    <div className='header'>
        
        <div className='tracktitleheader'>Title</div>
        <div className='artistnamesheader'>Artist</div>
        <div className='priceheader'>Price</div>
        <div className='buyheader'></div>
       
        </div>
                {trackareadata}
           
                
</div>
</div>
);
export default TrackArea;