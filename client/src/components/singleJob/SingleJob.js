import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { getJobById } from "../../actions/jobActions";
import { addNewProposal } from "../../actions/proposalAction";
import Spinner from "../common/Spinner";

class SingleJob extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getJobById(this.props.match.params.id);
    }
  }
  addFrontProposal = (userId, jobId) => {
    const proposalData = { user: userId, job: jobId };
    this.props.addNewProposal(proposalData, this.props.history);
  };
  render() {
    const { job, loadingjob } = this.props.work;
    const { loadingproposal } = this.props.proposals;
    const { user, isAuthenticated } = this.props.auth;
    let JobData;
    if (job === null || loadingjob) {
      JobData = <Spinner />;
    } else {
      JobData = (
        <Fragment>
          <h4 className="my-2 mr-3 text-capitalize">{job.title}</h4>
          <hr className="border-dark" />
          <h6 className="text-success py-2 mr-3">
            Follow Description Satisfactorily
          </h6>
          <hr />
          <p className="mr-3">{job.description}</p>
          <hr />
          <p className="d-flex justify-content-between mr-3">
            <span>
              <strong> Kshs {job.budget}</strong>
              <br /> Fixed Rate
            </span>
            <span>
              <strong>Expert Score</strong>
              <br /> This Work Expect High Score
            </span>
          </p>
          <hr />
          <p className="mr-3">Duration (strictly Observed)</p>
          <p className="text-success mr-3">{job.duration} Hrs</p>
          <br />
          <hr />
          {isAuthenticated ? (
            loadingproposal ? (
              <Spinner />
            ) : (
              <button
                onClick={() => this.addFrontProposal(user.id, job._id)}
                className="btn btn-outline-info btn-sm d-lg-none"
              >
                Send Proposal!
              </button>
            )
          ) : (
            <Link to="/login" className="btn btn-outline-info btn-sm d-lg-none">
              Send Proposal!
            </Link>
          )}
        </Fragment>
      );
    }
    return (
      <div className="container pt-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-8 pl-3 pr-0 border-right">
                {JobData}
              </div>
              <div className="col-4 d-none d-lg-block">
                {job === null || loadingjob ? (
                  <Spinner />
                ) : isAuthenticated ? (
                  loadingproposal ? (
                    <Spinner />
                  ) : (
                    <button
                      onClick={() => this.addFrontProposal(user.id, job._id)}
                      className="btn btn-outline-info btn-sm btn-block mt-3"
                    >
                      Send Proposal!
                    </button>
                  )
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-info btn-sm btn-block mt-3"
                  >
                    Send Proposal!
                  </Link>
                )}
                <hr />
                <h4 className="text-info">NOTE: for success</h4>
                <p className="text-dark">
                  <i className="fa fa-angle-double-right font-weight-bold" />
                  Once you send proposal
                </p>
                <p className="text-info">
                  <i className="fa fa-angle-double-right font-weight-bold" />
                  wait for verification
                </p>
                <p className="text-info">
                  <i className="fa fa-angle-double-right font-weight-bold" /> to
                  start working on your job.
                </p>
                <p className="text-success">
                  <i className="fa fa-angle-double-right font-weight-bold" /> if
                  work is verified for you
                </p>
                <p className="text-success">
                  <i className="fa fa-angle-double-right font-weight-bold" /> it
                  is displayed on Your account dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  work: state.work,
  proposals: state.proposals,
  auth: state.auth,
});
export default connect(mapStateToProps, { getJobById, addNewProposal })(
  withRouter(SingleJob)
);
