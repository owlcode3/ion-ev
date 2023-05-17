
type Props = {
  cartParentCn: string,
  cartIcon: string
}

function CartIcon({ cartParentCn, cartIcon }: Props) {
  return (
    <div className={"cart" + " " + `${cartParentCn}`} >
      <div className="cart__search-icon-box"><img src={cartIcon} alt="search icon" /></div>
      <div className="cart__text-box"><span>Cart</span> <span className="cart__no">0</span></div>
    </div>)
}

export default CartIcon