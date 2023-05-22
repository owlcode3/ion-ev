import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";

type RDT = {
  names: [string, string],
  price: string,
  Img: string,
  altName: string,
}[]

function Commercial() {

  const commercialDetail: RDT = [
    {
      names: ["Juice Commercial charging", "Juice Ultra"],
      price: "$1,990",
      Img: "/c-image-1.svg",
      altName: "product card",
    },
    {
      names: ["Juice Commercial charging", "Juice Director (2)"],
      price: "$2,000",
      Img: "/c-image-2.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Home charging", "Wall Connector (3)"],
      price: "$450",
      Img: "/r-image-3.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Home charging", "Wall Connector (3)"],
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
          tag="Commercial" text="Charging as a service." />
        {commercialDetail.map(txt => (
          <ShopChargersCard names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Commercial