import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';

export default class Category extends React.Component{

    constructor(props){
        super(props); 
        this.state ={
    selected: false,
    formOpen: false
} 


    }
   changeButton(){
 console.log('a')       
    }


render(){
    let buttonSymbol, addForm;
    if(this.state.formOpen === true){
     buttonSymbol = '-'
    addForm = <AddForm />

    }
    else{
        buttonSymbol = '+'
    }




let weightTotal= 0;
const displayState = this.props.thisState.map((item, index)=>{
     weightTotal += item.weight
     return <tr key={index} className='indivResultContainer'>
                 <td className='indivResult'>{item.name}</td>
                 <td className='indivResult'>{item.weight}</td>
            </tr>
 })
 if(this.state.selected === true){

    return (
    <section className='category' onClick={(e)=>{
        e.preventDefault()
        this.setState({selected: !this.state.selected})       
        
        }}>
     {/* Top Category */}

    <div className='topCategory'>
    <h3>{this.props.title}</h3>
    <div className='weightTotal'>{weightTotal} ounces</div>    
    <button onClick={(e)=> {
        e.stopPropagation()
         this.setState({formOpen: !this.state.formOpen})} }className='addBtn'>{buttonSymbol}</button>
    
    </div>

    {/* Add Form */}
    {/* <AddForm title={this.props.title}/> */}
    {addForm}

    {/* List Table */}

    <ListTable displayState={displayState}  />
       
    </section>
    )
 }
 return (
    <section className='category' onClick={()=>{
        // console.log(this)
        
        this.setState({selected: !this.state.selected})
    }
        }>

     {/* Top Category */}

    <div className='topCategory'>
    <h3>{this.props.title}</h3>
    <div className='weightTotal'>{weightTotal} ounces</div>
    </div>
    </section>
 )

}}
