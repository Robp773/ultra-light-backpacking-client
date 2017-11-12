import React from 'react';
import './SignUp.css'
import {Link, Route} from 'react-router-dom';

export default function SignUp(props){
    return (
        <div className='modalBG'>
        <div className='signUpForm'>
            <h3>Sign Up</h3>
            <form>
                <Link to='/'><button className='exitBtn'>x</button></Link>
                <input name='first' type='text' placeholder='First Name'/>
                <input name='last 'type='text' placeholder='Last Name'/>
                <input name='username' type='text' placeholder='Username'/>
                <input name='password' type='text' placeholder='Password'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}