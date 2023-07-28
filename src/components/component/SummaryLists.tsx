
function SummaryLists() {
  return (
    <ul className="summary__lists">
      <li className="summary__list">
        <h2 className="summary__heading">Order Summary</h2>
        <p className="summary__paragraph">Before you place your order, please take a moment to review your shipping information, billing information, and bag summary.</p>
      </li>

      <li className="summary__list summary__list--flex">
        <div className="summary__list-box">
          <h2 className="summary__heading">Contact Info</h2>
          <p className="summary__paragraph summary__paragraph--others">
            Ololade Bello
            bellololade2017@gmail.com
          </p>
        </div>
        <span className="summary__edit">Edit</span>
      </li>

      <li className="summary__list summary__list--flex">
        <div className="summary__list-box">
          <h2 className="summary__heading">Shipping Address</h2>
          <p className="summary__paragraph summary__paragraph--others">
            Ololade Bello<br />
            06 Redan Rd
            Decatur, GA 30032, US
            bellololade2017@gmail.com
            (184) 843-7205
          </p>
        </div>
        <span className="summary__edit">Edit</span>
      </li>

      <li className="summary__list summary__list--flex">
        <div className="summary__list-box">
          <h2 className="summary__heading">Delivery info</h2>
          <p className="summary__paragraph summary__paragraph--others">
            Shipping address<br /> Monday 6 - Wednesday 8, March
          </p>
        </div>
        <span className="summary__edit">Edit</span>
      </li>

      <li className="summary__list summary__list--flex">
        <div className="summary__list-box">
          <h2 className="summary__heading">Billing Address</h2>
          <p className="summary__paragraph summary__paragraph--others">
            Ololade Bello<br /> 06 Redan Rd Decatur, GA 30032, US
          </p>
        </div>
        <span className="summary__edit">Edit</span>
      </li>

      <li className="summary__list summary__list--flex">
        <div className="summary__list-box">
          <h2 className="summary__heading">Payment</h2>
          <div className="summary__payment-box">
            <img className="summary__payment-card-type" src="/mastercard-small.svg" />
            <p className="summary__paragraph summary__paragraph--others">
              Ololade Bello <br /> '3457
            </p>
          </div>
        </div>
        <span className="summary__edit">Edit</span>
      </li>

      <li className="summary__list">
        <h2 className="summary__heading">Review</h2>
        <p className="summary__paragraph">By clicking the "Place Order" button, you confirm that you have read, understand, and accept our <span className="summary__underline">Terms of Use</span>, <span className="summary__underline">Terms of Sale</span>, <span className="summary__underline">Privacy Policy</span>, and <span className="summary__underline">Return Policy</span>.</p>
      </li>
    </ul>
  )
}

export default SummaryLists