import React from 'react';
import './SignIn.css'
import {Link, Route} from 'react-router-dom';

export default function SignIn(props){
    return (
        <div className='modalBG'>
        <div className='signInForm'>
            <h3>Sign Up</h3>
            <form>
                <Link to='/'><button className='exitBtn'>x</button></Link>
                <input name='username' type='text' placeholder='Username'/>
                <input name='password' type='text' placeholder='Password'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}