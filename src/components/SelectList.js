
import React from 'react';
import './SelectList.css';
export default class SelectList extends React.Component{

    render(){
        return (            
            <div>
                <header>Pack Light
                    <img className='backpackingIcon' alt='Backpacker Icon' src='..\images\man-2766763_1280 (1).png'/>
                </header>
                <div className='listBody'>
                    <div className='listNamesParent' >             
                        <h3 className='selectH3' >Select a List</h3>
                        {this.props.newListInput}
                        {this.props.listNames}
                    </div>
                </div>
            </div>
        )
    };
};