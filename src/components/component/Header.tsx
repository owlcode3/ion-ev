import NavLinks from "./NavLinks";
import LogoWhite from "./LogoWhite";
import LogoGreen from "./LogoGreen";
import CartIcon from "./CartIcon";
import HamburgerIconShop from "./HamburgerIconShop";
import HamburgerIconHome from "./HamburgerIconHome";
import Cart from "./Cart";
import useAppStore from "../../store";

type Props = {
  linkParentCn: string,
  linkChildCn: string,
  WhatLogo: boolean,
  cartParentCn: string,
  cartIcon: string,
  hamburgerCn: string,
}

function Header({ linkParentCn, linkChildCn, WhatLogo, cartParentCn, cartIcon, hamburgerCn }: Props) {

  const cartShowHideStatus = useAppStore(s => s.productsRef.showHideCart)

  return (
    <>
      <header className={"header"}>
        {WhatLogo ? <LogoWhite /> : <LogoGreen />}

        <NavLinks parentCn={linkParentCn} childCn={linkChildCn} />

        {<CartIcon cartParentCn={cartParentCn} cartIcon={cartIcon} />}

        {hamburgerCn ? <HamburgerIconShop spanCn={hamburgerCn} /> : <HamburgerIconHome />}
      </header>
      <Cart />
      {
        cartShowHideStatus && <div className="fade-page"></div>
      }
    </>
  )
}

export default Header;