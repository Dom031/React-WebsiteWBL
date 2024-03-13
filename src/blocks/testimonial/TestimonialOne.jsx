import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const TestimonialOne = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <Tabs>
                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>Pereira Paintings transformed our home with their incredible attention to detail and craftsmanship.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Edward Gate </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p> hired Pereira Paintings for my Cafe’s renovation and the results were amazing.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Jane Smith </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="rn-testimonial-content text-center">
                            <div className="inner">
                                <p>As an interior designer, I've worked with many painting companies, but Pereira Paintings stands out for their reliability and skill.</p>
                            </div>
                            <div className="author-info">
                                <h6><span>Nami Swan </span> - COO, AMERIMAR ENTERPRISES, INC.</h6>
                            </div>
                        </div>
                    </TabPanel>
                    
                    <TabList className="testimonial-thumb-wrapper">
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                        <Tab>
                            <div className="testimonial-thumbnai">
                                <div className="thumb">
                                    <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                </div>
                            </div>
                        </Tab>
                    </TabList>

                </Tabs>
            </div>
        </div>
    )
}

export default TestimonialOne
