import React, { Component } from "react";
import { connect } from "react-redux";
import AllUserColumn from "./AllUserColumn";
import AllUserBody from "./AllUserBody";
class AllUsers extends Component {
  render() {
    return (
      <div className="container-fluid pt-2 bg-dark text-white">
        <AllUserColumn />
        <AllUserBody />
      </div>
    );
  }
}
const mapStateToPropos = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToPropos)(AllUsers);
