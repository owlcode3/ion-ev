
type Props = {
  tag: string,
  text: string,
}

function ShopChargerCardTag({ tag, text, }: Props) {
  return (
    <li className="residential__card-for-tag">
      <div className="residential__img-box-for-tag">
        <img className="residential__img-for-tag" src="/safe-home.svg" alt="home icon" />
      </div>
      <div className="residential__texts-box-for-tag">
        <h2 className="residential__tag">{tag}</h2>
        <span className="residential__manifesto">{text}</span>
      </div>
    </li>)
}

export default ShopChargerCardTag