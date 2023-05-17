import { useEffect, useState } from "react";
import Header from "../../component/Header"
import HeroHome from "../../component/HeroHome"
import MobileNav from "../../component/MobileNav"


function HomeHeader() {
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
    <div className="home-header">
      <Header setMenuState={setIsMenuOpen} menuState={isMenuOpen} linkParentCn="header__nav" linkChildCn="header__link" WhatLogo={true} cartParentCn={""} cartIcon={"/Search.svg"} hamburgerCn="" />
      <HeroHome />
      <MobileNav menuState={isMenuOpen} mobileNavParentCn="" mobileNavLinkCn="home-header__nav" />
    </div>
  )
}

export default HomeHeader