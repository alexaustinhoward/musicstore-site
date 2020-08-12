import React from 'react';
import './sectionarea.style.scss';
const SectionArea = ({title,sectionareadata})=>(
<div className='sectionarea'>
<div className='sectionitems'> 
    <div className='titlecontainer'>
        <div className='title'>{title}</div>
    </div>
            <ul className='sectioncontainer'>
                {sectionareadata}
            </ul>  
</div>
</div>
);
export default SectionArea;