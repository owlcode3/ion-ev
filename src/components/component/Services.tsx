import ServicesCard from "./ServicesCard"

function Services() {
  const serviceDetails = [
    {
      heading: "Residential Installation",
      paragraph: "Charge your EV wherever you live. Designed for apartments, our chargers are fast, safe and smart.",
      img: "/bro.svg",
      cardClassName: "services__card--1",
      illustrationName: "car"
    },
    {
      heading: "Purchase Chargers",
      paragraph: "Pay the price from your instant quote securely online, in full or with our monthly finance options.",
      img: "/R-f-2.svg",
      cardClassName: "services__card--2",
      illustrationName: "card"
    },

    {
      heading: "Commercial Installation",
      paragraph: "Make EV charging an easy sell to your place of work. Charging that benefits commercial and fleet drivers too.",
      img: "/R-f-1.svg",
      cardClassName: "services__card--3",
      illustrationName: "building"
    },

  ]
  return (
    <section className="services">
      <div className="services__box-1">
        <h2 className="services__heading">What we can do for you</h2>
        <p className="services__paragraph">Here are the services we render at ion. Tap the link and one of our experts is waiting at the other end</p>
      </div>

      <ul className="services__box-2">
        {serviceDetails.map((txt, index) => index === 0 ? <ServicesCard key={index} heading={txt.heading} paragraph={txt.paragraph} paragraphClassName={index > 0 ? `services__card-paragraph--${index + 1 as unknown as string}` : ""} img={txt.img} className={txt.cardClassName} illustrationName={txt.illustrationName} imgClassName={index > 0 ? `services__img--${index + 1 as unknown as string}` : ""} /> : "")}

        {<div className="services__inner-card-box">
          {serviceDetails.map((txt, index) => index > 0 && <ServicesCard key={index} heading={txt.heading} paragraph={txt.paragraph} paragraphClassName={index > 0 ? `services__card-paragraph--${index + 1 as unknown as string}` : ""} img={txt.img} className={txt.cardClassName} illustrationName={txt.illustrationName} imgClassName={index > 0 ? `services__img--${index + 1 as unknown as string}` : ""} />)}
        </div>}
      </ul>
    </section>
  )
}

export default Services