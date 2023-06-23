import { useEffect } from "react";
import Header from "../../component/Header"
import HeroHome from "../../component/HeroHome"
import useAppStore from "../../../store";
import MobileNavHome from "../../component/MobileNavHome";
import { useLocation } from "react-router-dom";


function HomeHeader() {
  const location = useLocation()

  const menuState = useAppStore(s => s.productsRef.homeMenu)

  const setMenuState = useAppStore(s => s.setHomeMenu)

  const cartOpenHideStatus = useAppStore(s => s.productsRef.showHideCart)

  useEffect(() => {
    setMenuState(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])


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
    <div className="home-header">
      <Header linkParentCn="header__nav" linkChildCn="header__link" WhatLogo={true} cartParentCn={""} cartIcon={"/Search.svg"} hamburgerCn="" />
      <HeroHome />
      <MobileNavHome mobileNavParentCn="" mobileNavLinkCn="home-header__nav" />
    </div>
  )
}

export default HomeHeader