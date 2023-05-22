import { Link } from "react-router-dom";
import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";

type RDT = {
  names: [string, string],
  price: string,
  Img: string,
  altName: string,
}[]

function Residential() {

  const residentialDetail: RDT = [
    {
      names: ["Tesla Home charging", "Wall Connector (3)"],
      price: "$450",
      Img: "/r-image-1.svg",
      altName: "product card",
    },
    {
      names: ["Tesla Home charging", "Wall Connector (3)"],
      price: "$450",
      Img: "/r-image-2.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Home charging", "Wall Connector (3)"],
      price: "$450",
      Img: "/r-image-3.svg",
      altName: "product card"
    },

    {
      names: ["Myenergi Home charging", "Wall Connector (3)"],
      price: "$850",
      Img: "/r-image-4.svg",
      altName: "product card"
    },

    {
      names: ["Juice Home charging", "Wall Connector (3)"],
      price: "$600",
      Img: "/r-image-5.svg",
      altName: "product card"
    },

  ]


  return (
    <section className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="Residential" text="Charge from the comfort of your house." />
        {residentialDetail.map(txt => (
          <ShopChargersCard names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )

}

export default Residential
