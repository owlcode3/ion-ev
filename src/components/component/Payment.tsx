import CardInformation from "./CardInformation"
import CheckoutStatus from "./CheckoutStatus"
import ContinueBtn from "./ContinueBtn"
import PaymentMethod from "./PaymentMethod"
import YourOrder from "./YourOrder"

function Payment() {
  return (
    <div className="payment">
      <CheckoutStatus />
      <div className="payment__box">
        <div className="payment__box-inner">
          <PaymentMethod />
          <CardInformation />
          <ContinueBtn />
        </div>
        <YourOrder />
      </div>
    </div>
  )
}

export default Payment