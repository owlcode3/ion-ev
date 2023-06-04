import useAppStore from "../../store"

function AllProducts() {

  const residentialRef = useAppStore(s => s.productsRef.residentialRef)
  const commercialRef = useAppStore(s => s.productsRef.commercialRef)
  const adapters = useAppStore(s => s.productsRef.adaptersRef);
  const evc = useAppStore(s => s.productsRef.evChargingRef);
  const eva = useAppStore(s => s.productsRef.evAccessoriesRef);


  return (
    <ul className="all-products__lists">
      <li className="all-products__list" onClick={() => residentialRef?.current?.scrollIntoView({ behavior: "smooth" })}>
        All products <span className="all-products__no">(40)</span>
      </li>
      <li className="all-products__list" onClick={() => residentialRef?.current?.scrollIntoView({ behavior: "smooth" })}>
        Residential <span className="all-products__no">(5)</span>
      </li>
      <li className="all-products__list" onClick={() => commercialRef?.current?.scrollIntoView({ behavior: "smooth" })}>
        Commercial <span className="all-products__no">(4)</span>
      </li>
      <li className="all-products__list" onClick={() => eva?.current?.scrollIntoView({ behavior: "smooth" })}>
        EV Accessories <span className="all-products__no">(8)</span>
      </li>
      <li className="all-products__list" onClick={() => evc?.current?.scrollIntoView({ behavior: "smooth" })}>
        EV Charging Cable <span className="all-products__no">(6)</span>
      </li>
      <li className="all-products__list" onClick={() => adapters?.current?.scrollIntoView({ behavior: "smooth" })}>
        Adapters <span className="all-products__no">(8)</span>
      </li>
    </ul>
  )
}

export default AllProducts