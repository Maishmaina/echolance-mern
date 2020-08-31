import React, { Component, Fragment } from "react";
import HomeCarousel from "./HomeCarousel";
import JobListed from "../job/JobListed";
import CategoryLIsting from "../job/CategoryLIsting";
import ProfileListed from "../job/ProfileListed";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeCarousel />
        <div className="container-fluid pt-2">
          <div className="row">
            <div className="col-2 d-none d-lg-block ">
              <CategoryLIsting />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-8 mx-auto">
              <JobListed />
            </div>
            <div className="col-2 d-none d-lg-block">
              <ProfileListed />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Home;
