import OnlineSpecialist from "../../component/OnlineSpecialist"
import ProductDetailsAlsoView from "../../component/ProductDetailsAlsoView"
import ProductDetailsFeatures from "../../component/ProductDetailsFeatures"
import ProductDetailsImage from "../../component/ProductDetailsImage"

function ShopProductDetailsBody() {
  return (
    <div className="spd-body">
      <ProductDetailsImage />
      <ProductDetailsFeatures />
      <ProductDetailsAlsoView />
      <OnlineSpecialist />
    </div>
  )
}

export default ShopProductDetailsBody