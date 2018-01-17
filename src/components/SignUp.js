import React from 'react';
import './SignUp.css'
import {Link} from 'react-router-dom';
import {API_BASE_URL} from '../config';
export default class  SignUp extends React.Component{
    constructor(props){
        super(props)
    }
    onSubmit(username, password){

        fetch(`${API_BASE_URL}/`),
        {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
            }
    }
    render(){ 
        return (
        <div className='modalBG'>
            <div className='signUpForm'>
                <h3>Sign Up</h3>
                    <form onSubmit={()=>{this.onSubmit(this.username.value, this.password.value)}}>
                        <input ref={(input)=>{this.username = input}} name='username' type='text' placeholder='Username'/>
                        <input ref={(input)=>{this.password = input}} name='password' type='text' placeholder='Password'/>
                        <button type='submit'>Submit</button>
                    </form>
            </div>
        </div>
    )}
   
}