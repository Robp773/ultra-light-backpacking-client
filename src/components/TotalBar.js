import React from 'react';
import './TotalBar.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class TotalBar extends React.Component{
 
    render(){
        return(
        <div className='totalBarContainer'>
            <div className='headerBtns'>   
                <header>Pack Light</header>
                <button><Link to='/signup'>Sign Up</Link></button>
                <button><Link to='/signin'>Sign In</Link></button>
            </div>
         
            <div className='totalContainer'>    
                <div>Total Packed Weight: {this.props.totalWeight}</div>
                <div>Total Items: {this.props.totalItems}</div>
                <div>Weight Goal: {this.props.weightGoal} ounces</div>
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