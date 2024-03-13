import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg1 from "../assets/images/client/testimonial-1.jpg";
import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg3 from "../assets/images/client/testimonial-3.jpg";
import testimonialImg4 from "../assets/images/client/testimonial-4.jpg";
import testimonialImg5 from "../assets/images/client/testimonial-5.jpg";
import testimonialImg6 from "../assets/images/client/testimonial-6.jpg";
import testimonialImg7 from "../assets/images/client/testimonial-7.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                    Pereira Paintings transformed our home with their incredible attention to detail and craftsmanship.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Edward Gate </span> - COO, AMERIMAR ENTERPRISES, INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                    I hired Pereira Paintings for my Cafe’s renovation and the results were amazing.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Jane Smith </span> - COO, AMERIMAR ENTERPRISES,
                      INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                    As an interior designer, I've worked with many painting companies, but Pereira Paintings stands out for their reliability and skill.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Nami Swan</span> - COO, AMERIMAR ENTERPRISES,
                      INC.
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg1} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg2} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg3} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
