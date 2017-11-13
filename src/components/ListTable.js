import React from 'react';
import './ListTable.css';
export default class ListTable extends React.Component{

render(){

        return (
        <div className='scrollableParent'>
                    <h4>Name</h4>
                    <h4>Weight</h4>
            <form>{this.props.displayItems}</form>
              
              
                
                
        </div>
    )
}

}