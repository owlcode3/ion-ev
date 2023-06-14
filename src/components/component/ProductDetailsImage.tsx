
function ProductDetailsImage() {
  return (
    <div className="pd-image">
      <div className="pd-image__box-1">
        <img className="pd-image__img" src="/tsla-1.svg" alt="product image" />
        <div className="pd-image__icon-box-1">
          <div className="pd-image__arrow-1">
            <img src="/public/arrow-l.svg" alt="arrow right icon" />
          </div>
          <div className="pd-image__arrow-2">
            <img src="/public/arrow-r.svg" alt="arrow right icon" />
          </div>
        </div>

        <div className="pd-image__icon-box-2">
          <span className="pd-image__dot"></span>
          <span className="pd-image__dot"></span>
          <span className="pd-image__dot"></span>
        </div>
      </div>

      <div className="pd-image__box-2">
        <div className="pd-image__name-box">
          <h1 className="pd-image__name">
            Tesla Wall Connector (3rd Gen) <span className="pd-image__price pd-image__price--shown">$450</span>
          </h1>
          <span className="pd-image__price">$450</span>
          <div className="pd-image__quantity-box">
            <span className="pd-image__quantity">Quantity:</span>
            <div className="pd-image__counts-box">
              <span className="pd-image__minus">-</span>
              <span>1</span>
              <span className="pd-image__add">+</span>
            </div>
          </div>
          <button className="pd-image__btn">ADD TO CART</button>
        </div>
        <div>
          <div className="pd-image__description-box">
            <span className="pd-image__description">Description</span>
            <p className="pd-image__texts">Wall Connector is the most convenient charging solution
              for houses, apartments, hospitality properties and workplaces.</p>
          </div>
          <div>
            <span className="pd-image__info">Info</span>
            <ul className="pd-image__lists">
              <li className="pd-image__list">
                Designed & manufactured by Tesla
              </li>
              <li className="pd-image__list">
                Warranty- 4 Years
              </li>
              <li className="pd-image__list">
                Charging Speed – 22kW (120 km of driving per hour of charge)
              </li>
              <li className="pd-image__list">
                Compatible with TESLA models only
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsImage