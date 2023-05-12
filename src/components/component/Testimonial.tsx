import TestimonialCard from "./TestimonialCard"
import { useEffect, useState } from "react"


function Testimonial() {

  const cardDetails = [
    {
      paragraph: '“They are simply the best in the business! They went above and beyond to ensure that my EV charger was installed correctly and efficiently, and their attention to detail was second to none. I would definitely use them again in the future and recommend them to anyone in need of their services"',
      name: "Patricia Shaw",
      img: "/t-image.svg"
    },
    {
      paragraph: `“I was really impressed with the level of customer service provided by this Ion EV install agency. From the initial consultation to the final installation, they were always responsive and attentive to my needs. Their team of technicians did an excellent job, and I couldn't be happier with the end result."`,
      name: "Femi Lawrence",
      img: "/t-image-2.svg"
    }
  ]

  const [slideX, setSlideX] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => setSlideX(prev => (prev === 1 ? 0 : prev + 1)), 4000);
    return () => clearInterval(slide);
  }, []);

  const slideNext = () => {
    setSlideX(prev => (prev === 1 ? 0 : prev + 1));
  }

  const slidePrev = () => {
    setSlideX(prev => (prev === 0 ? 1 : prev - 1));
  }



  return (
    <section className="testimonial">
      <div className="testimonial__box-1">
        <h2 className="testimonial__heading">Don’t just take our word for it.</h2>
        <p className="testimonial__paragraph">Here’s what some of our customers says about us.</p>
      </div>
      <ul className="testimonial__lists">
        {cardDetails.map((card, index) => <TestimonialCard paragraph={card.paragraph} name={card.name} img={card.img} index={index} slide={slideX} />)}
      </ul>
      <div className="testimonial__box-3">
        <div className="testimonial__icons-box">
          <span onClick={slidePrev} className="testimonial__icon-box"><img src="/arrow-l.svg" alt="arrow icon" /></span>
          <span onClick={slideNext} className="testimonial__icon-box"><img src="/arrow-r.svg" alt="arrow icon" /></span>
        </div>
        <div className="testimonial__line-box">
          <span className="testimonial__line" style={{ left: slideX == 0 ? 0 : "", right: slideX === 1 ? 0 : "" }}></span>
        </div>
      </div>
    </section>)
}

export default Testimonial