import React from 'react';
import './TotalBar.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateGoal} from '../actions';
export  class TotalBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editGoal: false
        }
        
    }
 handleInputChange(value){
console.log(value) 
this.props.dispatch(updateGoal(value))
}
    render(){
        const totalsObj = this.props.totals;


        let unitOfMeasurement, unitWeight;
        if(this.props.totalWeight < 16){
            unitWeight = totalsObj.totalWeight;
                    unitOfMeasurement = 'ozs'
        }
        else{
            unitWeight = totalsObj.totalWeight * .0625
            unitOfMeasurement = 'lbs'
            
        }

        if(this.state.editGoal === true){
            // goalForm = (<form>
            //     <input type='text' placeholder='Goal Weight in ozs'/>
            //             </form>)
        }
        return(
        <div className='totalBarContainer'>
            <div className='headerBtns'>   
                <header>Pack Light</header>
                <button><Link to='/signup'>Sign Up</Link></button>
                <button><Link to='/signin'>Sign In</Link></button>
            </div>
         
            <div className='totalContainer'>    
                <div>Total Weight: {unitWeight} {unitOfMeasurement}</div>
                <div>Total Items: {totalsObj.totalItems}</div>
                <label>Weight Goal: </label>
                <input ref={(input) => this.goalInput = input} className='setGoal' placeholder= {totalsObj.weightGoal + ' pds'} onChange={()=> this.handleInputChange(this.goalInput.value)}/>
           </div>
        </div>
    ) 
    }
}

export default connect()(TotalBar)