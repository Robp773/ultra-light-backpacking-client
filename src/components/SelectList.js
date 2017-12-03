
import React from 'react';
import './SelectList.css';
import {API_BASE_URL} from '../config';

export default class SelectList extends React.Component{
    constructor(props){
        super(props);
    }

    // List of category titles should return an array

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