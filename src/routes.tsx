import { createBrowserRouter } from "react-router-dom"
import "./styles/index.scss"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import ShopBody from "./components/layouts/Shop/ShopBody"
import ShopProductDetailsBody from "./components/layouts/Shop/ShopProductDetailsBody"
import OrderProcessing from "./components/component/OrderProcessing"
import InfoAndShipping from "./components/component/InfoAndShipping"
import Checkout from "./components/pages/Checkout"


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/op",
      element: <OrderProcessing />
    },
    {
      path: "/checkout",
      element: <Checkout />,
      children: [
        { path: "", element: <InfoAndShipping /> }
      ]
    },
    {
      path: "/shop",
      element: <Shop />,
      children: [
        { path: "", element: <ShopBody /> },
        { path: "/shop/:id", element: <ShopProductDetailsBody /> },
      ]
    }
  ]
)



export default router
