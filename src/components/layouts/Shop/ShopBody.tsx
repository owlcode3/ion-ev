import Accessories from "../../component/Accessories"
import Adapters from "../../component/Adapters"
import AllProducts from "../../component/AllProducts"
import Charging from "../../component/Charging"
import Commercial from "../../component/Commercial"
import HeroShop from "../../component/HeroShop"
import OnlineSpecialist from "../../component/OnlineSpecialist"
import Residential from "../../component/Residential"


function ShopBody() {
  return (
    <div className="shop-body">
      <HeroShop />
      <div>
        <AllProducts />
        <Residential />
        <Commercial />
        <Adapters />
        <Charging />
        <Accessories />
      </div>
      <OnlineSpecialist />
    </div>
  )
}

export default ShopBody