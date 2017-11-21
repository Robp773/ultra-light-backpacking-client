import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';
import CategoryTotal from './CategoryTotal';
import {Link} from 'react-router-dom';

export default class Category extends React.Component{

    constructor(props){
        super(props);    
        
        this.state ={
    selected: false,
    formOpen: false,
    editFormOpen: false
} 

}

render(){
    let weightTotal= 0;
    let buttonSymbol, addForm;
    
    if(this.state.formOpen === true){
     buttonSymbol = '-'
     addForm = <AddForm title = {this.props.title}/>
    }
    else{
        buttonSymbol = '+'
    }  
       const displayItems = this.props.thisState.map((item, index)=>{  
        weightTotal += item.weight;
        
       return ( 
         
        <fieldset key={index} onChange={()=>{}}>
            <input type='text' onClick={(e)=>{e.stopPropagation(); 
        }}defaultValue={item.name} className='indivResult'/>
       
       
      
        <input type='text' onClick={(e)=>{e.stopPropagation();
        }}defaultValue={item.weight} className='indivResult' />
            <button className='deleteBtn' onClick={(e)=>{
                e.stopPropagation()
                e.preventDefault()
               }}>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>

        </fieldset>


       )
    })

    const loadedCategory = <CategoryTotal title= {this.props.title} 
                            itemTotal={this.props.thisState.length} 
                            weightTotal={weightTotal} />
    
    if(this.state.selected === true){
// {e.preventDefault();
    return (
    <section className='category' onClick={()=> {this.setState({selected: !this.state.selected})}}>
        {loadedCategory}

    <button onClick={(e)=> {e.stopPropagation(); this.setState({formOpen: !this.state.formOpen})} } className='addBtn'>{buttonSymbol}</button>
        {addForm}
    <ListTable displayItems={displayItems}/>
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
