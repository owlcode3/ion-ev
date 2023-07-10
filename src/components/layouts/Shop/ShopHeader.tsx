import { useEffect } from "react";
import Header from "../../component/Header";
import useAppStore from "../../../store";
import MobileNavShop from "../../component/MobileNavShop";
import { useLocation } from "react-router-dom";


function ShopHeader() {

  const location = useLocation()
  const pathname = location.pathname

  const menuState = useAppStore(s => s.productsRef.shopMenu)

  const setMenuState = useAppStore(s => s.setShopMenu)

  const cartOpenHideStatus = useAppStore(s => s.productsRef.showHideCart)



  useEffect(() => {
    setMenuState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])



  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth

    if (menuState || cartOpenHideStatus) {
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
  }, [menuState, cartOpenHideStatus])

  return (
    <div className="shop-header" style={{
      background: pathname == "/shop" || pathname == "/shop/" ? "#f3f1ee" : "#FFFFFF", height: pathname.includes("checkout") ? "14rem" : "17rem"
    }}>
      <Header linkParentCn="header__nav-for-shop" linkChildCn="header__link-for-shop" WhatLogo={false} cartParentCn="cart-icon-for-shop" cartIcon="/search-icon-black.svg" hamburgerCn="header__hamburger-line-for-shop" />
      <MobileNavShop mobileNavParentCn="shop-header__mobile-nav" mobileNavLinkCn="shop-header__nav" />
    </div>
  )
}

export default ShopHeader