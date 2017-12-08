import React from 'react';
import './TotalBar.css';
import {connect} from 'react-redux';
import {updateGoal} from '../actions';
import {API_BASE_URL} from '../config';
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';

export class TotalBar extends React.Component{

 handleInputChange(value){
 this.props.dispatch(updateGoal(value));
}
handleListsClick(){
    this.props.seeListsAgain();
}
handleSaveClick(){
NotificationManager.success('List Saved')
fetch(`${API_BASE_URL}/list-state/${this.props.listName}`, {
method: 'put',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify(this.props.fullState)
})    

}

    render(){
        let totalsObj = this.props.totals;  
        let totalLbs, weightClass;
        totalLbs= totalsObj.totalWeight.toFixed(2);
        let weightGoal = this.props.fullState.weightGoal;
        let feedback;
        let unitOfMeasurement = 'lbs';
        if(totalLbs - weightGoal < 1){
           unitOfMeasurement = 'ozs'
        }
        // let weightClass;
        // if(weightGoal <= 10){
        //     weightClass = 'Ultralight'
        // }
        // else if(weightGoal <= 15){
        //     weightClass = 
        // }
        
        if(weightGoal === 0){
            feedback = 'Please Set a Weight Goal.'
        }
        else if(weightGoal === totalLbs){
            feedback = 'Goal Reached!'
        }
        else if(totalLbs < weightGoal){
            feedback ="Goal Exceeded!";
        }
        else{
            feedback = `${(totalLbs - weightGoal).toFixed(2)} ${unitOfMeasurement} to drop to meet goal weight.`
        }
    
        return(
           
        <div className='totalBarContainer'>
        
            <div className='headerBtnContainer'> 
                <header>Pack Light</header>
                <button className='showListsBtn' onClick={()=>{this.handleListsClick()}}>
                <i className="fa fa-list-alt" aria-hidden="true"></i>
                </button>
            </div>
            <div className='listDataContainer'>
                    <h3>{this.props.listName}</h3>

            <div className='totalContainer'> 
            <div>   
                <div className='divResult'>Total Weight:</div>
                <div className='divTotal'>{totalLbs} lbs</div>
            </div>
             
                <div> 
                    <div className='divResult'>Total Items: </div>
                    <div className='divTotal'>{totalsObj.totalItems}</div>
                </div>

                <div>  
                    <div className='divResult'>Weight Goal: </div>
                    <div className='divTotal'>
                    <input ref={(input) => this.goalInput = input} type='number' className='setGoal' placeholder= {totalsObj.weightGoal}
                    onChange={()=>{this.handleInputChange(Number(this.goalInput.value))}}/> lbs
                    </div>
                </div>
                <div>{feedback}</div>
   
                <button className='saveBtn' onClick={()=>{
                    this.handleSaveClick()}}>
                <i className="fa fa-floppy-o" aria-hidden="true"></i>
</button>
                </div>
           </div>
      

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