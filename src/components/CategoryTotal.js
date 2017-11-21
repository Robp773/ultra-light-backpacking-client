import React from 'react';
import './CategoryTotal.css';
import {connect} from 'react-redux';
import {updateTotals} from '../actions';
export default class CategoryTotal extends React.Component{


render(){

    return(
    <div className='topCategory'>
    <h3>{this.props.title}</h3>
    <div className='itemTotal'>{this.props.itemTotal} items</div> 
    <div className='weightTotal'>{this.props.weightTotal} ounces</div> 
    </div>
    )
}
}
