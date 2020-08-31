import React from "react";

const MyaccColumn = () => {
  return (
    <div className="text-center d-none d-lg-block">
      <div className="row">
        <div className="col-lg-1">
          <p className="text-uppercase">No.</p>
        </div>
        <div className="col-lg-3">
          <p className="text-uppercase">Title</p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">hrs</p>
        </div>
        <div className="col-lg-1">
          <p className="text-uppercase">ksh</p>
        </div>
        <div className="col-lg-2">
          <p className="text-uppercase">status</p>
        </div>
        <div className="col-lg-4">
          <p className="text-uppercase">actions</p>
        </div>
      </div>
    </div>
  );
};

export default MyaccColumn;
