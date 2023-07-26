import useAppStore from "../../store";


function CheckoutStatus() {

  const stage = useAppStore(s => s.productsRef.stage);

  return (
    <div className="checkout-status">
      <h1 className="checkout-status__checkout">Checkout</h1>
      <div className="checkout-status__status-box">
        <h3 className={`checkout-status__status ${stage === "cart" ? "checkout-status__status--active" : ""}`}>Cart <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className={`checkout-status__status ${stage === "info" ? "checkout-status__status--active" : ""}`}>Info & Shipping <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className={`checkout-status__status ${stage === "payment" ? "checkout-status__status--active" : ""}`}>Payment <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className={`checkout-status__status ${stage === "summary" ? "checkout-status__status--active" : ""}`}>Summary </h3>
      </div>
    </div>
  )
}

export default CheckoutStatus