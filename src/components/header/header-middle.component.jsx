// import logoDark from "../../assets/img/logo-dark.png";
import logoLight from "../../assets/img/logo-light.png";

const HeaderMiddle = ({ toggleCart, toggleMenu }) => {
  return (
    <div className="ltn__header-middle-area ltn__logo-right-menu-option ltn__header-row-bg-white ltn__header-padding ltn__header-sticky ltn__sticky-bg-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="site-logo-wrap">
              <div className="site-logo">
                <a href="#!">
                  <img src={logoLight} width={56} alt="Logo" />
                </a>
              </div>
              <div className="get-support clearfix d-none">
                <div className="get-support-icon">
                  <i className="icon-call" />
                </div>
                <div className="get-support-info">
                  <h6>Get Support</h6>
                  <h4>
                    <a href="tel:+123456789">123-456-789-10</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col header-menu-column menu-color-white---">
            <div className="header-menu d-none d-xl-block">
              <nav>
                <div className="ltn__main-menu">
                  <ul>
                    <li className="menu-icon">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">Shop</a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">News</a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">Pages</a>
                    </li>
                    <li>
                      <a href="#!">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div className="col--- ltn__header-options ltn__header-options-2 mb-sm-20">
            {/* header-search-1 */}
            <div className="header-search-wrap">
              <div className="header-search-1">
                <div className="search-icon">
                  <i className="icon-search for-search-show" />
                  <i className="icon-cancel  for-search-close" />
                </div>
              </div>
              <div className="header-search-1-form">
                <form id="#" method="get" action="#">
                  <input
                    type="text"
                    name="search"
                    defaultValue=""
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <span>
                      <i className="icon-search" />
                    </span>
                  </button>
                </form>
              </div>
            </div>
            {/* user-menu */}
            <div className="ltn__drop-menu user-menu">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon-user" />
                  </a>
                  <ul>
                    <li>
                      <a href="#!">Sign in</a>
                    </li>
                    <li>
                      <a href="#!">Register</a>
                    </li>
                    <li>
                      <a href="#!">My Account</a>
                    </li>
                    <li>
                      <a href="#!">Wishlist</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* mini-cart */}
            <div className="mini-cart-icon">
              <a
                href="#ltn__utilize-cart-menu"
                className="ltn__utilize-toggle"
                onClick={toggleCart}
              >
                <i className="icon-shopping-cart" />
                <sup>2</sup>
              </a>
            </div>
            {/* mini-cart */}
            {/* Mobile Menu Button */}
            <div className="mobile-menu-toggle d-xl-none">
              <a
                href="#ltn__utilize-mobile-menu"
                className="ltn__utilize-toggle"
                onClick={toggleMenu}
              >
                <svg viewBox="0 0 800 600">
                  <path
                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                    id="top"
                  />
                  <path d="M300,320 L540,320" id="middle" />
                  <path
                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                    id="bottom"
                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
