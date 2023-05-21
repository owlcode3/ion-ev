import { GrNext, GrPrevious } from "react-icons/gr";
import BestSellingCard from "./BestSellingCard"
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function ChargerInstallation() {

  const scrollRightRef = useRef<HTMLUListElement | null>(null);
  const [hideNext, setHideNext] = useState(false);
  const [hidePrev, setHidePrev] = useState(true);


  const chargerDetail = [
    {
      name: "Residential EV Charger Installation | Single Phase",
      price: "$990",
      Img: "/ec-img-1.svg",
      altName: "product card"
    },
    {
      name: "Residential EV Charger Installation | Three Phase",
      price: "$1,175",
      Img: "/ec-img-2.svg",
      altName: "product card"
    },
    {
      name: "Residential EV Charger Installation | Two Phase",
      price: "$1,098",
      Img: "/ec-img-3.svg",
      altName: "product card"
    },
    {
      name: "CCS Combo 1 to CCS Combo 2",
      price: "$605",
      Img: "/ec-img-4.svg",
      altName: "product card"
    },
  ]


  const scrollIt = (toRight: boolean) => {
    const scrollLength = 300;
    if (scrollRightRef && scrollRightRef.current) {
      scrollRightRef.current.scrollBy({
        left: scrollLength * (toRight ? 1 : -1),
        behavior: "smooth"
      });

    }

  };

  const scrolled = (e: React.UIEvent<HTMLUListElement, UIEvent>) => {
    const end = Math.abs(e.currentTarget.offsetWidth + e.currentTarget.scrollLeft) == e.currentTarget.scrollWidth;
    const start = e.currentTarget.scrollLeft > 1;

    if (end) {
      setHideNext(true);
    } else {
      setHideNext(false);
    }

    if (start) {
      setHidePrev(false);
    } else {
      setHidePrev(true);
    }
  };
  return (
    <section className="residential">
      <div className="residential__box-1">
        <h2 className="residential__heading">Ev Charger Installation</h2>
      </div>

      <ul ref={scrollRightRef} onScroll={scrolled} className="residential__box-2">
        {chargerDetail.length ? (
          <div
            onClick={() => scrollIt(false)}
            style={{ display: hidePrev ? "none" : "flex" }}
            className="scroll-prev"
          >
            <GrPrevious size={25} />
          </div>
        ) : (
          ""
        )}
        {chargerDetail.map(txt => (
          <BestSellingCard name={txt.name} price={txt.price} img={txt.Img} altName={txt.altName} addShopCn />
        ))}
        {chargerDetail.length ? (
          <div
            onClick={() => scrollIt(true)}
            style={{ display: hideNext ? "none" : "flex" }}
            className="scroll-next"
          >
            <GrNext size={25} />
          </div>
        ) : (
          ""
        )}
      </ul>

      <div className="residential__unknown">Don't know which to choose?<Link className="residential__learn-more" to="/">Learn more</Link></div>
    </section>
  )

}

export default ChargerInstallation