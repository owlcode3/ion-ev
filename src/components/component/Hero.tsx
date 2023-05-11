import { Link } from "react-router-dom"


function Hero() {
  return (
    <div className="hero">
      <div className="hero__link-box-1">
        <div className="hero__link-box-2">
          <Link className="hero__link" to="/">FLAT RATE INSTALLATION</Link>
        </div>
      </div>
      <h1 className="hero__heading">Get your EV Charging Station Installed right!</h1>
      <p className="hero__paragraph">We have an expert EV installer in your area who can
        provide you with a cost-effective and safe installation
        of your EV charging station.
      </p>
      <button className="hero__btn">Book Appointment <img src="/arrow-r.svg" alt="arrow right icon" /></button>
    </div>
  )
}

export default Hero