import React from 'react';
import SelectList from './SelectList';
import ListHome from './ListHome';
import {API_BASE_URL} from '../config';
import {connect} from 'react-redux';
import {setListState} from '../actions.js';
import {NotificationContainer, NotificationManager} from 'react-notifications';




export class Main extends React.Component{
    constructor(props){
         super(props);
        this.state = {
            selectionMade: false,
            // signedIn: true
        }
        this.handleChoice = this.handleChoice.bind(this);
        this.seeListsAgain = this.seeListsAgain.bind(this);
    }
// set the initial state of the client by retrieving the selected list
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

    handleNewList(value){
        if(value === ''){
            return NotificationManager.error('Please enter a name.')
        }
        else{
        fetch(`${API_BASE_URL}/list-state`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({listName: value})
            })
            .then((res)=>{
                res.json()
                .then((resJSON)=>{
                    this.props.dispatch(setListState(resJSON))       
                })
            })
            this.setState({selectionMade: true})
            
        }
        }
        handleDelete(value, notification){
            fetch(`${API_BASE_URL}/list-state/${value}`, {method: 'delete'})
            .then(()=>{
                this.componentWillMount()
            })
        }
    // make a GET request to retrieve the overview of lists created by user
    componentWillMount(){
        
        const newListInput =
         <form onSubmit={(e)=>{e.preventDefault(); this.handleNewList(this.createListInput.value)}}>
            <input ref={(input)=>{this.createListInput = input}}className='newListInput' type='text' placeholder='Enter New List Name'></input>
            <button type='submit'>Create</button>
        </form>

        fetch(`${API_BASE_URL}/list-state/name-list`)
        .then((res)=>{           
            res.json()
            .then((resJSON)=>{            
                 const listNameDivs = resJSON.map((list, index)=>{
                    return (
                            <div className='overviewParent' key={index} onClick={()=>{this.handleChoice(list.listName)}}>
                                <div className='overviewName'><b>{list.listName}</b></div> 
                                <div className='overview'> {list.itemTotal}<b> Items</b></div>
                                <div className='overview'>{list.weightTotal}<b> lbs</b></div>
                                <button className='deleteBtn' onClick={(e)=>{e.stopPropagation(); 
                                    this.handleDelete(list.listName)
                                    NotificationManager.warning('List Deleted');        
                                }}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                            )
                });
                this.setState({listNames: listNameDivs, newListInput: newListInput});
            })
        })
    };

    seeListsAgain(){
        this.setState({selectionMade: false});
    }

    

    render(){
            if(this.state.selectionMade) return (
            <div>
            <ListHome seeListsAgain = {this.seeListsAgain}/>)
            <NotificationContainer/>
            </div>
            )

            else {
                    return (
                        <div>
                            <SelectList newListInput={this.state.newListInput} listNames={this.state.listNames}/>
                            <NotificationContainer/>
                        </div>
                    )
                 }
            } 
    }

export default connect()(Main);