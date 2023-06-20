
function OrderProcessing() {
  return (
    <div className="order-processing">
      <div className="order-processing__box">
        <img className="order-processing__spinner" src="/public/Ellipse 1.png" alt="loading spinner" />

        <div>
          <h2 className="order-processing__heading">Your order is processing.</h2>
          <p className="order-processing__paragraph">Do not hit back or refresh until your order is completed.</p>
        </div>
      </div>
    </div>
  )
}

export default OrderProcessing