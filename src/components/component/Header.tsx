import { Dispatch } from "react";
import { Link } from "react-router-dom"

type Props = {
  setMenuState: Dispatch<React.SetStateAction<boolean>>,
  menuState: boolean
}

function Header({ setMenuState, menuState }: Props) {



  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-icon-box"><img src="/Logo.svg" alt="logo" /></span> <span className="header__logo-text-box">ion ev</span>
      </div>

      <nav className="header__nav">
        <Link className="header__link" to="/">Home</Link>
        <Link className="header__link" to="/">Installation</Link>
        <Link className="header__link" to="/">Shop</Link>
      </nav>

      <div className="header__cart-box">
        <div className="header__search-icon-box"><img src="/Search.svg" alt="search icon" /></div>
        <div className="header__cart-text-box"><span>Cart</span> <span className="header__cart-no">0</span></div>
      </div>

      <input type="checkbox" onClick={() => setMenuState(!menuState)} className="header__checkbox" id="checkbox" />
      <label className="header__hamburger">
        <span className="header__hamburger-line"></span>
        <span className="header__hamburger-line"></span>
      </label>
    </header>
  )
}

export default Header;