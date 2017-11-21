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
    let totalWeight = 0;
    let totalItems = 0;
    const hiking = this.props.hiking;
    const clothing = this.props.clothing;
    const navigation = this.props.navigation;
    const shelter = this.props.shelter;
    const sleep = this.props.sleep;
    const cooking = this.props.cooking;
    const water = this.props.water;
    const hygiene = this.props.hygiene;
    const firstAid = this.props.firstAid;
    const misc = this.props.misc
    
    const listArray = [hiking, clothing, navigation, shelter, sleep, cooking, water, hygiene, firstAid, misc]

    listArray.map(function(item){
        for(let i =0; i<item.length; i++){
        
            const numberItem = Number(item[i].weight)
                 totalWeight += numberItem
                 

        }
        totalItems += item.length
        
      
   
    })
    
    //   console.log(totalWeight)
    //     console.log(totalItems + 'items')
         const totals = {totalItems: totalItems, totalWeight: totalWeight, weightGoal: this.props.fullState.weightGoal}
        //  return totals
    
    return(
        <Router>
            <div className='homePage'>
                <TotalBar totals={totals}  totalWeight={totalWeight} />
                <Route exact path='/signup' component={SignUp}></Route>
                <Route exact path='/signin' component={SignIn}></Route>              
                <Category title='Hiking' thisState={hiking}/>
                <Category title='Clothing' thisState={clothing}/>
                <Category title='Navigation' thisState={navigation}/>
                <Category title='Shelter' thisState={shelter}/>
                <Category title='Sleep' thisState={sleep}/>
                <Category title='Cooking' thisState={cooking}/>
                <Category title='Water' thisState={water}/>
                <Category title='Hygiene' thisState={hygiene}/>
                <Category title='First Aid' thisState={firstAid}/>
                <Category title='Misc' thisState={misc}/>
            </div>
        </Router>
    )
}

}
    // hiking clothing navigation shelter sleep cooking water hygiene first aid misc

const mapStateToProps = state => ({
    fullState: state,    
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