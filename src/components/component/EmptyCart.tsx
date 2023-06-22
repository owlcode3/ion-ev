import useAppStore from "../../store";

function EmptyCart() {

  const setCartStatus = useAppStore(s => s.setShowHideCart);

  return (
    <div className="empty-cart">
      <div className="empty-cart__box-1">
        <span className="empty-cart__heading">Your Cart</span>
        <img onClick={() => setCartStatus(false)} className="empty-cart__cancel-icon" src="/cancel.svg" alt="cancel icon" />
      </div>

      <div className="empty-cart__box-2">
        <img className="empty-cart__bag-icon" src="/artwork-and-text.svg" alt="cancel icon" />
      </div>

      <div className="empty-cart__box-3">
        <button className="empty-cart__btn">Add an item</button>
        <button className="empty-cart__btn empty-cart__btn--2">Sign in</button>
      </div>
    </div>
  )
}

export default EmptyCart