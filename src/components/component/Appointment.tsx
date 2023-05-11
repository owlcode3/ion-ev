

function Appointment() {
  return (
    <section className="appointment">
      <div className="appointment__box-1">
        <h2>Book an appointment today to get your EV chargers installed correctly</h2>
        <p>It takes just a few clicks to get an EV. installing a charger at your home should be just the same.</p>
        <button className="bs__btn">Book Appointment<img src="/arrow-r.svg" alt="arrow right icon" /></button>
      </div>
      <div className="appointment__box-2">
        <img src="/appointment-chargers.svg" alt="" />
      </div>
    </section>
  )
}

export default Appointment