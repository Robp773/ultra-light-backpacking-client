import React from 'react';
import './TotalBar.css';
import {connect} from 'react-redux';
import {updateGoal} from '../actions';
import {API_BASE_URL} from '../config';
export class TotalBar extends React.Component{

 handleInputChange(value){
 this.props.dispatch(updateGoal(value));
}
handleSaveClick(){
fetch(`${API_BASE_URL}/list-state/${this.props.listName}`, {
method: 'put',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(this.props.fullState)
})
}

    render(){
        const totalsObj = this.props.totals;  

        let totalLbs, weightClass;
     
        totalLbs= totalsObj.totalWeight.toFixed(2);        
        
        return(
        <div className='totalBarContainer'>
            <div className='headerBtnContainer'> 
                <header>Pack Light</header>
                <button className='saveBtn' onClick={()=>{this.handleSaveClick()}}>Save</button>
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
const mapStateToProps = state => ({
    fullState: state,
    listName: state.listName,
    weightTotal: state.weightTotal
    });        
export default connect(mapStateToProps)(TotalBar)