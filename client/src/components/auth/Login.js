import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

import TextFieldGroup from "../common/TextFieldGroup";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };
  static getDerivedStateFromProps(props, state) {
    if (props.auth.isAuthenticated) {
      props.history.push("/myaccount");
    }
    if (props.errors !== state.errors) {
      return {
        errors: props.errors,
      };
    }
    return null;
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="container-fluid pt-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mx-auto">
            <div className="card">
              <div className="card-header pt-0 pb-0 bg-success"></div>
              <div className="card-body">
                <h4 className="text-center">Login to Your A/c</h4>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="Enter Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <input
                    type="submit"
                    className="btn btn-success btn-block btn-sm mt-1"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
