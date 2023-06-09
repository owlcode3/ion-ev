import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";
import { ProductDetails } from "../../types";
import { useRef, useEffect } from "react";
import useAppStore from "../../store";



function Accessories() {

  const accessoriesDetail: ProductDetails = [
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

  ]

  const evaRef = useRef<HTMLElement>(null)

  const setEVARef = useAppStore(s => s.setEVARef)

  useEffect(() => {
    setEVARef(evaRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <section ref={evaRef} className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="EV Accessories" text="Get everything EV and more." iconSrc="/recharging.svg" />
        {accessoriesDetail.map((txt, index) => (
          <ShopChargersCard key={index} names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Accessories