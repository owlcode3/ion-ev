
type Props = {
  names: [string, string],
  price: string,
  img: string,
  altName: string,
}


function ShopChargersCard({ names, price, img, altName }: Props) {
  return (
    <li className="residential__card">
      <div className="residential__img-box">
        <img className="residential__img" src={img} alt={`${altName} icon`} />
      </div>
      <div className="residential__texts-box">
        <div className="residential__name-box">
          <span className="residential__card-name-1">{names[0].split(" ")[0]} <span className="residential__dot"></span> {names[0].split(" ")[1]} {names[0].split(" ")[2]}</span>
          <span className="residential__card-name-2">{names[1]}</span>
        </div>
        <span className="residential__card-price">{price}</span>
      </div>
    </li>)
}

export default ShopChargersCard