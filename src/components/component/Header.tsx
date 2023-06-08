import NavLinks from "./NavLinks";
import LogoWhite from "./LogoWhite";
import LogoGreen from "./LogoGreen";
import Cart from "./Cart";
import HamburgerIcon from "./HamburgerIcon";

type Props = {
  linkParentCn: string,
  linkChildCn: string,
  WhatLogo: boolean,
  cartParentCn: string,
  cartIcon: string,
  hamburgerCn: string,
}

function Header({ linkParentCn, linkChildCn, WhatLogo, cartParentCn, cartIcon, hamburgerCn }: Props) {

  return (
    <header className={"header"}>
      {WhatLogo ? <LogoWhite /> : <LogoGreen />}

      <NavLinks parentCn={linkParentCn} childCn={linkChildCn} />

      {<Cart cartParentCn={cartParentCn} cartIcon={cartIcon} />}

      {<HamburgerIcon spanCn={hamburgerCn} />}
    </header>
  )
}

export default Header;