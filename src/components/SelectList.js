
import React from 'react';
import './SelectList.css';
export default class SelectList extends React.Component{

    render(){
       
        return (            
            <div>
        <h1>Pack Light</h1>

            <div className='listBody'>
            <img alt='Backpack icon' src='..\images\backpack.png'/>
            <h3>Select a List</h3>
                <div className='listNamesParent' >                
                    {this.props.newListInput}
                    {this.props.listNames}
                </div>
            </div>
            </div>
        )
    };
};