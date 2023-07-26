
// type CheckoutStage = "cart" | "info" | "payment" | "summary";

function CheckoutStatus() {

  // const [status, setStatus] = useState<CheckoutStage>("cart")
  return (
    <div className="checkout-status">
      <h1 className="checkout-status__checkout">Checkout</h1>
      <div className="checkout-status__status-box">
        <h3 className={`checkout-status__status ${status === "cart" ? "checkout-status__status--active" : ""}`}>Cart <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className={`checkout-status__status ${status === "info" ? "checkout-status__status--active" : ""}`}>Info & Shipping <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className={`checkout-status__status ${status === "payment" ? "checkout-status__status--active" : ""}`}>Payment <img src="arrow-right.svg" alt="arrow right" /></h3>
        <h3 className={`checkout-status__status ${status === "summary" ? "checkout-status__status--active" : ""}`}>Summary </h3>
      </div>
    </div>
  )
}

export default CheckoutStatus