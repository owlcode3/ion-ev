

function CardInformation() {
  return (
    <div className="card-information">
      <h2 className="card-information__heading">Card information</h2>
      <form className="card-information__form" action="">
        <div className="card-information__input-box">
          <div className="card-information__label-box">
            <label className="card-information__label" htmlFor="card number">Card Number</label>
            <input className="card-information__input" type="text" id="card number" name="card number" />
          </div>
          <div className="card-information__label-box">
            <label className="card-information__label" htmlFor="name on card">Name on card</label>
            <input className="card-information__input" type="text" id="name on card" name="name on card" />
          </div>
        </div>

        <div className="card-information__box">
          <div className="card-information__input-box card-information__input-box--2">
            <div className="card-information__label-box">
              <label className="card-information__label" htmlFor="expiration">Expiration</label>
              <input className="card-information__input" type="text" id="expiration" name="expiration" />
            </div>
          </div>

          <div className="card-information__input-box">
            <div className="card-information__label-box">
              <label className="card-information__label" htmlFor="security code">Security Code <img className="card-information__sc-icon" src="/i-dot.svg" alt="i-dot icon" /></label>
              <input className="card-information__input" type="text" id="security code" name="security code" />
            </div>
          </div>
        </div>

        <div className="card-information__input-box card-information__input-box--checkbox">
          <div className="card-information__label-box card-information__label-box--checkbox">
            <input className="card-information__input-checkbox" type="checkbox" id="checkbox" name="checkbox" />
            <label className="card-information__label card-information__label--checkbox" htmlFor="checkbox">Billing address same as shipping</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CardInformation