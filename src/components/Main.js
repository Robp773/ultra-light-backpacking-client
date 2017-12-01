import React from 'react';
import SelectList from './SelectList'
import ListHome from './ListHome'
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectionMade: true,
            // signedIn: true
        }
        this.handleChoice = this.handleChoice.bind(this);
    }
    handleChoice(){
        this.setState({selectionMade: true})
    }
    render(){
        // if the user has signed in, bring up a list of that user's packing lists
        if(this.state.signedIn){
            return (<SelectList onChoice={this.handleChoice}/>)
        }
       else if(this.state.selectionMade)
            return (
                <ListHome/>
            )
        
    }
}