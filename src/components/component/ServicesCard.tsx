import { Link } from "react-router-dom"

type Props = {
  heading: string,
  paragraph: string,
  paragraphClassName: string | boolean,
  imgClassName: string | boolean,
  img: string,
  className: string,
  illustrationName: string
}

function ServicesCard({ heading, paragraph, paragraphClassName, imgClassName, img, className, illustrationName }: Props) {
  return (
    <li className={"services__card" + " " + `${className}`}>
      <img className={`services__img ${imgClassName}`} src={img} alt={`${illustrationName} illustration`} />
      <div className="services__texts-box">
        <h2 className="services__card-heading">{heading}</h2>
        <p className={`services__card-paragraph ${paragraphClassName}`}>{paragraph}</p>
        <Link className="services__link" to="/">Get started <img src="/Stroke 1.svg" alt="" /></Link>
      </div>
    </li>)
}

export default ServicesCard