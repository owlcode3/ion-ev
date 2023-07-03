import Features from "./Features"
import Specifications from "./Specifications"

function ProductDetailsFeatures() {
  return (
    <div className="pd-features">
      <ul className="pd-features__lists-1 pd-features__box-1">
        <li className='pd-features__list-1 active-fl'>
          Features
        </li>

        <li className='pd-features__list-1'>
          Specifications
        </li>

        <li className='pd-features__list-1'>
          What you receive
        </li>
      </ul>

      <div className="pd-features__box-2">
        <Specifications />
      </div>
    </div>
  )
}

export default ProductDetailsFeatures