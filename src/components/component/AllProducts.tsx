import { useState } from "react";
import useAppStore from "../../store"

type ProductClickType = "all" | "residential" | "commercial" | "eva" | "evc" | "adapters";

function AllProducts() {

  const residentialRef = useAppStore(s => s.productsRef.residentialRef)
  const commercialRef = useAppStore(s => s.productsRef.commercialRef)
  const adapters = useAppStore(s => s.productsRef.adaptersRef);
  const evc = useAppStore(s => s.productsRef.evChargingRef);
  const eva = useAppStore(s => s.productsRef.evAccessoriesRef);

  const [productsClicks, setProductsClick] = useState<ProductClickType>("all");


  return (
    <div className="all-products">

      <ul className="all-products__lists">
        <li className={`all-products__list ${productsClicks === "all" ? "active-product" : ""}`}
          onClick={() => {
            residentialRef?.current?.scrollIntoView({ behavior: "smooth" })
            setProductsClick("all")
          }}>
          All products <span className="all-products__no">(40)</span>
        </li>

        <li className={`all-products__list ${productsClicks === "residential" ? "active-product" : ""}`}
          onClick={() => {
            residentialRef?.current?.scrollIntoView({ behavior: "smooth" })
            setProductsClick("residential")
          }}>
          Residential <span className="all-products__no">(5)</span>
        </li>

        <li className={`all-products__list ${productsClicks === "commercial" ? "active-product" : ""}`}
          onClick={() => {
            commercialRef?.current?.scrollIntoView({ behavior: "smooth" })
            setProductsClick("commercial")
          }}>
          Commercial <span className="all-products__no">(4)</span>
        </li>

        <li className={`all-products__list ${productsClicks === "eva" ? "active-product" : ""}`}
          onClick={() => {
            eva?.current?.scrollIntoView({ behavior: "smooth" })
            setProductsClick("eva")
          }}>
          EV Accessories <span className="all-products__no">(8)</span>
        </li>

        <li className={`all-products__list ${productsClicks === "evc" ? "active-product" : ""}`}
          onClick={() => {
            evc?.current?.scrollIntoView({ behavior: "smooth" })
            setProductsClick("evc")
          }}>
          EV Charging Cable <span className="all-products__no">(6)</span>
        </li>

        <li className={`all-products__list ${productsClicks === "adapters" ? "active-product" : ""}`}
          onClick={() => {
            adapters?.current?.scrollIntoView({ behavior: "smooth" })
            setProductsClick("adapters")
          }}>
          Adapters <span className="all-products__no">(8)</span>
        </li>
      </ul>

    </div>
  )
}

export default AllProducts