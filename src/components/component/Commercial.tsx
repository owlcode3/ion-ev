import { GrNext, GrPrevious } from "react-icons/gr";
import BestSellingCard from "./BestSellingCard";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function Commercial() {

  const scrollRightRef = useRef<HTMLUListElement | null>(null);
  const [hideNext, setHideNext] = useState(false);
  const [hidePrev, setHidePrev] = useState(true);

  const commercialDetails = [
    {
      name: "Ocular IQ Dual Port Tower",
      price: "$4,001",
      Img: "/com-img-1.svg",
      altName: "product card"
    },
    {
      name: "EVlink Wallbox Attached Cable Type2",
      price: "$200",
      Img: "/com-img-2.svg",
      altName: "product card"
    },
    {
      name: "Ocular Single Charger",
      price: "$900",
      Img: "/bs-card-4.svg",
      altName: "product card"
    },
    {
      name: "Ocular Titan Combo DC CCS2",
      price: "$1,800",
      Img: "/com-img-4.svg",
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
        <h2 className="residential__heading">Commercial EV Charging Stations</h2>
      </div>

      <ul ref={scrollRightRef} onScroll={scrolled} className="residential__box-2">
        {commercialDetails.length ? (
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
        {commercialDetails.map(txt => (
          <BestSellingCard name={txt.name} price={txt.price} img={txt.Img} altName={txt.altName} addShopCn />
        ))}
        {commercialDetails.length ? (
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

export default Commercial