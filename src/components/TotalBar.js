import React from 'react';
import './TotalBar.css';
import {connect} from 'react-redux';
import {updateGoal} from '../actions';
export class TotalBar extends React.Component{

 handleInputChange(value){
this.props.dispatch(updateGoal(value))
}
    render(){

        const totalsObj = this.props.totals;  

        let totalLbs, weightClass;
     
        totalLbs= (totalsObj.totalWeight * .0625).toFixed(2)
            
        return(
        <div className='totalBarContainer'>
            <div className='headerBtnContainer'> 
                <header>Pack Light</header>
                <button className='saveBtn' onClick={()=>{

                }}>Save</button>
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
                    <div className='divTotal'>
                    <input ref={(input) => this.goalInput = input} type='number' className='setGoal' placeholder= {totalsObj.weightGoal} 
                    onChange={()=>{this.handleInputChange(Number(this.goalInput.value))}}/>lbs
                    </div>
                </div>
           </div>
           <div className='weightClass'>{weightClass}</div>
        </div>
    ) 
    }
}

export default connect()(TotalBar)