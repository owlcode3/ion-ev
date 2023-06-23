import { Link } from "react-router-dom";
import useAppStore from "../../store"

type Props = {
  mobileNavParentCn: string,
  mobileNavLinkCn: string,

}

function MobileNavShop({ mobileNavParentCn, mobileNavLinkCn }: Props) {

  const menuState = useAppStore(s => s.productsRef.shopMenu)
  const setCartStatus = useAppStore(s => s.setShowHideCart);


  return (
    <div className={"home-header__mobile-nav" + " " + `${mobileNavParentCn}`} style={{
      opacity: menuState ? 1 : 0, zIndex: menuState ? 998 : -1
    }}>
      <Link className={mobileNavLinkCn} to="/">Home</Link>
      <Link className={mobileNavLinkCn} to="/installation">Installation</Link>
      <Link className={mobileNavLinkCn} to="/shop">Shop</Link>
      <div className={"home-header__cart-text-box" + " " + `${mobileNavLinkCn}`}><div className="home-header__cart-cart" onClick={() => setCartStatus(true)}>Cart</div> <span className="home-header__cart-no">0</span></div>
    </div>)
}

export default MobileNavShop