import { Link } from "react-router-dom"

type Props = {
  menuState: boolean
}

function MobileNav({ menuState }: Props) {


  return (
    <div className="home-header__mobile-nav" style={{
      opacity: menuState ? 1 : 0, zIndex: menuState ? 998 : -1
    }}>
      <Link className="home-header__link home-header__nav" to="/">Home</Link>
      <Link className="home-header__link home-header__nav" to="/">Installation</Link>
      <Link className="home-header__link home-header__nav" to="/">Shop</Link>
      <div className="home-header__cart-text-box home-header__nav"><span>Cart</span> <span className="home-header__cart-no">0</span></div>
    </div>)
}

export default MobileNav