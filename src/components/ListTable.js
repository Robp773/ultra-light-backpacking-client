import React from 'react';
import './ListTable.css';
import { connect } from 'react-redux';
import { updateItem, deleteItem } from '../actions';
import { NotificationManager } from 'react-notifications';

export class ListTable extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        change: false
                }
        }

        handleChange(values, index) {
                // values refers to the new value of the list item
                this.props.dispatch(updateItem(values, index, this.props.title.toLowerCase()))
        };
        // if user clicks the delete button on a specific list item

        handleDeleteClick(index) {
                // open alert modal
                NotificationManager.warning('Item Deleted');
                this.props.dispatch(deleteItem(this.props.title.toLowerCase(), index))
        };

        render() {
                let displayItems;
                displayItems = this.props.thisState.map((item, index) => {
                        // for CategoryTotal component
                        // for creating a unique ref for each input depending on it's index
                        const name = 'name' + index;
                        const weight = 'weight' + index;
                        const importance = 'importance' + index;
                        console.log(item)

                        return (
                                <fieldset key={index} onChange={() => { this.handleChange({ name: this[name].value, weight: this[weight].value }, index) }}>
                                        <div className='fieldParent'>

                                                <input ref={(input) => { this[name] = input }} type='text'
                                                        onClick={(e) => { e.stopPropagation() }}
                                                        value={item.name} onChange={() => { this.setState({ change: !this.state.change }) }} />

                                                <input ref={(input) => { this[weight] = input }} type='number'
                                                        onClick={(e) => { e.stopPropagation() }}
                                                        value={item.weight} className='indivResult weight' onChange={() => { this.setState({ change: !this.state.change }) }} />

                                                <select className='selectInput' ref={(input) => { this[importance] = input }}
                                                        onClick={(e) => { e.stopPropagation() }}
                                                        value={item.importance} selected={item.importance} onChange={() => { this.setState({ change: !this.state.change }) }}>
                                                        <option value='critical'>Critical</option>
                                                        <option value='important'>Important</option>
                                                        <option value='unimportant'>Unimportant</option>

                                                </select>
                                                <button
                                                        className='deleteBtn' onClick={(e) => {
                                                                e.stopPropagation(); e.preventDefault();
                                                                this.handleDeleteClick(index)
                                                        }}>
                                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                                </button>
                                        </div>
                                </fieldset>
                        )
                })

                if (this.props.thisState.length === 0) {
                        displayItems = <div className='emptyListDiv'><div>This list needs some items...</div></div>
                }
                return (
                        <div className='scrollableParent'>
                                <form className='listItemForm'>
                                        {displayItems}
                                </form>
                        </div>
                )
        }
}
export default connect()(ListTable)