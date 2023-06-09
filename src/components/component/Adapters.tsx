import ShopChargersCard from "./ShopChargersCard";
import ShopChargerCardTag from "./ShopChargerCardTag";
import { ProductDetails } from "../../types";
import { useRef, useEffect } from "react";
import useAppStore from "../../store";

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

  const adapterRef = useRef<HTMLElement>(null)

  const setAdapterRef = useAppStore(s => s.setAdapterRef)

  useEffect(() => {
    setAdapterRef(adapterRef)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <section ref={adapterRef} className="residential">
      <ul className="residential__box">
        <ShopChargerCardTag
          tag="Adapters" text="Charge on the go." iconSrc="/adaptericon.svg" />
        {adapterDetail.map((txt, index) => (
          <ShopChargersCard key={index} names={txt.names} price={txt.price} img={txt.Img} altName={txt.altName} />
        ))}
      </ul>
    </section>
  )
}

export default Adapters