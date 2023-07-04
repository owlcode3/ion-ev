import { Link } from "react-router-dom"

function Features() {
  return (
    <div className="pd-features__container">
      <ul className="pd-features__lists-2">
        <li className="pd-features__list-2">
          Up to 44 mi of range added per hour
        </li>
        <li className="pd-features__list-2">
          Auto-sensing handle to open charge port
        </li>
        <li className="pd-features__list-2">
          Wi-Fi connectivity for over-the-air updates, remote diagnostics and access controls
        </li>
        <li className="pd-features__list-2">
          Scheduled charging and data tracking through the Tesla app
        </li>
        <li className="pd-features__list-2">
          Versatile indoor/outdoor design
        </li>
        <li className="pd-features__list-2">
          Variable amperage configurations depending on installation location
        </li>
        <li className="pd-features__list-2">
          Power-share with up to six Wall Connectors
        </li>
        <li className="pd-features__list-2">
          24-foot cable length
        </li>
        <li className="pd-features__list-2">
          Four-year warranty for residential use
        </li>
      </ul>

      <div>
        <div className="pd-features__installation-box">
          <span className="pd-features__installation">Installation Guidance</span>
          <p className="pd-features__texts">Wall Connector must be installed by a qualified electrician.
            Visit our <Link className="pd-features__link-1" to="/">Find an Electrician</Link> page to request a quote from one of the 1,000+
            Tesla Certified Electricians. <Link className="pd-features__link-1" to="/">Installation videos and manuals</Link> are also available.
            All our installations are carried out professionally with a guarantee on workmanship.</p>
        </div>
        <div className="pd-features__support-box">
          <span className="pd-features__support">Support</span>
          <ul className="pd-features__support-lists">
            <li className="pd-features__support-list">
              For questions about an existing Wall Connector order (tracking, cancelation or updates),
              <Link className="pd-features__link-2" to="/"> reach out to our customer support here</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="pd-features__resources">Additional resources</span>
          <ul className="pd-features__resources-lists">
            <li className="pd-features__resources-list">
              Wall Connector FAQs
            </li>
            <li className="pd-features__resources-list">
              Gen 3 Wall Connector Power Sharing
            </li>
            <li className="pd-features__resources-list">
              Installing a Wall Connector
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features