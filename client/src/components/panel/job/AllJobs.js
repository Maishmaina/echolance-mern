import React, { Component } from "react";
import { connect } from "react-redux";
class AllJobs extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth;

    return (
      <div>
        <h2>Display All Jobs Here With modification power</h2>
        {isAuthenticated && console.log(user.role)}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(AllJobs);
