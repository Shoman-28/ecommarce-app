import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="footer" className="border-0 bg-transparent">
        <div className="container clearfix">
          {/* <!-- Footer Widgets
    ============================================= --> */}
          <div
            className="footer-widgets-wrap clearfix"
            style={{padding: '60px 0 100px'}}
          >
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="row clearfix">
                  <div className="col-lg-6">
                    <div className="widget widget_links widget-li-noicon">
                      <h4>Hire</h4>
                      <ul>
                        <li>
                          <a href="#">Documentation</a>
                        </li>
                        <li>
                          <a href="#">Feedback</a>
                        </li>
                        <li>
                          <a href="#">Plugins</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="widget widget_links widget-li-noicon">
                      <h4>Community</h4>
                      <ul>
                        <li>
                          <a href="#">Documentation</a>
                        </li>
                        <li>
                          <a href="#">Feedback</a>
                        </li>
                        <li>
                          <a href="#">Plugins</a>
                        </li>
                        <li>
                          <a href="#">Support Forums</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="clear"></div>

                <div className="line line-sm"></div>

                <div className="copy-link">
                  <a href="mailto:northstar9928@gmail.com">
                    <i className="icon-envelope2"></i> info@canvas.com
                  </a>{" "}
                  <span className="middot"> | </span>{" "}
                  <a href="tel:01711-1111---">
                    <i className="icon-headphones"></i> 01711-1111---
                  </a>{" "}
                  <span className="middot"> | </span>{" "}
                  <a href="skype:#">
                    <i className="icon-skype2"></i> CanvasOnSkype
                  </a>
                </div>
              </div>

              <div className="col-lg-5 offset-lg-1">
                <div className="widget">
                  <h4>Connect Socially</h4>

                  <div className="bottommargin-sm clearfix">
                    <a
                      href="#"
                      className="social-icon si-dark si-mini si-rounded si-facebook"
                      title="Facebook"
                    >
                      <i className="icon-facebook"></i>
                      <i className="icon-facebook"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-dark si-mini si-rounded si-twitter"
                      title="Twitter"
                    >
                      <i className="icon-twitter"></i>
                      <i className="icon-twitter"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-dark si-mini si-rounded si-instagram"
                      title="Instagram"
                    >
                      <i className="icon-instagram"></i>
                      <i className="icon-instagram"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-dark si-mini si-rounded si-pinterest"
                      title="Pinterest"
                    >
                      <i className="icon-pinterest"></i>
                      <i className="icon-pinterest"></i>
                    </a>

                    <a
                      href="#"
                      className="social-icon si-dark si-mini si-rounded si-vimeo"
                      title="Vimeo"
                    >
                      <i className="icon-vimeo"></i>
                      <i className="icon-vimeo"></i>
                    </a>
                  </div>
                </div>

                <div className="widget subscribe-widget mt-0 clearfix">
                  <h5>
                    <strong>Subscribe</strong> to Our Newsletter to get
                    Important News, Amazing Offers &amp; Inside Scoops:
                  </h5>
                  <div className="widget-subscribe-form-result"></div>
                  <form
                    id="widget-subscribe-form"
                    action="#"
                    method="post"
                    className="mb-0"
                  >
                    <div className="input-group input-group-lg mx-auto">
                      <input
                        type="email"
                        id="widget-subscribe-form-email"
                        name="widget-subscribe-form-email"
                        className="form-control required email"
                        placeholder="Enter your Email"
                      />
                      <button
                        className="button button-black fw-light button-dark ls2 text-uppercase"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
