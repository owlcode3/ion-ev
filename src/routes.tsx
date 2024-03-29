import { createBrowserRouter } from "react-router-dom"
import "./styles/index.scss"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import ShopBody from "./components/layouts/Shop/ShopBody"
import ShopProductDetailsBody from "./components/layouts/Shop/ShopProductDetailsBody"
import OrderProcessing from "./components/component/OrderProcessing"
import InfoAndShipping from "./components/component/InfoAndShipping"
import Checkout from "./components/pages/Checkout"
import Payment from "./components/component/Payment"
import Summary from "./components/component/Summary"
import Congrats from "./components/component/Congrats"
import OrderNotProcessed from "./components/component/OrderNotProcessed"


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/op",
      // element: <OrderProcessing />
      // element: <Congrats />
      element: <OrderNotProcessed />
    },
    {
      path: "/checkout",
      element: <Checkout />,
      children: [
        {
          path: "", element:
            <>
              {/* <InfoAndShipping /> */}
              {/* <Summary /> */}
              {/* <Payment /> */}
            </>
        }
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
