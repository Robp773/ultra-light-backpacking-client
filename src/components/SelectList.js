import React from "react";
import "./SelectList.css";
export default class SelectList extends React.Component {
  render() {
    return (
      <div>
        <div className="listBody">
          <div className="listNamesParent">
            <header>Pack Light</header>
            <h3 className="selectH3">Select a List</h3>
            {this.props.newListInput}
            {this.props.listNames}
          </div>
        </div>
      </div>
    );
  }
}
