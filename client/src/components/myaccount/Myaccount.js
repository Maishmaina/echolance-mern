import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  getProposalByUserId,
  uploadProposalFile,
  clearErrors,
  setLoadingFalse,
} from "../../actions/proposalAction";
import MyaccColunm from "./MyaccColumn";
import Spinner from "../common/Spinner";
class Myaccount extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }
  componentDidMount() {
    this.props.getProposalByUserId(this.props.auth.user.id);
  }
  onChange = (e) => {
    this.props.clearErrors();
    this.props.setLoadingFalse();
    const value = e.target.files[0];
    this.setState({ file: value });
  };
  handleSubmit = (proposalId) => (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file);
    this.props.uploadProposalFile(
      this.props.auth.user.id,
      proposalId,
      formData
    );
  };
  render() {
    const { user } = this.props.auth;
    const { proposals, loadingproposal } = this.props.proposals;
    const { errors } = this.props.errors;
    let MyProposal;
    if (proposals.length === 0 && loadingproposal) {
      MyProposal = <Spinner />;
    } else if (proposals.length === 0 && !loadingproposal) {
      MyProposal = (
        <div className="card">
          <div className="card-body">
            <div className="text-danger">
              <i className="fa fa-exclamation fa-2x" /> Hello and Welcome you
              have not yet send any offer currently
            </div>
          </div>
        </div>
      );
    } else {
      MyProposal = proposals.map((proposal, i) => (
        <Fragment key={i}>
          <div className="row m-1 text-capitalize text-center align-item-center">
            <div className="col-10 col-lg-1 mx-auto border border-dark">
              <p>
                <span className="d-lg-none font-weight-bold">No:</span> {i + 1}
              </p>
            </div>
            <div className="col-10 col-lg-3 mx-auto border border-dark">
              <p>
                <span className="d-lg-none font-weight-bold">Title: </span>
                <Link className="text-info" to={`/job/${proposal.job._id}`}>
                  {" "}
                  {proposal.job.title}
                </Link>
              </p>
            </div>
            <div className="col-10 col-lg-1 mx-auto border border-dark">
              <p>
                <span className="d-lg-none font-weight-bold">Duration: </span>
                {proposal.job.duration}
              </p>
            </div>
            <div className="col-10 col-lg-1 mx-auto border border-dark">
              <p>
                <span className="d-lg-none font-weight-bold">Budget: </span>
                {proposal.job.budget}
              </p>
            </div>
            <div
              className={classnames(
                "col-10 col-lg-2 mx-auto border border-dark py-2",
                {
                  "text-danger": proposal.status === "pending",
                  "text-info": proposal.status === "active",
                  "text-success": proposal.status === "delivered",
                }
              )}
            >
              <p>
                <span className="d-lg-none font-weight-bold">Status: </span>
                {proposal.status}
              </p>
            </div>
            <div className="col-10 col-lg-4 mx-auto border border-dark py-2">
              <div>
                <span className="d-lg-none font-weight-bold">Actions: </span>
                {proposal.status === "pending" && (
                  <p className="text-danger">Wait for approval</p>
                )}
                {proposal.status === "active" && (
                  <>
                    <form onSubmit={this.handleSubmit(proposal._id)}>
                      <input
                        type="file"
                        className="text-info"
                        name="file"
                        onChange={this.onChange}
                      />
                      {loadingproposal ? (
                        <Spinner />
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-outline-success btn-sm"
                        >
                          Go
                        </button>
                      )}
                    </form>
                  </>
                )}
                {proposal.status === "delivered" && (
                  <p className="text-success">Work Delivered</p>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      ));
    }
    return (
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 mt-1">
            <div className="card">
              <div className="card-header pt-0 pb-0 bg-info"></div>
              {Object.keys(user).length !== 0 && (
                <div className="card-body">
                  <h3>My Details</h3>
                  <hr />

                  <img
                    className="rounded-circle align-item-center"
                    style={{ width: "80px" }}
                    src={user.avatar}
                    alt="user"
                  />
                  <hr />
                  <p>
                    Name: <strong>{user.name}</strong>
                  </p>
                  <p>
                    Phone: <strong>{user.phone}</strong>
                  </p>
                  <p>
                    Bio: <strong>{user.description}</strong>
                  </p>
                  <hr />
                  <div className="">
                    <button className="btn btn-outline-light btn-sm text-success">
                      <i className="fa fa-fw fa-circle text-success"></i> Online
                    </button>
                    <Link to="/" className="btn btn-outline-info btn-sm">
                      To Jobs
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-9 mt-1">
            <div className="card">
              <div className="card-header pt-0 pb-0 bg-danger"></div>
              <div className="card-body">
                {errors && (
                  <div className="alert alert-danger">Error: {errors}</div>
                )}
                <MyaccColunm />
                {MyProposal}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToPrpos = (state) => ({
  auth: state.auth,
  proposals: state.proposals,
  errors: state.errors,
});
export default connect(mapStateToPrpos, {
  getProposalByUserId,
  uploadProposalFile,
  clearErrors,
  setLoadingFalse,
})(Myaccount);
