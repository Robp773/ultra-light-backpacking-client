import React from 'react';
import './LandingModal.css';


export default class LandingModal extends React.Component{
    render(){
        return(
                <div className='modalBG'>
                    <div className='modalText'>

                    <div className='textImgContainer'>  
                        <img  className='landingImg' alt='planning icon' src='images/003-clipboard.svg'/> 
                        <div className='text'><h3 className='h3Text'>Plan</h3> your Packing List</div>
                    </div>

                    <div className='textImgContainer'>                         
                        <img  className='landingImg' alt='cutting scissors icon' src='images/002-scissors.svg'/>
                        <div className='text'><h3 className='h3Text'>Cut</h3> Your Weight</div>
                    </div>

                    <div className='textImgContainer'>                         
                        <img  className='landingImg' alt='light weight icon' src='images/001-dove.svg'/>
                        <div className='text'><h3 className='h3Text'>Hike</h3> Lighter and Faster</div>
                    </div>

                        <button className='startBtn' onClick={()=>{this.props.onStart()}}>
                        <span className='spanStartBtn'>Click to Start</span></button>
                    </div>
                </div>
        )
    }
}