import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';
import CategoryTotal from './CategoryTotal';
import {connect} from 'react-redux';
import {updateItem, deleteItem} from '../actions';
import {NotificationManager} from 'react-notifications';

export class Category extends React.Component{

    state = {
    // if user clicks on this specific Category component
    selected: false,
    // if user clicks the '+' button to open AddForm component
    formOpen: false,
    } 

// if user enters a new value into an existing list item input
handleChange(values, index){
    // values refers to the new value of the list item
    this.props.dispatch(updateItem(values, index, this.props.title.toLowerCase()))
};
// if user clicks the delete button on a specific list item
handleDeleteClick(index){
    // open alert modal
    NotificationManager.warning('Item Deleted');    
    this.props.dispatch(deleteItem(this.props.title.toLowerCase(), index));

};

render(){
    
    // counter for this specific category's weight total;
    let weightTotal = 0;
    let buttonSymbol, addForm, displayItems;
// if the form is open change the  form open button symbol from '+' to '-'
    if(this.state.formOpen === true){
     buttonSymbol = <i className="fa fa-minus  addOrSub" aria-hidden="true"></i>;
    //  initialize an AddForm component with the Category's title
     addForm = <AddForm title = {this.props.title}/>
    }
    else{
        // otherwise button symbol = '+'
        buttonSymbol = <i className="fa fa-plus addOrSub" aria-hidden="true"></i>
        
    }  
    // if there is nothing in a category's array, display this message
    if(this.props.thisState.length === 0){
          displayItems = <div className='emptyListDiv'><div>This list needs some items...</div></div>
    }
    // for each object in this category's array, create a single fieldset
    // including one input for the name property and one for the weight
    // delete button for deleting this object from the state
    else{

        displayItems = this.props.thisState.map((item, index)=>{
            console.log('mapping');
            console.log(item.name);
        // for CategoryTotal component
        weightTotal += item.weight;
        // for creating a unique ref for each input depending on it's index
        const name = 'name'+ index;
        const weight = 'weight' + index;

       return ( 
        <fieldset key={index} onChange={()=>{this.handleChange({name: this[name].value, weight: this[weight].value}, index)}}>

            <input ref={(input)=>{this[name] = input}} type='text' 
                onClick={(e)=>{e.stopPropagation()}}
                defaultValue={item.name} className='indivResult name'/>
        
            <input ref={(input)=>{this[weight] = input}} type='text'
                onClick={(e)=>{e.stopPropagation()}}
                defaultValue={item.weight} className='indivResult weight'/>

            <button className='deleteBtn' onClick={(e)=>{
            e.stopPropagation(); 
            e.preventDefault()
            this.handleDeleteClick(index)}}>
                <i onClick={()=>this.handleDeleteClick(index)} className="fa fa-trash" aria-hidden="true"></i>
            </button>

        </fieldset>
       )
    })
}
//   CategoryTotal component with all needed props - used in both conditions
    const loadedCategory = 
    <CategoryTotal title= {this.props.title} itemTotal={this.props.thisState.length} weightTotal={weightTotal} />
    
    // if this category is opened display the CategoryTotal component
    // with the addBtn to let the user open the form
    // and display all list items in the format created above
if(this.state.selected === true){
    return (
            <section className='category' onClick={()=> {this.setState({selected: !this.state.selected})}}>
                {loadedCategory}
                <button className='addBtn' onClick={(e)=> {e.stopPropagation(); this.setState({formOpen: !this.state.formOpen})} } >{buttonSymbol}</button>
                {addForm} 
                <ListTable className='ListTable' displayItems={displayItems}/>
            </section>
            )
 }
//  if this category has not been selected, only display the category total
    else {
        return (
                <section className='category' onClick={()=>{this.setState({selected: !this.state.selected})}}>
                    {loadedCategory}
                </section>
               )
        }
    }
}

export default connect()(Category)