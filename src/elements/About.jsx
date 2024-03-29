import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import about from "../assets/images/about/about-3.jpg";
import findingImg from "../assets/images/about/finding-us-01.png";
import teamImg1 from "../assets/images/team/team-01.jpg";
import teamImg2 from "../assets/images/team/team-02.jpg";
import teamImg3 from "../assets/images/team/team-03.jpg";

class About extends Component {
  render() {
    let title = "About",
      description =
        "Our mission is simple: to provide exceptional painting services that exceed our clients’ expectations. We believe that every job is an opportunity to enhance the beauty and functionality of a space and we approach each project with dedication, professionalism, and attention to detail.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="About" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"About"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={about}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">Our Values:</h3>
                          <p>
                          Quality - We have committed to delivering superior craftsmanship and using top-quality materials to ensure long lasting results.
Integrity - Honesty, transparency, and integrity are the foundations of our business. We believe in building a long-lasting relationship with our clients based on trust and reliability.
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
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Find Your Work Now</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that.
                </p>
                <a className="rn-btn btn-white" href="/about">
                  Get Started
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img src={findingImg} alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Skilled Team</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={teamImg1}
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={teamImg2}
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">BM. Alamin</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}

              {/* Start Single Team  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={teamImg3}
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Team  */}
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default About;
