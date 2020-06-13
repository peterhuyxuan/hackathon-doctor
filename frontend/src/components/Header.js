import React, { Component } from "react";
import { Carousel } from "antd";

const bold = (props) => <p style={{ fontWeight: "bold" }}>{props.children}</p>;

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <title>Known - Education HTML Template</title>
          {/* 

Known Template 

https://templatemo.com/tm-516-known

*/}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="description" content />
          <meta name="keywords" content />
          <meta name="author" content />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="stylesheet" href="public/css/bootstrap.min.css" />
          <link rel="stylesheet" href="public/css/font-awesome.min.css" />
          <link rel="stylesheet" href="public/css/owl.carousel.css" />
          <link rel="stylesheet" href="public/css/owl.theme.default.min.css" />
          {/* MAIN CSS */}
          <link rel="stylesheet" href="public/css/templatemo-style.css" />

          {/* HOME */}

          <section id="home">
            <div className="row">
              <Carousel autoplay>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="images/health-check.jpg"
                    style={{ margin: "auto" }}
                  />
                  {/* <h3>1</h3> */}
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="images/1fc36e8e50d19bea745e240aedc264f5.jpg"
                    style={{ margin: "auto" }}
                  />
                  {/* <h3>2</h3> */}
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="images/bWFpbi9jaGVjay11cC5wbmc=.png"
                    style={{ margin: "auto" }}
                  />
                  {/* <h3>3</h3> */}
                </div>
              </Carousel>
            </div>
          </section>
          {/* FEATURE */}
          <section id="feature">
            <div className="container">
              <div style={{ textAlign: "center" }}>
                <h1>Welcome to our App!</h1>
              </div>
              <div className="row display-table">
                <div className="col-md-4 col-sm-4">
                  <div className="feature-thumb">
                    <span>01</span>
                    <h3>Medical Appointment Booking</h3>
                    <p>
                      Immediate service open 7 Days per Week with fully
                      registered & qualified doctors. Choose a time that suits
                      you, fill out a questionnaire & get video consultation
                      with a doctor.
                    </p>
                    <br />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="feature-thumb">
                    <span>02</span>
                    <h3>Healthy Living</h3>
                    <p>
                      Healthy living takes practice, preparation and commitment
                      but it's worth it. Find out what you could be doing to
                      build a happier and healthier life!
                    </p>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="feature-thumb">
                    <span>03</span>
                    <h3>Latest news on COVID-19</h3>
                    <p>
                      Find the latest news, key facts and figure, contacts and
                      phone numbers, and answers to your questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ABOUT */}
          <section id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="about-info">
                    <h2>
                      Start your journey to a better life with more accessible
                      doctors anywhere, anytime!
                    </h2>
                    <figure>
                      <span>
                        <i className="fa fa-users" />
                      </span>
                      <figcaption>
                        <h3>Professional Medical Speciallist</h3>
                        <p>
                          Having our best doctors in Australia here to address
                          your medical issues across multiple fields to ensure
                          you are provided with the best healthcare that is
                          subsidised by your existing medicare plan and
                          insurance providers that is accessible anywhere and
                          anytime that you require it.
                        </p>
                      </figcaption>
                    </figure>
                    <figure>
                      <span>
                        <i className="fa fa-certificate" />
                      </span>
                      <figcaption>
                        <h3>Video consultation</h3>
                        <p>
                          We understand that it is not easy for you to reach a
                          doctor, pharmacy, or other services. This is. why we
                          have developed video consultation services with our
                          team or experts, connecting users to our professional
                          doctors, no matter where they find themselves in
                          Australia.
                        </p>
                      </figcaption>
                    </figure>
                    <figure>
                      <span>
                        <i className="fa fa-bar-chart-o" />
                      </span>
                      <figcaption>
                        <h3>Try out your first FREE consultations</h3>
                        <p>
                          At the <bold>first free consultation</bold>, we will
                          endeavour provide you with clear instructions to guide
                          you to reach a <bold>better life</bold>. Take{" "}
                          <bold>this first</bold> step towards your dream life!
                          Book a <bold>free </bold>consultation today
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="col-md-offset-1 col-md-4 col-sm-12">
                  <div className="entry-form">
                    <form action="#" method="post">
                      <h3 style={{ color: "#fff" }}>
                        Sign In and Track Your Doctor
                      </h3>
                      <input
                        type="text"
                        name="full name"
                        className="form-control"
                        placeholder="Full name"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email address"
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Your password"
                        required
                      />
                      <button
                        className="submit-btn form-control"
                        id="form-submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TEAM */}
          <section id="team">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="section-title">
                    <h2>
                      Doctors{" "}
                      <small>Meet our Professional Trained Speciallist</small>
                    </h2>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="team-thumb">
                    <div className="team-image">
                      <img
                        src="images/doctor-img2.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="team-info">
                      <h3>Mark Wilson</h3>
                      <span>University of Oxford Class of 2012</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="team-thumb">
                    <div className="team-image">
                      <img
                        src="images/asian-female-doctor-writing-pad-isolated-white-background-32846976.jpg"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="team-info">
                      <h3>Jessie Ca</h3>
                      <span>University of New South Wales Class of 2009</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="team-thumb">
                    <div className="team-image">
                      <img
                        src="images/194-1943610_transparent-nurses-png-doctor-transparent-background-png-download.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="team-info">
                      <h3>Tyrone Anderson</h3>
                      <span>Harvard Class of 1999</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6">
                  <div className="team-thumb">
                    <div className="team-image">
                      <img
                        src="images/doctor-writing-e1531897748239.png"
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                    <div className="team-info">
                      <h3>Daniella Berti</h3>
                      <span>Monash University Class of 2003</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <form id="contact-form" role="form" action method="post">
                    <div className="section-title">
                      <h2>
                        Contact us{" "}
                        <small>We would love to hear your inquiry!</small>
                      </h2>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter full name"
                        name="name"
                        required
                      />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email address"
                        name="email"
                        required
                      />
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Tell us about your message"
                        name="message"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <input
                        type="submit"
                        className="form-control"
                        name="send message"
                        defaultValue="Send Message"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="contact-image">
                    <img
                      src="images/contact-image.jpg"
                      className="img-responsive"
                      alt="Smiling Two Girls"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SCRIPTS */}
        </div>
      </div>
    );
  }
}

export default Header;
