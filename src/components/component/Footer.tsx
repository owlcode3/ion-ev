import { Link } from "react-router-dom"
import LogoGreen from "./LogoGreen"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__boxes">
        <ul className="footer__box-1">
          <li className="footer__details footer__details--1">
            <LogoGreen />
            <span className="footer__paragraph">
              Buy EV chargers. Book appointments with one of our agents to get your charger installed properly.
            </span>
          </li>

          <li className="footer__details">
            <span className="footer__details-name footer__details-name--mb">PRODUCTS</span>
            <span className="footer__details-name">Installation</span>
            <span className="footer__details-name">Book appointment</span>
            <span className="footer__details-name">Store</span>
          </li>

          <li className="footer__details">
            <span className="footer__details-name footer__details-name--mb">COMPANY</span>
            <span className="footer__details-name">Blog</span>
            <span className="footer__details-name">Career</span>
            <span className="footer__details-name">Terms & Condition</span>
          </li>

          <li className="footer__details">
            <span className="footer__details-name footer__details-name--mb">RESOURCES</span>
            <span className="footer__details-name">Help center</span>
            <span className="footer__details-name">Career</span>
            <span className="footer__details-name">Support</span>
          </li>
        </ul>

        <ul className="footer__box-2">
          <li className="footer__copyright">
            © {new Date().getFullYear()} Made by <Link className="footer__external-link" to="https://twitter.com/OloladeBello_">Ololade</Link> & <Link className="footer__external-link" to="https://twitter.com/LehtherHead">Olayinka</Link>
          </li>
          {/* <li className="footer__icons">
            <span className="footer__icon-box"><img className="footer__icon" src="/twitter-icon.svg" alt="twitter icon" /></span>
            <span className="footer__icon-box"><img className="footer__icon" src="/facebook-icon.svg" alt="facebook icon" /></span>
            <span className="footer__icon-box"><img className="footer__icon" src="/linkedin-icon.svg" alt="linkedin icon" /></span>
          </li> */}
        </ul>
      </div>
    </footer>
  )
}

export default Footer