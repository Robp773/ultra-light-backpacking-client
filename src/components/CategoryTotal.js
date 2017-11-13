import React from 'react';
import './CategoryTotal.css';
import {connect} from 'react-redux';
import {updateTotals} from '../actions';
export class CategoryTotal extends React.Component{


render(){
    this.props.dispatch(updateTotals(this.props.weightTotal, this.props.itemTotal))
    return(
    <div className='topCategory'>
    <h3>{this.props.title}</h3>
    <div className='itemTotal'>{this.props.itemTotal} items</div> 
    <div className='weightTotal'>{this.props.weightTotal} ounces</div> 
    </div>
    )
}
}
 export default connect()(CategoryTotal)