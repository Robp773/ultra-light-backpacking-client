import React from 'react';
import './TotalBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export default class TotalBar extends React.Component{
 
    render(){
        const totalsObj = this.props.totals;

        console.log(totalsObj.totalItems)

        let unitOfMeasurement, unitWeight;
        if(this.props.totalWeight < 16){
            unitWeight = totalsObj.totalWeight;
                    unitOfMeasurement = 'ozs'
        }
        else{
            unitWeight = totalsObj.totalWeight * .0625
            unitOfMeasurement = 'lbs'
            
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
                <div>Weight Goal: {totalsObj.weightGoal} lbs </div>
           </div>
        </div>
    ) 
    }
}

