import { Dispatch } from "react";
import NavLinks from "./NavLinks";
import LogoWhite from "./LogoWhite";
import LogoGreen from "./LogoGreen";
import Cart from "./Cart";
import HamburgerIcon from "./HamburgerIcon";

type Props = {
  setMenuState: Dispatch<React.SetStateAction<boolean>>,
  menuState: boolean,
  linkParentCn: string,
  linkChildCn: string,
  WhatLogo: boolean,
  cartParentCn: string,
  cartIcon: string,
  hamburgerCn: string,
}

function Header({ setMenuState, menuState, linkParentCn, linkChildCn, WhatLogo, cartParentCn, cartIcon, hamburgerCn }: Props) {

  return (
    <header className={"header"}>
      {WhatLogo ? <LogoWhite /> : <LogoGreen />}

      <NavLinks parentCn={linkParentCn} childCn={linkChildCn} />

      {<Cart cartParentCn={cartParentCn} cartIcon={cartIcon} />}

      {<HamburgerIcon setMenuState={setMenuState} menuState={menuState} spanCn={hamburgerCn} />}
    </header>
  )
}

export default Header;