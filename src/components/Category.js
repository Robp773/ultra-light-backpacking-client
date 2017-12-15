import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';
import CategoryTotal from './CategoryTotal';


export default class Category extends React.Component{

    state = {
    // if user clicks on this specific Category component
    selected: false,
    // if user clicks the '+' button to open AddForm component
    formOpen: false,
    itemTotal: 0,
    weightTotal: 0
    } 

// if user enters a new value into an existing list item input


render(){  
    let weightTotal = 0;
    let buttonSymbol, addForm, displayItems;
    for(let i=0; i<this.props.thisState.length; i++){
        weightTotal += this.props.thisState[i].weight;
    }
    console.log(weightTotal)
    // counter for this specific category's weight total;
  
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


//   CategoryTotal component with all needed props - used in both conditions
    const loadedCategory = 
    <CategoryTotal title= {this.props.title} imgSrc={this.props.imgSrc} itemTotal={this.props.thisState.length} weightTotal={weightTotal} />
    
    // if this category is opened display the CategoryTotal component
    // with the addBtn to let the user open the form
    // and display all list items in the format created above
if(this.state.selected === true){
    return (
            <section className='category' onClick={()=> {this.setState({selected: !this.state.selected})}}>
                {loadedCategory}
                <button className='addBtn' onClick={(e)=> {e.stopPropagation(); this.setState({formOpen: !this.state.formOpen})} } >{buttonSymbol}</button>
                {addForm} 
                <ListTable className='ListTable' title={this.props.title} thisState={this.props.thisState}/>
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

