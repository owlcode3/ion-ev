import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";
import { ProductDetails } from "../../types";
import { useRef, useEffect } from "react";
import useAppStore from "../../store";

function Charging() {

  const chargingDetail: ProductDetails = [
    {
      names: ["Juice Charging Cables", "Juice Booster (2)"],
      price: "$35",
      Img: "/char-image-1.svg",
      altName: "product card",
    },
    {
      names: ["Juice Home charging", "Juice Flow"],
      price: "$100",
      Img: "/char-image-2.svg",
      altName: "product card"
    },

    {
      names: ["Tesla Charging Cables", "Type 1 - Type 2"],
      price: "$90",
      Img: "/char-image-3.svg",
      altName: "product card"
    },

    {
      names: ["CCS Charging Cables", "Combo 1 - Combo 2"],
      price: "$55",
      Img: "/char-image-4.svg",
      altName: "product card"
    },

  ]

  const evcRef = useRef<HTMLElement>(null)

  const setEVCRef = useAppStore(s => s.setEVCRef)

  useEffect(() => {
    setEVCRef(evcRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <section ref={evcRef} className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="EV Charging Cables" text="Long lasting ev cables." iconSrc="/connected.svg" />
        {chargingDetail.map((txt, index) => (
          <ShopChargersCard key={index} names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Charging