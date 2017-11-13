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
} 

}

render(){
    let weightTotal= 0;
    let buttonSymbol, addForm;
    
    if(this.state.formOpen === true){
     buttonSymbol = '-'
     addForm = <AddForm />
    }
    else{
        buttonSymbol = '+'
    }  
       const displayItems = this.props.thisState.map((item, index)=>{
           weightTotal += item.weight;  
       return ( 

        <section className='resultItemSection' key={index}>
        
        <input type='text' onClick={(e)=>{e.stopPropagation();}} 
        value={item.name} className='indivResult' onChange={()=>{console.log('changing')}}/>

        <input type='text' onClick={(e)=>{e.stopPropagation();}}
         value={item.weight} className='indivResult' onChange={()=>{console.log('changing')}}/>

        </section>
       )
    })

    const loadedCategory = <CategoryTotal title= {this.props.title} 
                            itemTotal={this.props.thisState.length} 
                            weightTotal={weightTotal}/>
    
    if(this.state.selected === true){

    return (
    <section className='category' onClick={(e)=>{e.preventDefault(); this.setState({selected: !this.state.selected})}}>
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
