import React from 'react';
import './AddForm.css'
export default function AddForm(props){
    return(
        <form>
            <input name='name' type='text' placeholder='Item Name'/>
            <input name='weight' type='text' placeholder='Item Weight'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

