import React from 'react';
import './CategoryTotal.css';
export default class CategoryTotal extends React.Component{

render(){
    return(  
    <div id={this.props.title.toLowerCase()}>
        <div className='bgColorDiv'>
        <div className='topCategory'>
            <h3>{this.props.title}</h3>
            <div className='itemTotal'>{this.props.itemTotal} items</div> 
            <div className='weightTotal'>{this.props.weightTotal.toFixed(2)} ounces</div> 
        </div>                   
        <img className='categoryIcon' alt='Category Icon' src={this.props.imgSrc}/>
        </div>
    </div>
        )
    }
}

