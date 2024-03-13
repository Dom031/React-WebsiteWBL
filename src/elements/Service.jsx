import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor ,FiChevronUp } from "react-icons/fi";
import { BiBuilding } from "react-icons/bi";
import ScrollToTop from 'react-scroll-up';
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Interior Painting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiLayers />,
        title: 'Exterior Painting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiUsers />,
        title: 'Commercial Painting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiMonitor />,
        title: 'Protective Painting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <FiCast />,
        title: 'Decorative Painting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        icon: <BiBuilding />,
        title: 'Industrial Painting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
]
class Service extends Component{
    render(){
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Service' />
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Service'}   />
                {/* End Breadcrump Area */}

                {/* Start Service Area */}
                <div className="service-area creative-service-wrapper pt--90 pb--120 bg_color--1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--30">
                                    <h2>Painting</h2>
                                    <p>Some of the services offered by our team.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a className="text-center" href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
                
                <Footer />


            </React.Fragment>
        )
    }
}
export default Service;