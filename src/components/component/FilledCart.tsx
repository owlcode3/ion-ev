import useAppStore from "../../store";

function FilledCart() {

  const setCartStatus = useAppStore(s => s.setShowHideCart);

  return (
    <div className="filled-cart">
      <div className="filled-cart__box-1">
        <span className="filled-cart__heading">Your Cart</span>
        <img onClick={() => setCartStatus(false)} className="filled-cart__cancel-icon" src="/cancel.svg" alt="cancel icon" />
      </div>

      <div className="filled-cart__box-2">

        <div className="filled-cart__box-2-inner">
          <div className="filled-cart__img-box">
            <img className="filled-cart__img" src="/fc-img.svg" alt="product image" />
          </div>

          <div className="filled-cart__product-details">
            <div className="filled-cart__name-box">
              <h1 className="filled-cart__name">
                Tesla Wall Connector (3)
              </h1>
              <div className="filled-cart__quantity-box">
                <span className="filled-cart__quantity">Quantity:</span>
                <div className="filled-cart__counts-box">
                  <span className="filled-cart__minus">-</span>
                  <span>1</span>
                  <span className="filled-cart__add">+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="filled-cart__remove-box">
            <span className="filled-cart__price">$450</span>
            <span className="filled-cart__remove">Remove</span>
          </div>
        </div>

      </div>

      <div className="filled-cart__box-3">
        <button className="filled-cart__btn">Checkout</button>
        <div className="filled-cart__subtotal-box">
          <div className="filled-cart__subtotal-inner-box">
            <span className="filled-cart__subtotal">Subtotal:</span>
            <span className="filled-cart__exclude">Excludes sales tax.</span>
          </div>
          <span className="filled-cart__subtotal-price">$450</span>
        </div>
      </div>
    </div>
  )
}

export default FilledCart