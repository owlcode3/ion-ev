import { useState, useEffect } from "react";
import Header from "../../component/Header";
import HeroShop from "../../component/HeroShop";
import MobileNav from "../../component/MobileNav";
import AllProducts from "../../component/AllProducts";


function ShopHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("root")!.style.overflowY = "hidden"
      document.body.style.overflowY = "hidden"
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("root")!.style.overflowY = ""
      document.body.style.overflowY = ""
    }
  }, [isMenuOpen])

  return (
    <div className="shop-header">
      <Header setMenuState={setIsMenuOpen} menuState={isMenuOpen} linkParentCn="header__nav-for-shop" linkChildCn="header__link-for-shop" WhatLogo={false} cartParentCn="cart-for-shop" cartIcon="/search-icon-black.svg" hamburgerCn="header__hamburger-line-for-shop" />
      <HeroShop />
      <AllProducts />
      <MobileNav menuState={isMenuOpen} mobileNavParentCn="shop-header__mobile-nav" mobileNavLinkCn="shop-header__nav" />
    </div>
  )
}

export default ShopHeader