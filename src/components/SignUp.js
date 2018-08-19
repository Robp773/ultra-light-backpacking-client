import React from "react";
import "./SignUp.css";
import { API_BASE_URL } from "../config";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creationFeedback: "" };
  }
  onSubmit(username, password) {
    fetch(`${API_BASE_URL}/users`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: username, password: password })
    }).then(res => {
      res.json().then(resJSON => {
        this.setState({ creationFeedback: resJSON.comment });
        if (!resJSON.taken) {
          NotificationManager.success(`Logged In as ${username}`);
          this.props.onLogin(username);
        }
      });
    });
  }
  login(username, password) {
    fetch(`${API_BASE_URL}/login`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: username, password: password })
    }).then(res => {
      res.json().then(result => {
        if (result.authorized) {
          NotificationManager.success(`Logged In as ${username}`);
          this.props.onLogin(username);
        } else if (!this.props.authorized) {
          this.setState({ creationFeedback: result.comment });
        }
      });
    });
  }
  render() {
    return (
      <div className="modalBG">
        <div className="formsContainer">
          <div className="signInForm">
            <div className="demoDiv">
              <h4 className="demoh4">Demo Account</h4>
              <div>
                <span>
                  <b>Username</b>: "DemoAccount" <b>Password</b>: "demopassword"
                </span>
              </div>
            </div>
            <h3 className="h3Login">Sign In</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.login(this.loginUserId.value, this.loginPassword.value);
              }}
            >
              <input
                required
                className="signUpInput"
                ref={input => {
                  this.loginUserId = input;
                }}
                name="username"
                type="text"
                placeholder="Username"
              />
              <input
                required
                className="signUpInput"
                ref={input => {
                  this.loginPassword = input;
                }}
                name="password"
                type="text"
                placeholder="Password"
              />
              <button className="submitLogin" type="submit">
                Submit
              </button>
            </form>
          </div>

          <span className="orSpan">OR</span>

          <div className="signUpForm">
            <h3 className="h3Login">Sign Up</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.onSubmit(this.username.value, this.password.value);
              }}
            >
              <input
                required
                className="signUpInput"
                ref={input => {
                  this.username = input;
                }}
                name="username"
                type="text"
                placeholder="Username"
              />
              <input
                required
                className="signUpInput"
                ref={input => {
                  this.password = input;
                }}
                name="password"
                type="text"
                placeholder="Password"
              />
              <button className="submitLogin" type="submit">
                Submit
              </button>
            </form>
            <div className="creationFeedback">
              {this.state.creationFeedback}
            </div>
          </div>
        </div>
        <NotificationContainer />
      </div>
    );
  }
}
