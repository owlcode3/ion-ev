import { createBrowserRouter } from "react-router-dom"
import "./styles/index.scss"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> }
  ]
)



export default router
