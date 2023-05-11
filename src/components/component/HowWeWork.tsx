import HowWeWorkCard from "./HowWeWorkCard"

function HowWeWork() {
  const workDetails = [
    {
      heading: "Schedule an appointment",
      paragraph: "Whether it's for a routine check-up or a special consultation, scheduling an appointment is quick and easy.",
      img: "/Calendar.svg",
      altName: "calendar"
    },
    {
      heading: "Install Charger",
      paragraph: "Whether it's for a routine check-up or a special consultation, scheduling an appointment is quick and easy.",
      img: "/charger.svg",
      altName: "charger"
    },

    {
      heading: "Enjoy your new EV!",
      paragraph: "Whether it's for a routine check-up or a special consultation, scheduling an appointment is quick and easy.",
      img: "/electric-car.svg",
      altName: "electric-car"
    }
  ]

  return (
    <section className="hww">
      <div className="hww__box-1">
        <h2 className="hww__heading">How we work</h2>
        <p className="hww__paragraph">It’s insanely easy to get EV/Hybrid charged! Follow these step by step guide.</p>
      </div>

      <ul className="hww__box-2">
        {workDetails.map((txt, index) => <HowWeWorkCard key={index} heading={txt.heading} paragraph={txt.paragraph} img={txt.img} altName={txt.altName} />)}
      </ul>

      <button className="hww__btn">Get started <img src="/arrow-r.svg" alt="arrow right icon" /></button>
    </section>
  )
}

export default HowWeWork