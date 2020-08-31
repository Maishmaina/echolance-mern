import React from "react";

const ProfileListed = () => {
  return (
    <div className="pt-4">
      <div className="d-flex justify-content-start font-weight-bold">
        Profile
      </div>
      <hr />
      <div className="row d-flex justify-content-start">
        <p className="col-lg-8 col-md-12 col-sm-8 col-8 user-home-title-responsive">
          <a href="#article-for-you " className="text-dark">
            <i className="fa fa-angle-double-right font-weight-bold"></i> Offers
          </a>
        </p>
      </div>

      <div className="row d-flex justify-content-start">
        <p className="col-lg-8 col-md-12 col-sm-8 col-8 user-home-title-responsive">
          <a
            href="#client-format-recommended-Research-paper"
            className="text-dark"
          >
            <i className="fa fa-angle-double-right font-weight-bold"></i>{" "}
            Performance
          </a>
        </p>
      </div>

      <div className="row d-flex justify-content-start">
        <p className="col-lg-8 col-md-12 col-sm-8 col-8 user-home-title-responsive">
          <a href="#creative-code-writer" className="text-dark">
            <i className="fa fa-angle-double-right font-weight-bold"></i>{" "}
            Payment
          </a>
        </p>
      </div>

      <div className="row d-flex justify-content-start">
        <p className="col-lg-8 col-md-12 col-sm-8 col-8 user-home-title-responsive">
          <a href="#legal-writer" className="text-dark">
            <i className="fa fa-angle-double-right font-weight-bold"></i>{" "}
            Availability
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProfileListed;
