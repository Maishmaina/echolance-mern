import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllJobs } from "../../actions/jobActions";
import Spinner from "../common/Spinner";
class JobListed extends Component {
  componentDidMount() {
    this.props.getAllJobs();
  }
  //truncate description
  truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + " ...";
  }

  render() {
    const { jobs, loadingjob } = this.props.work;
    let JobContent;
    if (jobs.length === 0 || loadingjob) {
      JobContent = <Spinner />;
    } else {
      JobContent = jobs
        .filter((job) => {
          return job.status === "active";
        })
        .map((job) => (
          <div
            key={job._id}
            className="row text-capitalize align-item-center border-bottom border-secondary"
          >
            <div className="col-11 mx-auto col-lg-8">
              <img
                src={require("../../images/others/admin.png")}
                alt="admin"
                className="request-img rounded-circle"
              />

              <div className="request-description">
                <h6>By Echolance</h6>
                <h6 className="text-success">{job.title}</h6>
                <p className="lead">
                  {this.truncateString(job.description, 55)}
                </p>
              </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-2">
              <span className="d-lg-none font-weight-bold">Duration: </span>
              {job.duration} Hrs
            </div>
            <div className="col-10 mx-auto col-lg-2 py-2">
              <span className="d-lg-none font-weight-bold">Budget: </span>
              Kshs {job.bidget} <br />
              <Link
                to={`/job/${job._id}`}
                className="btn btn-success btn-sm my-2 float-right"
              >
                Send Offer
              </Link>
            </div>
          </div>
        ));
    }
    return (
      <div className="row buyer-requests">
        <div className="col-md-12">
          <div className="card bg-light">
            <div className="card-body">
              <div className="font-weight-bold d-none d-lg-block">
                <div className="row border-bottom border-dark">
                  <div className="col-lg-8">
                    <p className="text-uppercase">Job</p>
                  </div>
                  <div className="col-lg-2">
                    <p className="text-uppercase">Duration</p>
                  </div>
                  <div className="col-lg-2">
                    <p className="text-uppercase">Budget</p>
                  </div>
                </div>
              </div>
              {JobContent}
              <a href="#more" className="btn btn-success btn-sm my-2">
                More Job
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  work: state.work,
});
export default connect(mapStateToProps, { getAllJobs })(JobListed);
