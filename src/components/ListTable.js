import React from 'react';
import './ListTable.css';
import {connect} from 'react-redux';
import {updateItem, deleteItem} from '../actions';
import {NotificationManager} from 'react-notifications';

export class ListTable extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        change: false
                }
        }

            // if there is nothing in a category's array, display this message

    // for each object in this category's array, create a single fieldset
    // including one input for the name property and one for the weight
    // delete button for deleting this object from the state

handleChange(values, index){     
        // values refers to the new value of the list item
        this.props.dispatch(updateItem(values, index, this.props.title.toLowerCase()))};
        // if user clicks the delete button on a specific list item

handleDeleteClick(index){
        // open alert modal
        NotificationManager.warning('Item Deleted');    
        this.props.dispatch(deleteItem(this.props.title.toLowerCase(), index))};

render(){   
        let displayItems;
       
        displayItems = this.props.thisState.map((item, index)=>{
      
        // for CategoryTotal component
        // for creating a unique ref for each input depending on it's index
        const name = 'name'+ index;
        const weight = 'weight' + index;
       
       return ( 
        <fieldset key={index} onChange={()=>{this.handleChange({name: this[name].value, weight: this[weight].value}, index)}}>

            <input ref={(input)=>{this[name] = input}} type='text' 
                onClick={(e)=>{e.stopPropagation()}}
                value={item.name} onChange={()=>{this.setState({change: !this.state.change})}}/>
        
            <input ref={(input)=>{this[weight] = input}} type='number'
                onClick={(e)=>{e.stopPropagation()}}
                value={item.weight} className='indivResult weight' onChange={()=>{this.setState({change: !this.state.change})}}/>

            <button 
            className='deleteBtn' onClick={(e)=>{e.stopPropagation(); e.preventDefault(); 
                this.handleDeleteClick(index)}}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>

        </fieldset>
       )
    })  
    if(this.props.thisState.length === 0){
        displayItems = <div className='emptyListDiv'><div>This list needs some items...</div></div>
  }  
        return (
                <div className='scrollableParent'>
                        <form className='listItemForm'>
                            {displayItems}
                        </form>
                </div>
               )
        }
}
export default connect()(ListTable)