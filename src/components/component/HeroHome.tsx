import { Link } from "react-router-dom"


function HeroHome() {
  return (
    <div className="hero-home">
      <div className="hero-home__link-box-1">
        <div className="hero-home__link-box-2">
          <Link className="hero-home__link" to="/">FLAT RATE INSTALLATION</Link>
        </div>
      </div>
      <h1 className="hero-home__heading">Get your EV Charging Station Installed right!</h1>
      <p className="hero-home__paragraph">We have an expert EV installer in your area who can
        provide you with a cost-effective and safe installation
        of your EV charging station.
      </p>
      <button className="hero-home__btn">Book Appointment <img className="hero-home__btn-icon" src="/arrow-r.svg" alt="arrow right icon" /></button>
    </div>
  )
}

export default HeroHome