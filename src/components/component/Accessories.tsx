import { GrNext, GrPrevious } from "react-icons/gr";
import BestSellingCard from "./BestSellingCard";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function Accessories() {

  const scrollRightRef = useRef<HTMLUListElement | null>(null);
  const [hideNext, setHideNext] = useState(false);
  const [hidePrev, setHidePrev] = useState(true);

  const accessoriesDetails = [
    {
      name: "EV Cable & Plug Holder",
      price: "$39,00",
      Img: "/ea-img-1.svg",
      altName: "product card"
    },
    {
      name: "Female Socket Type 2",
      price: "$34,00",
      Img: "/ea-img-2.svg",
      altName: "product card"
    },
    {
      name: "RCCB Type B ~ Current circuit breaker B type",
      price: "$120",
      Img: "/ea-img-3.svg",
      altName: "product card"
    },
    {
      name: "Portable EV Cable Bag",
      price: "$56,00",
      Img: "/ea-img-4.svg",
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
        <h2 className="residential__heading">EV Accessories</h2>
      </div>

      <ul ref={scrollRightRef} onScroll={scrolled} className="residential__box-2">
        {accessoriesDetails.length ? (
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
        {accessoriesDetails.map(txt => (
          <BestSellingCard name={txt.name} price={txt.price} img={txt.Img} altName={txt.altName} addShopCn />
        ))}
        {accessoriesDetails.length ? (
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

export default Accessories