
function ContactInformation() {
  return (
    <div className="ci">
      <h2 className="ci__heading">Contact information</h2>
      <form className="ci__form" action="">
        <div className="ci__input-box">
          <div className="ci__label-box">
            <label className="ci__label" htmlFor="email">Email</label>
            <input className="ci__input" type="text" id="email" name="email" />
          </div>
          <div className="ci__label-box">
            <label className="ci__label" htmlFor="first-name">First Name</label>
            <input className="ci__input" type="text" id="first-name" name="first name" />
          </div>
        </div>

        <div className="ci__input-box ci__input-box--2">
          <div className="ci__label-box">
            <label className="ci__label" htmlFor="last-name">Last Name</label>
            <input className="ci__input" type="text" id="last-name" name="last name" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactInformation