import React from 'react';
import './TotalBar.css';
import SignUp from './SignUp'
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default function TotalBar(props){
    return(
        <div className='totalBarContainer'>
            <div className='headerBtns'>   
                <header>Pack Light</header>
                <button><Link to='/signup'>Sign Up</Link></button>
                <button><Link to='/signin'>Sign In</Link></button>
            </div>
         
            <div className='totalContainer'>    
                <div>Total Packed Weight: 123</div>
                <div>Total Items: 54</div>
                <div>Weight Goal: 300 ounces</div>
           </div>
        </div>
    )
}