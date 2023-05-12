

function Installation() {
  return (
    <section className="installation">
      <div className="installation__boxes">
        <div className="installation__box-1">
          <img className="installation__img installation__img--1" src="/i-charger-1.svg" alt="" />
          <img className="installation__img installation__img--2" src="/i-charger-2.svg" alt="" />
        </div>

        <div className="installation__box-2">
          <h2 className="installation__heading">Buy and install your EV chargers with ease</h2>
          <p className="installation__paragraph">It`s insanely easy to get EV/Hybrid charged! Follow these step by step guide.</p>
          <button className="installation__btn">Buy chargers<img src="/arrow-r.svg" alt="arrow right icon" /></button>
        </div>

        <div className="installation__box-3">
          <img className="installation__img installation__img--3" src="/i-charger-3.svg" alt="" />
          <img className="installation__img installation__img--4" src="/i-charger-4.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Installation