import React from "react";

const AllUserColumn = () => {
  return (
    <div className="text-center d-none d-lg-block">
      <div className="row">
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-list" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-user-md" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-user-circle" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-phone-square" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">
            <i className="fa fa-envelope" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-3">
          <p className="text-uppercase">
            <i className="fa fa-info-circle" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-check-circle" aria-hidden="true" />
          </p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-wrench" />
          </p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">
            <i className="fa fa-times" aria-hidden="true" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllUserColumn;
