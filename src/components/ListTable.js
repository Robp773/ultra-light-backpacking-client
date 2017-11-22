import React from 'react';
import './ListTable.css';
import {reduxForm, Field} from 'redux-form';

export default class ListTable extends React.Component{

render(){

        return (
        <div className='scrollableParent'>
                    <h4>Name</h4>
                    <h4>Weight</h4>
            <form>
                    
                    {this.props.displayItems}
                                        
                    </form>
              
              
                
                
        </div>
    )
}

}
// export default reduxForm({form: 'listTable'})(ListTable);