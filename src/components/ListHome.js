import React from "react";
import "./ListHome.css";
import Category from "./Category";
import TotalBar from "./TotalBar";
import { connect } from "react-redux";
import { CATEGORIES, IMAGES } from "../helpers/Categories";

export class ListHome extends React.Component {
  super(props) {
    constructor(props);
  }

  render() {
    const categories = {
      hiking: this.props.hiking,
      clothing: this.props.clothing,
      sleep: this.props.sleep,
      cooking: this.props.cooking,
      water: this.props.water,
      hygiene: this.props.hygiene,
      navigation: this.props.navigation,
      shelter: this.props.shelter,
      firstAid: this.props.firstaid,
      misc: this.props.misc
    };
    let totalItems = 0;
    let categoryKeys = Object.keys(categories);
    let {
      hiking,
      clothing,
      navigation,
      sleep,
      cooking,
      water,
      hygiene,
      shelter,

      firstaid,
      misc
    } = this.props.fullState;
    let categoriesArray = [
      hiking,
      clothing,
      navigation,
      sleep,
      cooking,
      water,
      hygiene,
      shelter,

      firstaid,
      misc
    ];
    categoriesArray.map(category => {
      totalItems = totalItems + category.length;
      return totalItems;
    });
    let totalWeight = categoryKeys.reduce((accumulator, category) => {
      return (accumulator += categories[category].reduce(
        (accumulator, item) => {
          return (accumulator += Number(item.weight));
        },
        0
      ));
    }, 0);
    // change the ozs count to lbs
    totalWeight *= 0.0625;
    // totals object is passed into TotalBar component
    const totals = {
      totalItems: totalItems,
      totalWeight: totalWeight,
      weightGoal: this.props.fullState.weightGoal
    };
    let renderCategories = categoryKeys.map(category => {
      let categoryTitle = CATEGORIES[category];
      let categoryImage = IMAGES[category];
      return (
        <Category
          listName={this.props.listName}
          fullState={this.props.fullState}
          key={category}
          title={categoryTitle}
          imgSrc={`images/category-icons/${categoryImage}`}
          thisState={categories[category]}
        />
      );
    });

    return (
      <div className="homePage">
        <TotalBar seeListsAgain={this.props.seeListsAgain} totals={totals} />
        <div id='wrapper'>
        {renderCategories}
        </div>
      </div>
    );
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
