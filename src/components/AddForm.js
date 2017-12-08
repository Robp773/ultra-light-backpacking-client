import React from 'react';
import './AddForm.css'
import {connect} from 'react-redux';
import {addItem} from '../actions'
export class AddForm extends React.Component{

    render(){
    return(
        <form className='addForm' onClick={(e)=>{e.stopPropagation()}} onSubmit={(e)=>{
            e.preventDefault();        
            const name = this.inputName.value
            const weight = Number(this.inputWeight.value)
            const readiedTitle = this.props.title.toLowerCase().replace(/\s+/g, "")
            this.props.dispatch(addItem(name, weight, readiedTitle))
            this.inputName.value = '';
            this.inputWeight.value='';
        }}>
            <legend>Add Item</legend>
            <input ref= {(input)=>{this.inputName = input}} className='addInputName' name='name' type='text' placeholder='Item Name'/>
            <input ref= {(input)=>{this.inputWeight = input}} className='addInputWeight' name='weight' type='number' placeholder='ozs'/>
            <button className='addFormSubmit' type='submit' onClick={(e)=>{e.stopPropagation()}}>Submit</button>
        </form>
    )
}
}

export default connect()(AddForm)

