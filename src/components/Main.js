import React from 'react';
import SelectList from './SelectList';
import ListHome from './ListHome';
import {API_BASE_URL} from '../config';
import {connect} from 'react-redux';
import {setListState} from '../actions.js';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import LandingModal from './LandingModal';
import SignUp from './SignUp';

export class Main extends React.Component{
    constructor(props){
         super(props);
            this.state = {
            activeUser: null,
            // tracks if user has selected a list
            selectionMade: false,
            // to open delete confirm modal
            deleteConfirm: false,
            // to determine if landing page is visible
            landingPage: true,
            loggedIn: false
        }
        this.handleChoice = this.handleChoice.bind(this);
        this.seeListsAgain = this.seeListsAgain.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
// set the initial state of the client by retrieving their selected list
    handleChoice(listName){
        // ${this.state.activeUser}
        fetch(`${API_BASE_URL}/list-state/${listName}`)
        .then((res)=>{
            res.json()
            .then((resJSON)=>{        
                this.props.dispatch(setListState(resJSON))
            })
        })
        this.setState({selectionMade: true})
    }
//  handle creating a new list with the name chosen by the user
    handleNewList(value, userId){
        if(value === ''){
            return NotificationManager.error('Please enter a name.')
        }
        else{
        fetch(`${API_BASE_URL}/list-state`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({listName: value, userId: userId})
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
        // set the selected name to state to be used after confirmation for a delete request
        //  show delete confirm modal
        deleteConfirm(listName){
            this.setState({listToDelete: listName, deleteConfirm: true})
        }
        // when the user has confirmed send the delete request
        handleDelete(listName){
            fetch(`${API_BASE_URL}/list-state/${listName}`, {method: 'delete'})
            .then(()=>{
                this.componentWillMount()
            })
            .then(()=>{
                this.setState({deleteConfirm: false})
            })
        }
    // before mounting, make a GET request to retrieve the a list of all packing list names
    componentWillMount(){
       
    };
    // used to allow a user to go back to SelectList screen after they made an initial choice
    seeListsAgain(){
        this.setState({selectionMade: false});
        this.onLogin(this.state.activeUser)    
    }
    onStart(){
        this.setState({landingPage: false})
    }
    onLogin(username){
        this.setState({loggedIn: true, activeUser: username})
        
         // form for adding new lists
         const newListInput =
         <form className='createListForm' onSubmit={(e)=>{e.preventDefault(); this.handleNewList(this.createListInput.value, this.state.activeUser)}}>
            <input ref={(input)=>{this.createListInput = input}}className='newListInput' type='text' placeholder='Enter New List Name'></input>
            <button className='createListBtn' type='submit'>Create</button>
        </form>

        fetch(`${API_BASE_URL}/list-state/name-list/${this.state.activeUser}`)
        .then((res)=>{           
         res.json()
            .then((resJSON)=>{
                 //  for each list name, create a section displaying the name and total weight/item number
                 const listNameDivs = resJSON.map((list, index)=>{
                    return (
                            <div className='overviewParent' key={index} onClick={()=>{this.handleChoice(list.listName)}}>
                                <div className='overviewName'><b>{list.listName}</b></div> 
                                <div className='overview'> {list.itemTotal}<b> Items</b></div>
                                <div className='overview'>{list.weightTotal}<b> lbs</b></div>
                                <button className='deleteBtn' onClick={(e)=>{e.stopPropagation(); 
                                    this.deleteConfirm(list.listName)
                                }}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                            )
                });
                // set state so these sections can be accessed in the render function
                this.setState({listNames: listNameDivs, newListInput: newListInput});
            })
        })
        
    }

    render(){    
        console.log(this.state.activeUser)
    let landingModal;
    let loggedIn;

    if(!this.state.loggedIn){
        loggedIn = <SignUp onLogin={this.onLogin}/>
    }
    if(this.state.landingPage){
        landingModal = <LandingModal onStart={()=>this.onStart()}/>
    }
    let deleteConfirmModal;

    if(this.state.deleteConfirm){
        deleteConfirmModal = <div className='deleteModal'>
                                <div>Confirm Deletion</div>
                                <button onClick={()=>{this.handleDelete(this.state.listToDelete, NotificationManager.warning(`${this.state.listToDelete} Deleted`))}}>Confirm</button>
                                <button onClick={()=>{this.setState({deleteConfirm: false})}}>Cancel</button>
                            </div>
    }
    //  if user has made a choice to select a specific list, display that list
    if(this.state.selectionMade){
        return (
                <div>
                    <ListHome seeListsAgain = {this.seeListsAgain}/>
                    <NotificationContainer/>
                </div>
                )
        }
        // otherwise display the list of lists
        else {
                return (                            
                    <div className='containerDiv'>                        
                        {loggedIn}
                        {landingModal}
                        <SelectList newListInput={this.state.newListInput} listNames={this.state.listNames}/>
                        {deleteConfirmModal}
                        <NotificationContainer/>
                    </div>
                )
            }
        } 
    }

export default connect()(Main);