import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';
import CategoryTotal from './CategoryTotal';

export default class Category extends React.Component{

    constructor(props){
        super(props);    
        
        this.state ={
    selected: false,
    formOpen: false
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

    const displayState = this.props.thisState.map((item, index)=>{
     weightTotal += item.weight;
     return <tr key={index} className='indivResultContainer'>
                 <td className='indivResult'>{item.name}</td>
                 <td className='indivResult'>{item.weight}</td>
            </tr>
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
    <ListTable displayState={displayState}/>
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
