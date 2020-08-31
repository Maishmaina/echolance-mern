import React, { Component } from "react";

class HomeCarousel extends Component {
  render() {
    return (
      <div className="pt-2">
        <div id="myCarousel" className="carousel slide">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active home-carousel-item">
              <a href="#end">
                <img
                  src={require("../../images/sliders/1.jpg")}
                  alt="slider3"
                  className="img-fluid small-resp"
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  className="carousel-caption"
                  style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                >
                  <h3>Perfect Query Response Mechanism</h3>
                  <p className="d-lg-block d-md-block d-none">
                    We have a 24/7 support team that is ready to help and ensure
                    you deliver the best quality.
                  </p>
                </div>
              </a>
            </div>

            <div className="carousel-item home-carousel-item">
              <a href="#end">
                <img
                  src={require("../../images/sliders/2.jpg")}
                  alt="slider2"
                  className="img-fluid small-resp"
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  className="carousel-caption"
                  style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                >
                  <h3>Highly Vetted Expert</h3>
                  <p className="d-lg-block d-md-block d-none">
                    Our Group of Expert are highly vetted and trained to ensure
                    we get the expected order results.
                  </p>
                </div>
              </a>
            </div>
            <div className="carousel-item home-carousel-item">
              <a href="#end">
                <img
                  src={require("../../images/sliders/3.png")}
                  alt="slider1"
                  className="img-fluid small-resp"
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  className="carousel-caption"
                  style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                >
                  <h3>Well Organised communication</h3>
                  <p className="d-lg-block d-md-block d-none">
                    We provide Real-time chat platform for our Expert to share
                    with our professional support team
                  </p>
                </div>
              </a>
            </div>
            <div className="carousel-item home-carousel-item">
              <a href="#end">
                <img
                  src={require("../../images/sliders/4.png")}
                  alt="slider"
                  className="img-fluid small-resp"
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  className="carousel-caption"
                  style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
                >
                  <h3>Highest quote with instant pay</h3>
                  <p className="d-lg-block d-md-block d-none">
                    We ensure that Our Jobs are highly Quoted, as per the work
                    requirement and result and we pay once after approval
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCarousel;
