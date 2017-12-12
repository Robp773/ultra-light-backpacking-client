import React from 'react';
import './ListTable.css';
export default class ListTable extends React.Component{

render(){    
        return (
                <div className='scrollableParent'>
                        <form className='listItemForm'>
                            {this.props.displayItems}                                   
                        </form>
                </div>
               )
        }
}
