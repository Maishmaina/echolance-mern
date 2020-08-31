import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      description: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      description: this.state.description,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };
  //update state once errors object change
  static getDerivedStateFromProps(props, state) {
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
              <div className="card-header pt-0 pb-0 bg-primary"></div>
              <div className="card-body">
                <h4 className="text-center">Create Accout</h4>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextFieldGroup
                    placeholder="Enter Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextFieldGroup
                    placeholder="Enter Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <TextAreaFieldGroup
                    placeholder="Write about yourself"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                    error={errors.description}
                    info="Talk about key topic that you can handle"
                  />
                  <TextFieldGroup
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                  />
                  <input
                    type="submit"
                    className="btn btn-info btn-block btn-sm mt-1"
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
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
