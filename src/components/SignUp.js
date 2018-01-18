import React from 'react';
import './SignUp.css'
import {API_BASE_URL} from '../config';

export default class  SignUp extends React.Component{
    constructor(props){
        super(props)
        this.state = {creationFeedback: ''}
    }
    onSubmit(username, password){
        fetch(`${API_BASE_URL}/users`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId: username, password: password})
            })
            .then((res)=>{
                res.json()
                .then((resJSON)=>{     
                    console.log(resJSON)               
                    this.setState({creationFeedback: resJSON.comment})
                    if(!resJSON.taken){
                        console.log('not taken???')
                        this.props.onLogin(username)
                    }
                })
            })
    }
    login(username, password){     
        console.log('asdasdas') 
        fetch(`${API_BASE_URL}/login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userId: username, password: password})
            })
            .then((res)=>{
            res.json()      
            .then((result)=>{
                console.log(result.authorized)
                if(result.authorized){
                    this.props.onLogin(username)
                }
                else if(!this.props.authorized){
                    this.setState({creationFeedback: result.comment})
                }
                
            })   
        })
        
    }
    render(){ 
        return (
        <div className='modalBG'>
            <div className='formsContainer'>
                <div className='signInForm'>
                    <h3>Sign In</h3>
                    <form onSubmit={(e)=>{e.preventDefault(), this.login(this.loginUserId.value, this.loginPassword.value)}}>
                        <input ref={(input)=>{this.loginUserId = input}} className='signUpInput' name='username' type='text' placeholder='Username'/>
                        <input ref={(input)=>{this.loginPassword = input}} className='signUpInput' name='password' type='text' placeholder='Password'/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>

                <div className='signUpForm'>
                    <h3>Sign Up</h3>
                        <form onSubmit={(e)=>{e.preventDefault(), this.onSubmit(this.username.value, this.password.value)}}>
                            <input className='signUpInput' ref={(input)=>{this.username = input}} name='username' type='text' placeholder='Username'/>
                            <input className='signUpInput' ref={(input)=>{this.password = input}} name='password' type='text' placeholder='Password'/>
                            <button type='submit'>Submit</button>
                        </form>            
                        <div className='creationFeedback'>{this.state.creationFeedback}</div>
                        <span className='orSpan'>OR</span>

                    </div>
                </div>
        </div>
    )}
   
}