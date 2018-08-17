import React from "react";
import "./TotalBar.css";
import { connect } from "react-redux";
import { updateGoal, openClose } from "../actions";
import { API_BASE_URL } from "../config";
import "react-notifications/lib/notifications.css";
import Feedback from "./Feedback.js";
import ChartModal from "./ChartModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class TotalBar extends React.Component {
  // if the user changes the goal weight input, update the state
  handleInputChange(value) {
    const dispatchPromise = () =>
      new Promise((resolve, reject) => {
        this.props.dispatch(updateGoal(value));
        resolve();
      });

    dispatchPromise().then(() => {
      fetch(`${API_BASE_URL}/list-state/${this.props.fullState.listName}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.props.fullState)
      });
    });
    this.props.dispatch(updateGoal(value));
  }
  // allow the user to see the SelectLists component again
  handleListsClick() {
    this.props.seeListsAgain();
  }

  handleChartsClick() {
    this.props.dispatch(openClose("chartsModal"));
  }

  render() {

    let chartModal;
    let totalsObj = this.props.totals;
    let totalLbs, weightClass, feedback;
    let weightGoal = this.props.fullState.weightGoal;
    let exceededNum = weightGoal - totalLbs;

    totalLbs = Number(totalsObj.totalWeight.toFixed(2));

    if (this.props.fullState.ui.chartsModal) {
      chartModal = <ChartModal totalListWeight={totalLbs} fullState={this.props.fullState} />;
    }
    // setting weightClass variable depending on the total pack weight
    if (totalLbs === 0) {
      weightClass = "Waiting for Items";
    } else if (totalLbs <= 5) {
      weightClass = "Super Ultralight";
    } else if (totalLbs <= 10) {
      weightClass = "Ultralight";
    } else if (totalLbs <= 15) {
      weightClass = "Lightweight";
    } else if (totalLbs <= 30) {
      weightClass = "Standard Weight";
    } else if (totalLbs > 30) {
      weightClass = "Heavy Weight";
    }
    // setting feedback variable to help direct user action
    if (totalsObj.totalItems === 0) {
      feedback = "Please Add Some Items to the List";
    } else if (weightGoal === 0) {
      feedback = "Please Set a Weight Goal.";
    } else if (weightGoal === totalLbs) {
      feedback = "Goal Reached!";
    } else if (totalLbs < weightGoal) {
      feedback = `Goal Exceeded by ${exceededNum.toFixed(2)} lbs`;
    } else {
      feedback = `${(totalLbs - weightGoal).toFixed(
        2
      )} lbs to drop to meet goal weight.`;
    }

    return (
      <div className="totalBarContainer">
        {chartModal}
        <div className="totalContainer">
          <button
            className="headerBtns listBtn"
            onClick={() => {
              this.handleListsClick();
            }}
          >
            <FontAwesomeIcon icon="list-alt" />
          </button>
          <header>Pack Light</header>

          <button
            className="headerBtns chartBtn"
            onClick={() => {
              this.handleChartsClick();
            }}
          >
            <FontAwesomeIcon icon="chart-pie" />
          </button>

          <h3>{this.props.listName}</h3>
          <div className="statsParent">
            <div className="">{totalLbs} Total lbs</div>

            <div className="">{totalsObj.totalItems} Items </div>

            <div className=""> Class: {weightClass}</div>

            <div className="">
              <label className="">Weight Goal: </label>
              <input
                ref={input => (this.goalInput = input)}
                className="setGoal"
                placeholder={totalsObj.weightGoal}
                onChange={() => {
                  this.handleInputChange(Number(this.goalInput.value));
                }}
              />
              lbs
            </div>
            <Feedback feedback={feedback} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fullState: state,
  listName: state.listName
});

export default connect(mapStateToProps)(TotalBar);
