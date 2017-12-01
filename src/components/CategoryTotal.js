import React from 'react';
import './CategoryTotal.css';
export default class CategoryTotal extends React.Component{
constructor(props){
    super(props);
}
render(){
    console.log('categoryTotal render')
    return(
    <div className='topCategory'>
    <h3>{this.props.title}</h3>
    <div className='itemTotal'>{this.props.itemTotal} items</div> 
    <div className='weightTotal'>{this.props.weightTotal.toFixed(2)} ounces</div> 
    </div>
    )
}
}

