import React from "react";
import { RiTrophyLine } from "react-icons/ri";
import { IoMdStopwatch } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";

const CouponSection = () => {
  return (
    <div className="container coupon-section bg-light justify-content-center d-flex flex-column">
      {/* <p className="d-inline-flex gap-1">
  <button type="button" className="btn" data-bs-toggle="button">Toggle button</button>
  <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" className="btn" disabled data-bs-toggle="button">Disabled toggle button</button>
</p>
<p className="d-inline-flex gap-1">
  <button type="button" className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Active toggle button</button>
  <button type="button" className="btn btn-primary" disabled data-bs-toggle="button">Disabled toggle button</button>
</p> */}

      <div
        className="d-flex justify-content-center m-auto my-4 gap-2 filter-buttons"
        style={{ width: "80%" }}
      >
        <div className="filter-btn">
          <button type="button" className="btn active" data-bs-toggle="button">
            <span>
              <RiTrophyLine />
            </span>
            Popular Coupons
          </button>
        </div>
        <div className="filter-btn">
          <button type="button" className="btn " data-bs-toggle="button">
            <span>
              <IoMdStopwatch />
            </span>
            Ending Soon
          </button>
        </div>
        <div className="filter-btn">
          <button type="button" className="btn" data-bs-toggle="button">
            <span>
            <RiFireLine/>

            </span>
            Latest Coupons
          </button>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="column">
                <div
                  className="card text-center mb-3"
                  //   style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title my-3 ">
                      Upto 60% off on Appliances
                    </h5>
                    <img src="/images/amazon.png" className="my-2" />
                    <p className="card-text my-2 ">
                      Upto 60% off on summer Appliances
                    </p>
                    <a href="#" className="btn  mt-4 mb-2 px-4">
                      GRAB NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponSection;
