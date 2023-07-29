
function Congrats() {
  return (
    <div className="congrats">
      <div className="congrats__box">
        <div className="congrats__spinner">
          <img src="/congrats.png" alt="loading spinner" />
        </div>

        <div>
          <h2 className="congrats__heading">Congratulations!!!</h2>
          <p className="congrats__paragraph">Your order has been placed successfully! Check your mails for further information on shipping info and delivery updates.</p>
        </div>

        <button className="congrats__btn" type="button">Ok</button>
      </div>
    </div>
  )
}

export default Congrats