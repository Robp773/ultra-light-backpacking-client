import React from 'react';
import './AddForm.css'
export default function AddForm(props){
    return(
        <form>
            <legend>Add Item</legend>
            <input className='addInput' name='name' type='text' placeholder='Item Name'/>
            <input className='addInput' name='weight' type='text' placeholder='Item Weight'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

