import React from "react";
import "./AddForm.css";
import { connect } from "react-redux";
import { addItem } from "../actions";
import { NotificationManager } from "react-notifications";
import { API_BASE_URL } from "../config";

export class AddForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const name = this.inputName.value;
    const weight = Number(this.inputWeight.value);
    const importance = this.inputImportance.value;

    let inputArray = [name, weight, importance];
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === "") {
        NotificationManager.warning("Please fill in all fields.");
        return;
      }
    }

    const readiedTitle = this.props.title.toLowerCase().replace(/\s+/g, "");

    const dispatchPromise = () =>
      new Promise((resolve, reject) => {
        this.props.dispatch(addItem(name, weight, importance, readiedTitle));
        resolve();
      });

    dispatchPromise().then(() => {
      fetch(`${API_BASE_URL}/list-state/${this.props.listName}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.props.fullState)
      });
    });

    // reset form inputs
    document.getElementsByClassName("addForm")[0].reset();
  }

  render() {
    return (
      <form
        className={`addForm ${this.props.title.toLowerCase()}FormBG`}
        onClick={e => {
          e.stopPropagation();
        }}
        onSubmit={e => {
          this.onSubmit(e);
        }}
      >
        <input
          ref={input => {
            this.inputName = input;
          }}
          className="addInputName"
          name="name"
          type="text"
          placeholder="Item Name"
        />
        <input
          ref={input => {
            this.inputWeight = input;
          }}
          className="addInputWeight"
          name="weight"
          type="number"
          placeholder="ozs"
        />
        <select
          ref={input => {
            this.inputImportance = input;
          }}
          className="addInputImportance"
          name="importance"
        >
          <option value="" selected>
            Priority
          </option>
          <option value="critical">Critical</option>
          <option value="important">Important</option>
          <option value="unimportant">Unimportant</option>
        </select>

        <button
          className="addFormSubmit"
          type="submit"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default connect()(AddForm);
