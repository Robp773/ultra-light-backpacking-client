import React from "react";
import "./AddForm.css";
import { connect } from "react-redux";
import { addItem } from "../actions";
import { NotificationManager } from "react-notifications";

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

    // filtered title so it can be used to match with state properties
    // ex. - First Aid = firstaid
    const readiedTitle = this.props.title.toLowerCase().replace(/\s+/g, "");
    this.props.dispatch(addItem(name, weight, importance, readiedTitle));
    // reset form inputs
    document.getElementById("addForm").reset();
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
