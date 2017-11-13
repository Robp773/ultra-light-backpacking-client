import React from 'react';
import './CategoryTotal.css';
export default function CategoryToal(props){
    return(
    <div className='topCategory'>
    <h3>{props.title}</h3>
    <div className='itemTotal'>{props.itemTotal} items</div> 
    <div className='weightTotal'>{props.weightTotal} ounces</div> 
    </div>
    )
}