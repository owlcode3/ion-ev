
function CheckoutStatus() {
  return (
    <div className="checkout-status">
      <h1 className="checkout-status__checkout">Checkout</h1>
      <div className="checkout-status__status-box">
        <h3 className="checkout-status__status">Cart <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className="checkout-status__status checkout-status__status--active">Info & Shipping <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className="checkout-status__status">Payment <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className="checkout-status__status">Summary </h3>
      </div>
    </div>
  )
}

export default CheckoutStatus