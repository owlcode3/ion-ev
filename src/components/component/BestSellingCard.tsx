type Props = {
  name: string,
  price: string,
  img: string,
  altName: string
}


function BestSellingCard({ name, price, img, altName }: Props) {
  return (
    <li className="bs__card">
      <div className="bs__img-box">
        <img className="bs__img" src={img} alt={`${altName} icon`} />
      </div>
      <div className="bs__texts-box">
        <span className="bs__card-name">{name}</span>
        <span className="bs__card-price">{price}</span>
      </div>
    </li>)
}

export default BestSellingCard