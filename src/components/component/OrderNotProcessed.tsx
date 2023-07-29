
function OrderNotProcessed() {
  return (
    <div className="congrats">
      <div className="congrats__box">
        <div className="congrats__spinner">
          <img src="/not-processed.png" alt="loading spinner" />
        </div>

        <div>
          <h2 className="congrats__heading">Error!</h2>
          <p className="congrats__paragraph">Your order could not be processed. Please try again</p>
        </div>

        <button className="congrats__btn" type="button">Ok</button>
      </div>
    </div>
  )
}

export default OrderNotProcessed