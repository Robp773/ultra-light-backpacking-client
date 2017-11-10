import React from 'react'
import './Category.css'
import AddForm from './AddForm'
import {connect} from 'react-redux'
export default class Category extends React.Component{
super(props){
    constructor(props);
}

// add action for adding weight total to state grand total
render(){
let weightTotal= 0;

    const displayState = this.props.thisState.map((item, index)=>{
        console.log(item.name)
        weightTotal += item.weight
        return <tr key={index} className='indivResultContainer'>
                    <td className='indivResult'>{item.name}</td>
                    <td className='indivResult'>{item.weight}</td>
               </tr>
    })
        return(
        <section className='category'>

        <div className='topCategory'>
            <h3>{this.props.title}</h3>
        <div className='weightTotal'>{weightTotal} ounces</div>
        <button className='addBtn'>+</button>
        </div>
        


           <AddForm title={this.props.title}/>

            <table className='resultsParent'>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Weight</th>
                </tr>
                   {displayState}
                   </tbody>
            </table>
        </section>
    )
}

}