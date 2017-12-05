
import React from 'react';
import './SelectList.css';
export default class SelectList extends React.Component{

    render(){
       
        return (
            <div className='listBody'>
            <h3>Select a List</h3>
                <div className='listNamesParent' >
                {this.props.listNames}
                </div>
            </div>
        )
    };
};