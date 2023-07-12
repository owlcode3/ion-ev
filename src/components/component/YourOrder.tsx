
function YourOrder() {

  return (
    <div className="your-order">
      <div className="your-order__box-1">
        <span className="your-order__heading">Your Order</span>
        <span className="your-order__edit">Edit</span>
      </div>

      <div className="your-order__box-2">

        <div className="your-order__box-2-inner">
          <div className="your-order__img-box">
            <img className="your-order__img" src="/fc-img.svg" alt="product image" />
          </div>

          <div className="your-order__product-details">
            <div className="your-order__name-box">
              <h1 className="your-order__name">
                Tesla Wall Connector (3)
              </h1>
              <h2 className="your-order__price">$450</h2>
            </div>
          </div>
        </div>

        <div className="your-order__promo-box">
          <span className="your-order__promo-code">Add a promo code</span>
          <span className="your-order__add">+</span>
        </div>
      </div>

      <div className="your-order__box-3">
        <ul className="your-order__lists">
          <li className="your-order__list">
            <span className="your-order__subtotal">Subtotal: <img className="your-order__subtotal-img" src="/i-dot.svg" alt="i-dot icon" /></span>
            <span className="your-order__subtotal-price">$450.00</span>
          </li>
          <li className="your-order__list">
            <span className="your-order__subtotal">Shipping</span>
            <span className="your-order__subtotal-price">Free</span>
          </li>
          <li className="your-order__list">
            <span className="your-order__subtotal">Sales Tax: <img className="your-order__subtotal-img" src="/i-dot.svg" alt="i-dot icon" /></span>
            <span className="your-order__subtotal-price">$25.00</span>
          </li>
        </ul>

        <div className="your-order__due-box">
          <div className="your-order__due-box-inner">
            <span className="your-order__due">Total Due</span>
            <span className="your-order__due-price">$425.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourOrder