import React from "react";
import footerBg from "../assets/img/footer-bg.png";
import footerLogo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerbg">
        <img src={footerBg} className="svg" alt="" />
      </div>
      <div className="footer-top pt-120 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={footerLogo} alt="" />
                  </a>
                </div>

                <div className="footer-social-area">
                  <ul className="social-icons social-icons-light nav">
                    <li>
                      <a href="https://twitter.com/newton_project" target="_blank">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/newswap" target="_blank">
                        <i className="fa fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>NewSwap</h5>
                </div>
              </div>

              <div className="widget-body">
                <div className="extra-link">
                  <div className="link-left">
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Downloads</a>
                      </li>
                    </ul>
                  </div>
                  <div className="link-right">
                    <ul>
                      <li>
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget">
                <div className="widget-header">
                  <h5>Newton Project</h5>
                </div>
              </div>

              <div className="widget-body">
                <div className="extra-link">
                  <div className="link-left">
                    <ul>
                      <li>
                        <a href="#">Visit</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-text text-center">
          <p>© copyright 2020</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
