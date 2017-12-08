import React from 'react';
import './ListTable.css';
export default class ListTable extends React.Component{

render(){
        return (
        <div className='scrollableParent'>
            <form>
              {this.props.displayItems}                                   
            </form>
        </div>
    )
}
}
