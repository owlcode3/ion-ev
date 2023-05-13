

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__boxes">
        <ul className="footer__box-1">
          <li className="footer__details footer__details--1">
            <div className="footer__logo">
              <span className="footer__logo-icon-box"><img src="/logo-2.svg" alt="logo" /></span> <span className="footer__logo-text-box">ion ev</span>
            </div>
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
            © 2023 ion ev . All rights reserved.
          </li>
          <li className="footer__icons">
            <span className="footer__icon-box"><img className="footer__icon" src="/public/twitter-icon.svg" alt="twitter icon" /></span>
            <span className="footer__icon-box"><img className="footer__icon" src="/public/facebook-icon.svg" alt="facebook icon" /></span>
            <span className="footer__icon-box"><img className="footer__icon" src="/public/linkedin-icon.svg" alt="linkedin icon" /></span>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer