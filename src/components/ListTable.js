import React from "react";
import "./ListTable.css";
import { connect } from "react-redux";
import { updateItem, deleteItem } from "../actions";
import { NotificationManager } from "react-notifications";

import { API_BASE_URL } from "../config";

export class ListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false
    };
  }

  handleChange(values, index) {
    const dispatchPromise = () =>
      new Promise((resolve, reject) => {
        this.props.dispatch(
          updateItem(values, index, this.props.title.toLowerCase())
        );
        resolve();
      });

    dispatchPromise().then(() => {
      fetch(`${API_BASE_URL}/list-state/${this.props.fullState.listName}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.props.fullState)
      });
    });
  }

  handleDeleteClick(index) {
    // open alert modal
    NotificationManager.warning("Item Deleted");

    const dispatchPromise = () =>
      new Promise((resolve, reject) => {
        this.props.dispatch(deleteItem(this.props.title.toLowerCase(), index));
        resolve();
      });

    dispatchPromise().then(() => {
      fetch(`${API_BASE_URL}/list-state/${this.props.fullState.listName}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.props.fullState)
      });
    });
  }

  render() {
    let displayItems;
    displayItems = this.props.thisState.map((item, index) => {
      // for CategoryTotal component
      // for creating a unique ref for each input depending on it's index
      const name = "name" + index;
      const weight = "weight" + index;
      const importance = "importance" + index;
      return (
        <fieldset
          key={index}
          onChange={() => {
            this.handleChange(
              {
                name: this[name].value,
                weight: this[weight].value,
                importance: this[importance].value
              },
              index
            );
          }}
        >
          <div className="fieldParent">
            <input
              className="listInput nameInput"
              ref={input => {
                this[name] = input;
              }}
              type="text"
              onClick={e => {
                e.stopPropagation();
              }}
              value={item.name}
              onChange={() => {
                this.setState({ change: !this.state.change });
              }}
            />

            <input
              className="listInput weightInput"
              ref={input => {
                this[weight] = input;
              }}
              type="number"
              onClick={e => {
                e.stopPropagation();
              }}
              value={item.weight}
              onChange={() => {
                this.setState({ change: !this.state.change });
              }}
            />

            <select
              className="listInput selectInput"
              ref={input => {
                this[importance] = input;
              }}
              onClick={e => {
                e.stopPropagation();
              }}
              value={item.importance}
              selected={item.importance}
              onChange={() => {
                this.setState({ change: !this.state.change });
              }}
            >
              <option value="critical">Critical</option>
              <option value="important">Important</option>
              <option value="unimportant">Unimportant</option>
            </select>
            <button
              className="deleteBtn"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                this.handleDeleteClick(index);
              }}
            >
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
          </div>
        </fieldset>
      );
    });

    if (this.props.thisState.length === 0) {
      displayItems = (
        <div className="emptyListDiv">
          <div>This list needs some items...</div>
        </div>
      );
    }
    return (
      <div className="scrollableParent">
        <form className={`listItemForm ${this.props.title.toLowerCase()}BG`}>
          {displayItems}
        </form>
      </div>
    );
  }
}
export default connect()(ListTable);
