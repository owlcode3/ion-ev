import useAppStore from "../../store"

type Props = {
  cartParentCn: string,
  cartIcon: string
}

function CartIcon({ cartParentCn, cartIcon }: Props) {

  const setCartStatus = useAppStore(s => s.setShowHideCart);

  return (
    <div className={"cart-icon" + " " + `${cartParentCn}`} >
      <div className="cart-icon__search-icon-box"><img src={cartIcon} alt="search icon" /></div>
      <div className="cart-icon__text-box"><span className="cart-icon__cart-cart" onClick={() => setCartStatus(true)}>Cart</span> <span className="cart-icon__no">0</span></div>
    </div>)
}

export default CartIcon