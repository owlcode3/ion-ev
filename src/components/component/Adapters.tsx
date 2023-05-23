import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";
import { ProductDetails } from "../../types";

function Adapters() {

  const adapterDetail: ProductDetails = [
    {
      names: ["Zaptec Charging Adapter", "Zaptec Go"],
      price: "$65",
      Img: "/a-image-1.svg",
      altName: "product card",
    },
    {
      names: ["Zaptec Charging Adapter", "Zaptec Pro"],
      price: "$80",
      Img: "/a-image-2.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Charging Adapter", "SAE J1772"],
      price: "$71",
      Img: "/a-image-3.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Charging Adapter", "NEMA (2)"],
      price: "$45",
      Img: "/a-image-4.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Home Charging", "Female Plug (1)"],
      price: "$60",
      Img: "/a-image-5.svg",
      altName: "product card"
    },

  ]


  return (
    <section className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="Adapters" text="Charge on the go." iconSrc="/adaptericon.svg" />
        {adapterDetail.map(txt => (
          <ShopChargersCard names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Adapters