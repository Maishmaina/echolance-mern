import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllFrontUsers } from "../../../actions/authActions";
import Spinner from "../../common/Spinner";
class AllUserBody extends Component {
  componentDidMount() {
    this.props.getAllFrontUsers();
  }
  render() {
    const { allUsers, loadinguser } = this.props.auth;
    let userContent;
    if (allUsers.length === 0 && loadinguser) {
      userContent = <Spinner />;
    } else {
      userContent = allUsers.map((user, i) => (
        <div
          key={user._id}
          className="row mt-1 text-capitalize text-center align-item-center"
        >
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">NO.</span>
              {i + 1}
            </p>
          </div>
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">Img:</span>
              <img
                className="rounded-circle align-item-center"
                style={{ width: "50px" }}
                src={user.avatar}
                alt="user"
              />
            </p>
          </div>
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">Name:</span>
              {user.name}
            </p>
          </div>
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">Phone.</span>
              {user.phone}
            </p>
          </div>
          <div className="col-10 col-lg-2 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">Email.</span>
              {user.email}
            </p>
          </div>
          <div className="col-10 col-lg-3 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">Description:</span>
              {user.description}
            </p>
          </div>
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <p>
              <span className="d-lg-none font-weight-bold">Verified.</span>
              {user.verify}
            </p>
          </div>
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <button className="btn btn-outline-warning btn-sm">
              <span className="d-lg-none font-weight-bold">Update:</span>action
            </button>
          </div>
          <div className="col-10 col-lg-1 mx-auto border border-light py-1">
            <button className="btn btn-outline-danger btn-sm">
              <span className="d-lg-none font-weight-bold">Remove:</span>Delete
            </button>
          </div>
        </div>
      ));
    }
    return <>{userContent}</>;
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { getAllFrontUsers })(AllUserBody);
