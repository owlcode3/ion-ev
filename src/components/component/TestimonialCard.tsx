
type Props = {
  paragraph: string,
  name: string,
  img: string
}

function TestimonialCard({ paragraph, name, img }: Props) {
  return (
    <li className="testimonial__list">
      <div className="testimonial__inner-box testimonial__inner-box--1">
        <p className="testimonial__inner-paragraph">
          {paragraph}
        </p>
      </div>
      <div className="testimonial__inner-box testimonial__inner-box--2">
        <img className="testimonial__inner-img" src={img} alt="image" />
        <span className="testimonial__inner-name">{name}</span>
      </div>
    </li>)
}

export default TestimonialCard