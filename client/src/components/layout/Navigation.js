import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  openNav = () => {
    document.getElementById("mySidenavw3").style.width = "300px";
  };
  closeNav = () => {
    document.getElementById("mySidenavw3").style.width = "0";
  };
  searchProduct = (e) => {
    e.preventDefault();
    console.log("found");

    // this.props.getProducts();
    // this.props.getSearchProduct(this.state.searchQuery);
    // this.props.history.push("/search");
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onLogoutCLick = (e) => {
    e.preventDefault();
    console.log("logged in");
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinkDesk = (
      <>
        <li className="nav-item">
          <Link
            to="/myaccount"
            className="btn btn-outline-dark text-light btn-sm mr-2 text-light"
          >
            {user.name} Acc
          </Link>
        </li>
        <li className="nav-item">
          <button
            onClick={this.onLogoutCLick}
            className="btn btn-outline-primary btn-sm text-light"
          >
            Logout
          </button>
        </li>
      </>
    );
    const guestLinkDesk = (
      <>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Be affiliate
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/register"
            className="btn btn-outline-dark btn-sm text-light"
          >
            Register
          </Link>
        </li>
      </>
    );
    const authLinkMobile = (
      <>
        <hr className="border-light" />
        <Link to="/myaccount" className="dropdown-item">
          <i className="fa fa-user-md fa-1x"></i> {user.name} Acc
        </Link>
        <hr className="border-light" />
        <button
          className="dropdown-item"
          style={{ fontSize: "25px", color: "#000" }}
          onClick={this.onLogoutCLick}
        >
          <i className="fa fa-lock fa-1x"></i> Logout
        </button>
        <hr className="border-light" />
      </>
    );
    const guestLinkMobile = (
      <>
        <hr className="border-light" />
        <Link to="/register">
          <i className="fa fa-cart-arrow-down fa-1x"></i> Be affiliate
        </Link>
        <hr className="border-light" />
        <Link to="/login">
          <i className="fa fa-unlock fa-1x"></i> Log In
        </Link>
        <hr className="border-light" />
        <Link to="/register">
          <i className="fa fa-user-plus fa-1x"></i> Register
        </Link>
        <hr className="border-light" />
      </>
    );
    return (
      <div className="mb-5">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-info">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarNav1"
                  onClick={this.openNav}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" className="navbar-brand d-none d-lg-block">
                  Echolance
                </Link>
              </div>
              <div className="col-8">
                <form onSubmit={this.searchProduct} className="form-inline">
                  <div className="input-group">
                    <input
                      type="text"
                      name="searchQuery"
                      required
                      className="form-control"
                      placeholder="Search Jobs"
                      value={this.state.searchQuery}
                      onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="mr-auto"></div>
              <ul className="navbar-nav">
                <li className="nav-item d-none d-lg-block">
                  <Link
                    to="/cart"
                    className="nav-link mr-lg-2 relativenav"
                    title="Cart"
                  >
                    <i className="fa fa-fw fa-lg fa-shopping-cart"></i>
                    <span className="new-indicator text-danger">
                      <i className="fa fa-fw fa-circle"></i>

                      <span className="number">3</span>
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                {isAuthenticated ? authLinkDesk : guestLinkDesk}
              </ul>
            </div>
          </div>
        </nav>
        <div
          id="mySidenavw3"
          className="sidenav bg-info"
          onClick={this.closeNav}
        >
          <button className="btn btn-info btn-sm closebtn">&times;</button>
          <hr className="border-light" />
          <Link to="/">
            <i className="fa fa-home fa-1x"></i> Home
          </Link>
          <hr className="border-light" />
          <Link to="/cart">
            <span>
              <i className="fa fa-fw fa-shopping-cart"></i> Active
              <span className="badge badge-pill badge-danger">3 item</span>
            </span>
          </Link>
          {isAuthenticated ? authLinkMobile : guestLinkMobile}
        </div>
      </div>
    );
  }
}
Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Navigation);
