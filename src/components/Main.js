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
// set the initial state of the client by getting the retrieving the selected list
    handleChoice(listName){
        fetch(`${API_BASE_URL}/list-state/${listName}`)
        .then((res)=>{
            res.json()
            .then((resJSON)=>{        
                this.props.dispatch(setListState(resJSON))
            })
        })
        this.setState({selectionMade: true})
    }
    // make a GET request to retrieve the overview of lists created by user
    componentWillMount(){
        fetch(`${API_BASE_URL}/list-state/name-list`)
        .then((res)=>{           
            res.json()
            .then((resJSON)=>{            
                 const listNameDivs = resJSON.map((list, index)=>{

                    return (
                            <div className='overviewParent' key={index} onClick={()=>{this.handleChoice(list.listName)}}>
                                <div className='overview'><b>{list.listName}</b></div> 
                                <div className='overview'>{list.itemTotal}<b> Items</b></div>
                                <div className='overview'>{list.weightTotal}<b> lbs</b></div>
                            </div>
                            )
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