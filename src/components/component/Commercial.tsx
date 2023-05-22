import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";

type CDT = {
  names: [string, string],
  price: string,
  Img: string,
  altName: string,
}[]

function Commercial() {

  const commercialDetail: CDT = [
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
      names: ["Ocular Home charging", "Titan Combi DC"],
      price: "$1,200",
      Img: "/c-image-3.svg",
      altName: "product card"
    },

    {
      names: ["EV,Link Home charging", "Dual Port 4"],
      price: "$2,050",
      Img: "/c-image-4.svg",
      altName: "product card"
    },

    {
      names: ["Juice Home charging", "??????????"],
      price: "$600",
      Img: "/c-image-5.svg",
      altName: "product card"
    },

  ]


  return (
    <section className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="Commercial" text="Charging as a service." iconSrc="/buliding.svg" />
        {commercialDetail.map(txt => (
          <ShopChargersCard names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Commercial