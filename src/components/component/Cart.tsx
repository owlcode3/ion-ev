import useAppStore from "../../store";
import EmptyCart from "./EmptyCart"
import FilledCart from "./FilledCart";

function Cart() {

  const cartStatus = useAppStore(s => s.productsRef.showHideCart);
  const cartItemsNo = useAppStore(s => s.productsRef.cartItemsNo);

  return (
    <div className="cart" style={{ right: cartStatus ? "0" : "-100%" }}>
      {cartItemsNo > 0 ? <FilledCart /> : <EmptyCart />}
    </div>
  )
}

export default Cart