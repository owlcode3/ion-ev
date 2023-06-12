import { ProductDetails } from "../../types"
import ShopChargersCard from "./ShopChargersCard"

function ProductDetailsAlsoView() {

  const bestSellingDetails: ProductDetails = [
    {
      names: ["Tesla Home charging", "Wall Connector(3)"],
      price: "$450",
      Img: "/r-image-3.svg",
      altName: "product card"
    },
    {
      names: ["Myenergi Home charging", "Zappi"],
      price: "$850",
      Img: "/r-image-4.svg",
      altName: "product card"
    },

    {
      names: ["Juice Home charging", "Juice Charger me (3)"],
      price: "$450",
      Img: "/r-image-5.svg",
      altName: "product card"
    }
  ]
  return (
    <div className="pd-av">
      <h2 className="pd-av__heading">Customers also viewed</h2>
      <ul className="pd-av__lists">
        {bestSellingDetails.map((txt, index) => <ShopChargersCard key={index} names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />)}
      </ul>
      <button className="pd-av__btn">Visit More<img src="/arrow-r.svg" alt="arrow right icon" /></button>
    </div>
  )
}

export default ProductDetailsAlsoView