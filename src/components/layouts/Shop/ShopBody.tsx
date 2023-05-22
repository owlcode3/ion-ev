import Accessories from "../../component/Accessories"
import Adapters from "../../component/Adapters"
// import ChargerInstallation from "../../component/ChargerInstallation"
import Charging from "../../component/Charging"
import Commercial from "../../component/Commercial"
// import OnlineSpecialist from "../../component/OnlineSpecialist"
import Residential from "../../component/Residential"


function ShopBody() {
  return (
    <div className="shop-body">
      <Residential />
      <Commercial />
      <Adapters />
      <Charging />
      <Accessories />
      {/*
      <ChargerInstallation />
      <OnlineSpecialist /> */}
    </div>
  )
}

export default ShopBody