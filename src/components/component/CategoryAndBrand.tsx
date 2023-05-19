

function CategoryAndBrand() {
  return (
    <div className="category-brand">
      <ul className="category-brand__lists">
        <li className="category-brand__list">
          <span className="category-brand__cate-name">
            Categories:
          </span>
          <ul className="category-brand__inner-lists">
            <li className="category-brand__inner-list">
              All products
            </li>
            <li className="category-brand__inner-list">
              Residential
            </li>
            <li className="category-brand__inner-list">
              Commercial
            </li>
            <li className="category-brand__inner-list">
              EV Accessories
            </li>
            <li className="category-brand__inner-list">
              EV Charging Cable
            </li>
            <li className="category-brand__inner-list">
              Adapters
            </li>
            <li className="category-brand__inner-list">
              Charger Installation
            </li>
          </ul>

          <div className="category-brand__options">
            <select className="category-brand__select" name="categories" id="categories">
              <option className="category-brand__option" value="All products">
                All products
              </option>
              <option className="category-brand__option" value="Residential">
                Residential
              </option>
              <option className="category-brand__option" value="Commercial">
                Commercial
              </option>
              <option className="category-brand__option" value="EV Accessories">
                EV Accessories
              </option>
              <option className="category-brand__option" value="EV Charging Cable">
                EV Charging Cable
              </option>
              <option className="category-brand__option" value="Adapters">
                Adapters
              </option>
              <option className="category-brand__option" value="Charger Installation">
                Charger Installation
              </option>
            </select>
          </div>
        </li>

        <li className="category-brand__list">
          <span className="category-brand__cate-name">Car Brand:</span>
          <ul className="category-brand__inner-lists">
            <li className="category-brand__inner-list">
              Audi
            </li>
            <li className="category-brand__inner-list">
              BMW
            </li>
            <li className="category-brand__inner-list">
              Tesla
            </li>
            <li className="category-brand__inner-list">
              Nissan
            </li>
            <li className="category-brand__inner-list">
              KIA
            </li>
            <li className="category-brand__inner-list">
              Honda
            </li>
            <li className="category-brand__inner-list">
              Hyundai
            </li>
            <li className="category-brand__inner-list">
              Ford
            </li>
          </ul>

          <div className="category-brand__options">
            <select className="category-brand__select" name="card brand" id="car brand">
              <option className="category-brand__option" value="Audi">
                Audi
              </option>
              <option className="category-brand__option" value="BMW">
                BMW
              </option>
              <option className="category-brand__option" value="Tesla">
                Tesla
              </option>
              <option className="category-brand__option" value="Nissan">
                Nissan
              </option>
              <option className="category-brand__option" value="KIA">
                KIA
              </option>
              <option className="category-brand__option" value="Honda">
                Honda
              </option>
              <option className="category-brand__option" value="Hyundai">
                Hyundai
              </option>
              <option className="category-brand__option" value="Ford">
                Ford
              </option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CategoryAndBrand