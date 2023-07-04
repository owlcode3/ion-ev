import { useState } from "react";
import Features from "./Features"
import Specifications from "./Specifications"
import WhatYouReceive from "./WhatYouReceive"

type ActiveType = "features" | "specifications" | "whatYouReceive";

function ProductDetailsFeatures() {

  const [active, setActive] = useState<ActiveType>("features");

  return (
    <div className="pd-features">
      <ul className="pd-features__lists-1 pd-features__box-1">
        <li className={`pd-features__list-1 ${active === "features" ? "active-fl" : " "}`} onClick={() => setActive("features")}>
          Features
        </li>

        <li className={`pd-features__list-1 ${active === "specifications" ? "active-fl" : " "}`} onClick={() => setActive("specifications")}>
          Specifications
        </li>

        <li className={`pd-features__list-1 ${active === "whatYouReceive" ? "active-fl" : " "}`} onClick={() => setActive("whatYouReceive")}>
          What you receive
        </li>
      </ul>

      <div className="pd-features__box-2">
        {active === "features" ? <Features /> : ""}
        {active === "specifications" ? <Specifications /> : ""}
        {active === "whatYouReceive" ? <WhatYouReceive /> : ""}
      </div>
    </div>
  )
}

export default ProductDetailsFeatures