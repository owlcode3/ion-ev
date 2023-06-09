import { useEffect } from "react";
import Header from "../../component/Header";
import useAppStore from "../../../store";
import MobileNavShop from "../../component/MobileNavShop";
import { useLocation } from "react-router-dom";


function ShopHeader() {

  const location = useLocation()
  const menuState = useAppStore(s => s.productsRef.shopMenu)
  const setMenuState = useAppStore(s => s.setShopMenu)


  useEffect(() => {
    setMenuState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  console.log(location);


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
    <div className="shop-header" style={{ background: location.pathname == "/shop" || location.pathname == "/shop/" ? "#f3f1ee" : "#FFFFFF" }}>
      <Header linkParentCn="header__nav-for-shop" linkChildCn="header__link-for-shop" WhatLogo={false} cartParentCn="cart-for-shop" cartIcon="/search-icon-black.svg" hamburgerCn="header__hamburger-line-for-shop" />
      <MobileNavShop mobileNavParentCn="shop-header__mobile-nav" mobileNavLinkCn="shop-header__nav" />
    </div>
  )
}

export default ShopHeader