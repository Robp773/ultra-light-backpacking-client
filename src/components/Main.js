import React from 'react';
import SelectList from './SelectList';
import ListHome from './ListHome';
import {API_BASE_URL} from '../config';
import {connect} from 'react-redux';
import {setListState} from '../actions.js'

export class Main extends React.Component{
    constructor(props){
         super(props);
        this.state = {
            selectionMade: false,
            // signedIn: true
        }
        this.handleChoice = this.handleChoice.bind(this);
    }

    handleChoice(listName){
        fetch(`${API_BASE_URL}/list-state/${listName.listName}`)
        .then((res)=>{
            res.json()
            .then((resJSON)=>{
                this.props.dispatch(setListState(resJSON))
            })
        })
        this.setState({selectionMade: true})
    }
    componentWillMount(){
        fetch(`${API_BASE_URL}/list-state/name-list`)
        .then((res)=>{
            res.json()
            .then((resJSON)=>{
              const listNameDivs = resJSON.map((listName, index)=>{
                    return (<div className='listNameDiv' key={index} onClick={()=>{this.handleChoice({listName})}}>{listName}</div>)
                });
                this.setState({listNames: listNameDivs});
            })
        })
    };

    render(){

            if(this.state.selectionMade) return (<ListHome />)

            else {
                    return <SelectList listNames={this.state.listNames}/>
                 }
            } 
    }

export default connect()(Main);