import { useState } from "react";

type MethodType = "paypal" | "mastercard" | "visa" | "applepay";


function PaymentMethod() {

  const [clickedMethod, setClickedMethod] = useState<MethodType>("mastercard")


  return (
    <div className="payment-method">
      <h2 className="payment-method__heading-1">Payment</h2>
      <span className="payment-method__heading-2">Choose a payment method</span>

      <ul className="payment-method__lists">
        <li className={`payment-method__list ${clickedMethod === "paypal" ? "payment-method__list--active" : ""}`} onClick={() => setClickedMethod("paypal")}>
          <img className="payment-method__icon" src="/PayPal.svg" alt="paypal icon" />
          <span className="payment-method__name">Paypal</span>
        </li>
        <li className={`payment-method__list ${clickedMethod === "mastercard" ? "payment-method__list--active" : ""}`} onClick={() => setClickedMethod("mastercard")}>
          <img className="payment-method__icon" src="/Mastercard.svg" alt="mastercard icon" />
          <span className="payment-method__name">Mastercard</span>
        </li>
        <li className={`payment-method__list ${clickedMethod === "visa" ? "payment-method__list--active" : ""}`} onClick={() => setClickedMethod("visa")}>
          <img className="payment-method__icon" src="/visa-logo.svg" alt="visa icon" />
          <span className="payment-method__name">Visa</span>
        </li>
        <li className={`payment-method__list ${clickedMethod === "applepay" ? "payment-method__list--active" : ""}`} onClick={() => setClickedMethod("applepay")}>
          <img className="payment-method__icon" src="/ApplePay.svg" alt="ApplePay icon" />
          <span className="payment-method__name">Apple pay</span>
        </li>
      </ul>
    </div>
  )
}

export default PaymentMethod