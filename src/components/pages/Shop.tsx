import { Outlet } from "react-router-dom"
import ShopFooter from "../layouts/Shop/ShopFooter"
import ShopHeader from "../layouts/Shop/ShopHeader"


function Shop() {
  return (
    <>
      <ShopHeader />
      <Outlet />
      <ShopFooter />
    </>
  )
}

export default Shop