import useAppStore from "../../store";
import EmptyCart from "./EmptyCart"

function Cart() {

  const cartStatus = useAppStore(s => s.productsRef.showHideCart);

  return (
    <div className="cart" style={{ right: cartStatus ? "0" : "-100%" }}>
      <EmptyCart />
    </div>
  )
}

export default Cart