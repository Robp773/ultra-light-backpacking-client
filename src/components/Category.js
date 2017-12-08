import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';
import CategoryTotal from './CategoryTotal';
import {connect} from 'react-redux';
import {updateItem, deleteItem} from '../actions';
import {NotificationManager} from 'react-notifications';

export class Category extends React.Component{

        
    state ={
    selected: false,
    formOpen: false,
    change: false
} 


handleChange(values, index){
    this.props.dispatch(updateItem(values, index, this.props.title.toLowerCase()))
    this.setState({change: !this.state.change})    
};

handleDeleteClick(index){
    NotificationManager.warning('Item Deleted')
    this.props.dispatch(deleteItem(this.props.title.toLowerCase(), index))
    this.setState({change: !this.state.change})
};

render(){
    
    let weightTotal = 0;
    let buttonSymbol, addForm, displayItems;
    
    if(this.state.formOpen === true){
     buttonSymbol = <i className="fa fa-minus  addOrSub" aria-hidden="true"></i>
     ;
     addForm = <AddForm title = {this.props.title}/>
    }
    else{
        buttonSymbol = <i className="fa fa-plus addOrSub" aria-hidden="true"></i>
        
    }  
    if(this.props.thisState.length === 0){
          displayItems = <div><div>This list needs some items...</div></div>
    }
     else{
          displayItems = this.props.thisState.map((item, index)=>{    
        
        weightTotal += item.weight;
                 const name = 'name'+ index;
                 const weight = 'weight' + index;

       return ( 

        <fieldset key={index} onChange={()=>{
        this.handleChange({name: this[name].value, weight: this[weight].value}, index)}}>

        <input ref={(input)=>{this[name] = input}} type='text' onClick={(e)=>{e.stopPropagation(); 
        }}defaultValue={item.name} className='indivResult name'/>
      
        <input ref={(input)=>{this[weight] = input}} type='text' onClick={(e)=>{e.stopPropagation();
        }}defaultValue={item.weight} className='indivResult weight' />

            <button className='deleteBtn' onClick={(e)=>{e.stopPropagation(); e.preventDefault()}}>
                <i onClick={()=>this.handleDeleteClick(index)} className="fa fa-trash" aria-hidden="true"></i>
            </button>

        </fieldset>


       )
    })
}
   
    const loadedCategory = <CategoryTotal title= {this.props.title} 
                            itemTotal={this.props.thisState.length} 
                            weightTotal={weightTotal} />
    
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

 return (
    <section className='category' onClick={()=>{this.setState({selected: !this.state.selected})}}>
    {loadedCategory}
    </section>
 )

}

}
export default connect()(Category)