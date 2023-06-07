import { Link } from "react-router-dom"

function LogoWhite() {
  return (
    <Link to="/" className="logo-white">
      <span className="logo-white__icon-box"><img src="/Logo.svg" alt="logo" /></span> <span className="logo-white__text-box">ion ev</span>
    </Link>
  )
}

export default LogoWhite