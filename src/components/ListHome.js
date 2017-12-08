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
    console.log('ListHome rendered')
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
    const listArray = [hiking, clothing, navigation, shelter, sleep, cooking, water, hygiene, firstAid, misc];

    listArray.map(function(arrayCategory){

        for(let i =0; i<arrayCategory.length; i++){
              const numberItem = Number(arrayCategory[i].weight);     
              totalWeight += numberItem;
           
        }
       return  totalItems += arrayCategory.length;
    })        

    totalWeight = totalWeight * .0625;
    const totals = {totalItems: totalItems, totalWeight: totalWeight, weightGoal: this.props.fullState.weightGoal} 
 
         return(
            <div className='homePage'>
                <TotalBar seeListsAgain={this.props.seeListsAgain} totals={totals} />
                <Category title='Hiking' thisState={this.props.hiking}/>
                <Category title='Clothing' thisState={this.props.clothing}/>
                <Category title='Navigation' thisState={this.props.navigation}/>
                <Category title='Shelter' thisState={this.props.shelter}/>
                <Category title='Sleep' thisState={this.props.sleep}/>
                <Category title='Cooking' thisState={this.props.cooking}/>
                <Category title='Water' thisState={this.props.water}/>
                <Category title='Hygiene' thisState={this.props.hygiene}/>
                <Category title='First Aid' thisState={this.props.firstaid}/>
                <Category title='Misc' thisState={this.props.misc}/>
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