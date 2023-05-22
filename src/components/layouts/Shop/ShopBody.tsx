import Accessories from "../../component/Accessories"
import Adapters from "../../component/Adapters"
import Charging from "../../component/Charging"
import Commercial from "../../component/Commercial"
import Residential from "../../component/Residential"


function ShopBody() {
  return (
    <div className="shop-body">
      <Residential />
      <Commercial />
      <Adapters />
      <Charging />
      <Accessories />
    </div>
  )
}

export default ShopBody