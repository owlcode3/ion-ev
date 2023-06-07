import { GrNext, GrPrevious } from "react-icons/gr";
import BestSellingCard from "./BestSellingCard"
import { useRef, useState } from "react";


function BestSelling() {

  const scrollRightRef = useRef<HTMLUListElement | null>(null);
  const [hideNext, setHideNext] = useState(false);
  const [hidePrev, setHidePrev] = useState(true);
  const bestSellingDetails = [
    {
      name: "Enel X JuiceBox 40",
      price: "$401",
      Img: "/r-image-3.svg",
      altName: "product card"
    },
    {
      name: "Grizzl-E Classic NEMA ",
      price: "$200",
      Img: "/r-image-4.svg",
      altName: "product card"
    },

    {
      name: "Tesla Wall Connector (3)",
      price: "$450",
      Img: "/r-image-5.svg",
      altName: "product card"
    },

    {
      name: "Chargiepoint Home Flex",
      price: "$393",
      Img: "/char-image-1.svg",
      altName: "product card"
    },

    {
      name: "Grizzl-E Classic NEMA ",
      price: "$200",
      Img: "/char-image-2.svg",
      altName: "product card"
    }
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
    <section className="bs">
      <div className="bs__box-1">
        <h2 className="bs__heading">Best selling chargers</h2>
        <p className="bs__paragraph">Don't have a charger yet?</p>
      </div>

      <ul ref={scrollRightRef} onScroll={scrolled} className="bs__box-2">
        {bestSellingDetails.length ? (
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
        {bestSellingDetails.map((txt, index) => <BestSellingCard key={index} name={txt.name} price={txt.price} img={txt.Img} altName={txt.altName} />)}
        {bestSellingDetails.length ? (
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

      <button className="bs__btn">Visit Store<img src="/arrow-r.svg" alt="arrow right icon" /></button>
    </section>
  )
}

export default BestSelling