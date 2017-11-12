import React from 'react';
import './Home.css';
import Category from './Category';
import TotalBar from './TotalBar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {connect} from 'react-redux';
import {Route, BrowserRouter as Router} from 'react-router-dom';
export class Home extends React.Component{
super(props){
    constructor(props);
}

render(){    
    return(
        <Router>
            <div className='homePage'>
                <TotalBar/>
                <Route exact path='/signup' component={SignUp}></Route>
                <Route exact path='/signin' component={SignIn}></Route>              
                <Category title='Hiking' thisState={this.props.hiking}/>
                <Category title='Clothing' thisState={this.props.clothing}/>
                <Category title='Navigation' thisState={this.props.navigation}/>
                <Category title='Shelter' thisState={this.props.shelter}/>
                <Category title='Sleep' thisState={this.props.sleep}/>
                <Category title='Cooking' thisState={this.props.cooking}/>
                <Category title='Water' thisState={this.props.water}/>
                <Category title='Hygiene' thisState={this.props.hygiene}/>
                <Category title='First Aid' thisState={this.props.firstAid}/>
                <Category title='Misc' thisState={this.props.misc}/>
            </div>
        </Router>
    )
}

}
    // hiking clothing navigation shelter sleep cooking water hygiene first aid misc

const mapStateToProps = state => ({    
    hiking: state.hiking,
    clothing: state.clothing,
    navigation: state.navigation,
    shelter: state.shelter,
    sleep: state.sleep,
    cooking: state.cooking,
    water: state.water,
    hygiene: state.hygiene,
    firstAid: state.firstAid,
    misc: state.misc
    });        
        
export default connect(mapStateToProps)(Home);