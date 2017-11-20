import React from 'react';
import './TotalBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class TotalBar extends React.Component{
 
    render(){
        let unitOfMeasurement, updatedWeight;
        if(this.props.totalWeight < 16){
            updatedWeight = this.props.totalWeight;
                    unitOfMeasurement = 'ozs'
        }
        else{
            updatedWeight = this.props.totalWeight * .0625
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
                <div>Total Weight: {updatedWeight} {unitOfMeasurement}</div>
                <div>Total Items: {this.props.totalItems}</div>
                <div>Weight Goal: {this.props.weightGoal} lbs </div>
           </div>
        </div>
    ) 
    }
}

const mapStateToProps = state => ({
    totalWeight: state.totalWeight,
    totalItems: state.totalItems,
    weightGoal: state.weightGoal
    });        



export default connect(mapStateToProps)(TotalBar)