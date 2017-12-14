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
            // landingPage: true,
            // tracks if user has selected a list
            selectionMade: false,
            // to open delete confirm modal
            deleteConfirm: false
        }
        this.handleChoice = this.handleChoice.bind(this);
        this.seeListsAgain = this.seeListsAgain.bind(this);
    }
// set the initial state of the client by retrieving their selected list
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
//  handle creating a new list with the name chosen by the user
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
        // form for adding new lists
        const newListInput =
         <form className='createListForm' onSubmit={(e)=>{e.preventDefault(); this.handleNewList(this.createListInput.value)}}>
            <input ref={(input)=>{this.createListInput = input}}className='newListInput' type='text' placeholder='Enter New List Name'></input>
            <button className='createListBtn' type='submit'>Create</button>
        </form>

        fetch(`${API_BASE_URL}/list-state/name-list`)
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
    };
// used to allow a user to go back to SelectList screen after they made an initial choice
    seeListsAgain(){
        this.setState({selectionMade: false});
        this.componentWillMount()
    }

    

    render(){    
    // let landingPage;
    let deleteConfirmModal;
    // if(this.state.landingPage){
    //     return (
    //         <div className='modalBG'>
    //         <div className='modal'>Landing Pages Text</div>
    //        </div>
    //     )
    // }

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
                        <div>
                        {/* {landingPage} */}

                        <div className='containerDiv'>
                            <SelectList newListInput={this.state.newListInput} listNames={this.state.listNames}/>
                            {deleteConfirmModal}
                            <NotificationContainer/>
                        </div>
                        </div>
                    )
                 }
            } 
    }

export default connect()(Main);