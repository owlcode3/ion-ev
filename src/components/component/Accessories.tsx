import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";

type RDT = {
  names: [string, string],
  price: string,
  Img: string,
  altName: string,
}[]

function Accessories() {

  const accessoriesDetail: RDT = [
    {
      names: ["Mennekes EV Accessories", "Type 2 Inlet"],
      price: "$35",
      Img: "/eac-image-1.svg",
      altName: "product card",
    },
    {
      names: ["Tesla Accessories", "Cable & Plug holder"],
      price: "$450",
      Img: "/eac-image-2.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Accessories", "Portable cable bag"],
      price: "$450",
      Img: "/eac-image-3.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Accessories", "Female Socket"],
      price: "$450",
      Img: "/eac-image-4.svg",
      altName: "product card"
    },

    {
      names: ["Juice Home charging", "??????"],
      price: "$600",
      Img: "eac-image-5.svg",
      altName: "product card"
    },

  ]


  return (
    <section className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="EV Accessories" text="Get everything EV and more." iconSrc="/recharging.svg" />
        {accessoriesDetail.map(txt => (
          <ShopChargersCard names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Accessories