import ProductDetailsFeatures from "../../component/ProductDetailsFeatures"
import ProductDetailsImage from "../../component/ProductDetailsImage"

function ShopProductDetailsBody() {
  return (
    <div className="spd-body">
      <ProductDetailsImage />
      <ProductDetailsFeatures />
    </div>
  )
}

export default ShopProductDetailsBody