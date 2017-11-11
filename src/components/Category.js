import React from 'react';
import './Category.css';
import AddForm from './AddForm';
import ListTable from './ListTable';

export default class Category extends React.Component{

    constructor(props){
        super(props); 
        this.state ={
    selected: false
}

   
   }


render(){
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
    <section className='category' onClick={()=>{
        this.setState({selected: !this.state.selected})        
        }}>

     {/* Top Category */}

    <div className='topCategory'>
    <h3>{this.props.title}</h3>
    <div className='weightTotal'>{weightTotal} ounces</div>
    </div>

    {/* Add Form */}

    <AddForm title={this.props.title}/>

    {/* List Table */}

    <ListTable displayState={displayState}  />
       
    </section>
    )
 }
 return (
    <section className='category' onClick={()=>{
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
