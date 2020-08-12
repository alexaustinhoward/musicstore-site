import React from 'react';
import {connect} from 'react-redux'
import './trackslist.style.scss';
import {addItem} from'../../redux/Cart/Cart.actions';
const TrackList = ({artistnames,Price,title,addItem})=>{
  
    const item ={artistnames,Price,title};
    return (
<div className='Tracklist'>

            
                <div className='tracktitle'>{title}</div>
                <div className='artistname'>{artistnames}</div>
                <div className='price'>{Price}</div>
                <div className='buyspot'onClick={()=>addItem(item)}><button >Add to Cart</button></div>
             
</div>
)};
const mapDispatchToProps= dispatch=>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(TrackList);