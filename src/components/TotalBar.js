import React from 'react';
import './TotalBar.css'
export default function TotalBar(props){
    return(
        <div className='totalBarContainer'>
            <div className='headerBtns'>   
                <header>Pack Light</header>
                <button>Sign Up</button>
                <button>Sign In</button>
            </div>
         
            <div className='totalContainer'>    
                <div>Total Packed Weight: 123</div>
                <div>Total Items: 54</div>
                <div>Weight Goal: 300 ounces</div>
           </div>
        
        </div>
    )
}