import React from "react";
import "./Feedback.css";

export default class Feedback extends React.Component {
  render() {
    return (
      <div id="feedbackParent">
        {this.props.feedback}
      </div>
    );
  }
}
