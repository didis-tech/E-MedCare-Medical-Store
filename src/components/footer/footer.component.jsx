import logoDark from "../../assets/img/logo-dark.png";
const Footer = () => {
  return (
    <>
      {/* CALL TO ACTION START (call-to-action-6) */}
      <div
        className="ltn__call-to-action-area call-to-action-6 before-bg-bottom d-none"
        data-bs-bg="img/1.jpg--"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>
                    Buy medical disposable face mask <br /> to protect your
                    loved ones
                  </h1>
                </div>
                <div className="btn-wrapper">
                  <a className="btn btn-effect-3 btn-white" href="shop.html">
                    Explore Products <i className="icon-next" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CALL TO ACTION END */}
      {/* FOOTER AREA START */}
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-1 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo justify-content-center">
                      <img src={logoDark} alt="Logo" width={"40%"} />
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="footer-address-info">
                          <p> 21 Street, State, Nigeria.</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+234-800-332-0000">
                              +234-800-332-0000
                            </a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:example@example.com">
                              example@example.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <ul>
                      <li>
                        <a href="#" title="Facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Linkedin">
                          <i className="fab fa-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Youtube">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#!">About</a>
                      </li>
                      <li>
                        <a href="#!">Blog</a>
                      </li>
                      <li>
                        <a href="#!">All Products</a>
                      </li>
                      <li>
                        <a href="#!">Locations Map</a>
                      </li>
                      <li>
                        <a href="#!">FAQ</a>
                      </li>
                      <li>
                        <a href="#!">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#!">Order tracking</a>
                      </li>
                      <li>
                        <a href="#!">Wish List</a>
                      </li>
                      <li>
                        <a href="#!">Login</a>
                      </li>
                      <li>
                        <a href="#!">My account</a>
                      </li>
                      <li>
                        <a href="#!">Terms &amp; Conditions</a>
                      </li>
                      <li>
                        <a href="#!">Promotional Offers</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Care</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#!">Login</a>
                      </li>
                      <li>
                        <a href="#!">My account</a>
                      </li>
                      <li>
                        <a href="#!">Wish List</a>
                      </li>
                      <li>
                        <a href="#!">Order tracking</a>
                      </li>
                      <li>
                        <a href="#!">FAQ</a>
                      </li>
                      <li>
                        <a href="#!">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <i className="fas fa-location-arrow" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>
                  <img src="img/icons/payment-4.png" alt="Payment Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2 section-bg-7  plr--5">
          <div className="container-fluid ltn__border-top-2">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="ltn__copyright-design clearfix">
                  <p>
                    All Rights Reserved @ Company{" "}
                    <span className="current-year" />
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-12 align-self-center">
                <div className="ltn__copyright-menu text-end">
                  <ul>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Claim</a>
                    </li>
                    <li>
                      <a href="#">Privacy &amp; Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER AREA END */}
    </>
  );
};

export default Footer;
