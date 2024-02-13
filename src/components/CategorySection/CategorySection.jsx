import React from "react";

const CategorySection = () => {
  return (
    <div className="category-section">
      <h1>Coupon By Categories</h1>
      <div className="container">
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
          <div className="carousel-inner my-5">
            <div className="carousel-item active">
              <div className="g-4">
                <div className="card-group gap-1">
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/fashion.png" className="my-3" />
                      <h6 className="card-title  ">Fashion</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/food.png" className="my-3" />
                      <h6 className="card-title  ">Food</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/beauty.png" className="my-3" />
                      <h6 className="card-title  ">Beauty</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/toys.png" className="my-3" />
                      <h6 className="card-title  ">Toys</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/hosting.png" className="my-3" />
                      <h6 className="card-title  ">Cloud</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/gaming.png" className="my-3" />
                      <h6 className="card-title  ">Gaming</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/mobile.png" className="my-3" />
                      <h6 className="card-title  ">Phones</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/travel.png" className="my-3" />
                      <h6 className="card-title  ">Travel</h6>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="card-body">
                      <img src="/images/movies.png" className="my-3" />
                      <h6 className="card-title  ">Movies</h6>
                    </div>
                  </div>
                </div>
                <div className="card-group">
                  <div
                    className="card text-center mb-3"
                    //   style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <img src="/images/amazon.png" className="mt-5" />
                      <p className="card-text my-3">Amazon</p>
                      <h5 className="card-title my-3 ">Flat 30% off</h5>
                      <a href="#" className="btn px-4">
                        GRAB NOW
                      </a>
                    </div>
                  </div>
                  <div
                    className="card text-center mb-3"
                    //   style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <img src="/images/amazon.png" className="mt-5" />
                      <p className="card-text my-3">Amazon</p>
                      <h5 className="card-title my-3 ">Flat 30% off</h5>
                      <a href="#" className="btn px-4">
                        GRAB NOW
                      </a>
                    </div>
                  </div>
                  <div
                    className="card text-center mb-3"
                    //   style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <img src="/images/amazon.png" className="mt-5" />
                      <p className="card-text my-3">Amazon</p>
                      <h5 className="card-title my-3 ">Flat 30% off</h5>
                      <a href="#" className="btn px-4">
                        GRAB NOW
                      </a>
                    </div>
                  </div>
                  <div
                    className="card text-center mb-3"
                    //   style={{ width: "18rem" }}
                  >
                    <div className="card-body">
                      <img src="/images/amazon.png" className="mt-5" />
                      <p className="card-text my-3">Amazon</p>
                      <h5 className="card-title my-3 ">Flat 30% off</h5>
                      <a href="#" className="btn px-4">
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
    </div>
  );
};

export default CategorySection;
