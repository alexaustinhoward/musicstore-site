import React from 'react';
import './promo.style.scss';
import {Link} from 'react-router-dom';
 const Promo = ()=>(
<div className='promo'>
    
    <div className='promo_wrapper' >
        <img className='promobackground'src="/promopic.png" resizeMode="contain" width='500px' />
        <div className='promotitle'>Future Nostalgia</div>
        <div className='promodesrc'>The sophomore studio album from Dua Lipa, Future Nostalgia is available in a UO-exclusive limited run of blue vinyl. Channeling a nostalgic feel with elements of electronica, pop, disco and dance. Featuring the singles “Don’t Start Now” and “Physical.” 2020, Warner.</div>
        <div className='buttonsection'>
            <a className='btn'href=''>Buy</a>
            <Link to='/album/Dua+Lipa/Future+Nostalgia' style={{ textDecoration: 'none' }}>
            <a className='btn' href=''>More Info</a>
            </Link>
            </div>
    </div>
</div>
 );
 export default Promo;