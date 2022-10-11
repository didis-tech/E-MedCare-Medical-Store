import { useState } from "react";
import { Outlet } from "react-router-dom";
import CartMenu from "../../components/cart/cart-menu.component";
import HeaderMiddle from "../../components/header/header-middle.component";
import HeaderTop from "../../components/header/header-top.component";
import MobileMenu from "../../components/mobile-menu/mobile-menu.component";

const Navigation = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="body-wrapper" id="body-wrapper">
      {/* HEADER AREA START (header-5) */}
      <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile--- ltn__header-logo-and-mobile-menu--- ltn__header-transparent gradient-color-4---">
        {/* ltn__header-top-area start */}
        <HeaderTop />
        {/* ltn__header-top-area end */}
        {/* ltn__header-middle-area start */}
        <HeaderMiddle toggleCart={toggleCart} toggleMenu={toggleMenu} />
        {/* ltn__header-middle-area end */}
      </header>
      {/* HEADER AREA END */}

      <CartMenu isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Outlet />
    </div>
  );
};

export default Navigation;
