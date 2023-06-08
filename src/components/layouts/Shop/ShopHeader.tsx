import { useEffect } from "react";
import Header from "../../component/Header";
import MobileNav from "../../component/MobileNav";
import useAppStore from "../../../store";


function ShopHeader() {

  const menuState = useAppStore(s => s.productsRef.menu)

  useEffect(() => {

    const scrollBarWidth = window.innerWidth - document.body.clientWidth

    if (menuState) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("root")!.style.overflowY = "hidden"
      document.body.style.overflowY = "hidden"
      document.body.style.marginRight = `${scrollBarWidth}px`;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("root")!.style.overflowY = ""
      document.body.style.overflowY = ""
      document.body.style.marginRight = "";
    }
  }, [menuState])

  return (
    <div className="shop-header">
      <Header linkParentCn="header__nav-for-shop" linkChildCn="header__link-for-shop" WhatLogo={false} cartParentCn="cart-for-shop" cartIcon="/search-icon-black.svg" hamburgerCn="header__hamburger-line-for-shop" />
      <MobileNav mobileNavParentCn="shop-header__mobile-nav" mobileNavLinkCn="shop-header__nav" />
    </div>
  )
}

export default ShopHeader