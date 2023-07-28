import CheckoutStatus from "./CheckoutStatus"
import PayMoneyBtn from "./PayMoneyBtn"
import SummaryLists from "./SummaryLists"
import YourOrder from "./YourOrder"

function Summary() {
  return (
    <div className="summary">
      <CheckoutStatus />
      <div className="summary__box">
        <div className="summary__box-inner">
          <SummaryLists />
          <PayMoneyBtn />
        </div>
        <YourOrder addMarginTop />
      </div>
    </div>
  )
}

export default Summary