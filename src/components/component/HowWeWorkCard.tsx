type Props = {
  heading: string,
  paragraph: string,
  img: string,
  altName: string
}


function HowWeWorkCard({ heading, paragraph, img, altName }: Props) {
  return (
    <li className="hww__card">
      <span className="hww__img">
        <img src={img} alt={`${altName} icon`} />
      </span>
      <div className="hww__texts-box">
        <h2 className="hww__card-heading">{heading}</h2>
        <p className="hww__card-paragraph">{paragraph}</p>
      </div>
    </li>)
}

export default HowWeWorkCard