type Props = {
  name: string,
  price: string,
  img: string,
  altName: string,
  addShopCn?: boolean,
}


function BestSellingCard({ name, price, img, altName, addShopCn }: Props) {
  return (
    <li className={"bs__card" + " " + `${addShopCn ? "residential__card" : ""}`}>
      <div className={"bs__img-box" + " " + `${addShopCn ? "residential__img-box" : ""}`}>
        <img className="bs__img" src={img} alt={`${altName} icon`} />
      </div>
      <div className="bs__texts-box">
        <span className={"bs__card-name" + " " + `${addShopCn ? "residential__card-name" : ""}`}>{name}</span>
        <span className={"bs__card-price" + " " + `${addShopCn ? "residential__card-price" : ""}`}>{price}</span>
      </div>
    </li>)
}

export default BestSellingCard 