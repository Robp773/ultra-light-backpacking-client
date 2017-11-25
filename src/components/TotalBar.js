import React from 'react';
import './TotalBar.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateGoal} from '../actions';
export  class TotalBar extends React.Component{
    constructor(props){
        super(props);
         
    }
 handleInputChange(value){
this.props.dispatch(updateGoal(value))
}
    render(){

        const totalsObj = this.props.totals;  

        let totalLbs, weightClass;
     
        totalLbs= (totalsObj.totalWeight * .0625).toFixed(2)
            
        
console.log(totalsObj.totalWeight)
  if(totalsObj.totalWeight  <= 15){
      console.log('ultra light')
  }
        return(
        <div className='totalBarContainer'>
            <div className='headerBtnContainer'> 
                <header>Pack Light</header>
                <button className='saveBtn'>Save</button>
            </div>
                        

            <div className='totalContainer'> 

            <div>   
                <div className='divResult'>Total Weight:</div>
                <div className='divTotal' >{totalLbs} lbs</div>
            </div>
             
                <div> 
                    <div className='divResult'>Total Items: </div>
                    <div className='divTotal'>{totalsObj.totalItems}</div>
                </div>

                <div>  
                    <div className='divResult'>Weight Goal: </div>
                    <div className='divTotal'><input ref={(input) => this.goalInput = input} className='setGoal' placeholder= {totalsObj.weightGoal} onChange={()=> this.handleInputChange(this.goalInput.value)}/> lbs</div>
                    {/* <div className='lbsDiv'> lbs</div> */}
                </div>
           </div>
           <div className='weightClass'>{weightClass}</div>
        </div>
    ) 
    }
}

export default connect()(TotalBar)