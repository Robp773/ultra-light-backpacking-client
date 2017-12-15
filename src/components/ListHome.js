import React from 'react';
import './ListHome.css';
import Category from './Category';
import TotalBar from './TotalBar';
import {connect} from 'react-redux';
export class ListHome extends React.Component{
super(props){
    constructor(props);
}

render(){ 
     console.log(this.props.fullState)

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
    const firstAid = this.props.firstaid;
    const misc = this.props.misc;
    // relevant parts of state needed for calculating the total list weights and item counts 
    // (weightGoal and listname excluded)
    let listArray = [hiking, clothing, navigation, shelter, sleep, cooking, water, hygiene, firstAid, misc];

    listArray.map((arrayCategory)=>{

        for(let i =0; i<arrayCategory.length; i++){
        // add each objects weight property to the weight counter
              const numberItem = Number(arrayCategory[i].weight);     
              totalWeight += numberItem; 
        }
        // add to the totalItems counter the length of the list
       return  totalItems += arrayCategory.length;
    })        
    // change the ozs count to lbs
    totalWeight = totalWeight * .0625;
    // totals object is passed into TotalBar component
    const totals = {totalItems: totalItems, totalWeight: totalWeight, weightGoal: this.props.fullState.weightGoal} 
//  each Category component represents one part of the state 
// (ex - category with hiking title prop=== state.hiking array)
         return(
            <div className='homePage'>
                <TotalBar seeListsAgain={this.props.seeListsAgain} totals={totals} />
                <Category title='Hiking' imgSrc={'images/category-icons/010-trekking.svg'} thisState={this.props.hiking}/>
                <Category title='Clothing' imgSrc={'images/category-icons/009-garment.svg'} thisState={this.props.clothing}/>
                <Category title='Navigation' imgSrc={'images/category-icons/008-compass.svg'} thisState={this.props.navigation}/>
                <Category title='Shelter' imgSrc={'images/category-icons/007-camping.svg'} thisState={this.props.shelter}/>
                <Category title='Sleep' imgSrc={'images/category-icons/006-sleep.svg'} thisState={this.props.sleep}/>
                <Category title='Cooking' imgSrc={'images/category-icons/005-chocolate.svg'} thisState={this.props.cooking}/>
                <Category title='Water' imgSrc={'images/category-icons/004-water-drop.svg'} thisState={this.props.water}/>
                <Category title='Hygiene' imgSrc={'images/category-icons/003-soap.svg'} thisState={this.props.hygiene}/>
                <Category title='First Aid' imgSrc={'images/category-icons/002-first-aid-kit.svg'} thisState={this.props.firstaid}/>
                <Category title='Misc' imgSrc={'images/category-icons/001-lagoon.svg'} thisState={this.props.misc}/>
            </div>
    )
}

}
const mapStateToProps = state => ({
    fullState: state,
    listName: state.listName,   
    hiking: state.hiking,
    clothing: state.clothing,
    navigation: state.navigation,
    shelter: state.shelter,
    sleep: state.sleep,
    cooking: state.cooking,
    water: state.water,
    hygiene: state.hygiene,
    firstaid: state.firstaid,
    misc: state.misc
    });        
        
export default connect(mapStateToProps)(ListHome);