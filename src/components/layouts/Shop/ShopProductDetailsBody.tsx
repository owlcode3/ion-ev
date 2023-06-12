import OnlineSpecialist from "../../component/OnlineSpecialist"
import ProductDetailsFeatures from "../../component/ProductDetailsFeatures"
import ProductDetailsImage from "../../component/ProductDetailsImage"

function ShopProductDetailsBody() {
  return (
    <div className="spd-body">
      <ProductDetailsImage />
      <ProductDetailsFeatures />
      <OnlineSpecialist />
    </div>
  )
}

export default ShopProductDetailsBody