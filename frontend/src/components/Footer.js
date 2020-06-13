import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2>Headquarter</h2>
                </div>
                <address>
                  <p>
                    Sirius Building
                    <br /> 23 Furzer Street
                    <br /> Canberra ACT 2606
                  </p>
                </address>
                <ul className="social-icon">
                  <li>
                    <a
                      href="#"
                      className="fa fa-facebook-square"
                      attr="facebook icon"
                    />
                  </li>
                  <li>
                    <a href="#" className="fa fa-twitter" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-instagram" />
                  </li>
                </ul>
                <div className="copyright-text">
                  <p>© Australian Government Department of Health</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="footer-info">
                <div className="section-title">
                  <h2>Contact Info</h2>
                </div>
                <address>
                  <p>1800 020 103</p>
                  <p>
                    <a href="mailto:youremail.co">
                      doctor.on.call@health.gov.au
                    </a>
                  </p>
                </address>
                <div className="footer_menu">
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="#">Health Care</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <br />
                    <li>
                      <a href="#">Government Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="footer-info newsletter-form">
                <div className="section-title">
                  <h2>Signup for Regular Health Updates</h2>
                </div>
                <div>
                  <div className="form-group">
                    <form action="#" method="get">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        name="email"
                        id="email"
                        required
                      />
                      <input
                        type="submit"
                        className="form-control"
                        name="submit"
                        id="form-submit"
                        defaultValue="Send me"
                      />
                    </form>
                    <span>
                      <sup>*</sup> Please note - we do not spam your email.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
