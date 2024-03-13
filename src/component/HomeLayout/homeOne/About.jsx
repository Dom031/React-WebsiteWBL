import React, { Component } from "react";

import aboutImg from "../../../assets/images/about/about-1.jpg";

class About extends Component {
  render() {
    let title = "About",
      description =
        "Our mission is simple: to provide exceptional painting services that exceed our clients’ expectations. We believe that every job is an opportunity to enhance the beauty and functionality of a space and we approach each project with dedication, professionalism, and attention to detail.";
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img className="w-100" src={aboutImg} alt="About Images" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Our Values</h3>
                        <p>
                        - Quality:  We have committed to delivering superior craftsmanship and using top-quality materials to ensure long lasting results.<br/>
- Integrity: Honesty, transparency, and integrity are the foundations of our business. We believe in building a long-lasting relationship with our clients based on trust and reliability.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">Why us? </h3>
                        <p>
                        Our team consists of highly skilled painters with over a decade of experience in the industry and knowledge to handle projects of any size and complexity. Our customer’s satisfaction is the top priority so we work closely with our clients to understand their needs.  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
